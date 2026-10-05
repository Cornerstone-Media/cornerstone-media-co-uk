#!/usr/bin/env node
// Post-build prerender: for each route in scripts/seo-routes.mjs, write
// dist/<route>/index.html with that route's unique <title>, meta description,
// canonical, og:* / twitter:* tags and JSON-LD baked into the static markup.
// The SPA still hydrates on top, but crawlers (and AI crawlers that do not
// execute JS) see the correct head + body content immediately.

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES, SITE_ORIGIN, REDIRECTS } from "./seo-routes.mjs";
import { loadEnv, fetchPublishedPosts } from "./blog-posts.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const escapeAttr = escapeHtml;

function buildHead({ title, description, canonical, robots = "index, follow", jsonLd = [] }) {
  const tags = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeAttr(description)}" />`,
    `<meta name="robots" content="${escapeAttr(robots)}" />`,
    `<link rel="canonical" href="${escapeAttr(canonical)}" />`,
    `<meta property="og:title" content="${escapeAttr(title)}" />`,
    `<meta property="og:description" content="${escapeAttr(description)}" />`,
    `<meta property="og:url" content="${escapeAttr(canonical)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(description)}" />`,
  ];
  for (const ld of jsonLd) {
    // JSON.stringify guarantees no raw </script> sequences in normal data;
    // belt-and-braces escape just in case.
    const json = JSON.stringify(ld).replace(/<\/script/gi, "<\\/script");
    tags.push(`<script type="application/ld+json">${json}</script>`);
  }
  return tags.join("\n    ");
}

/**
 * Strip tags from the base index.html that would conflict with per-route
 * versions we are about to inject. Specifically: any existing <title>,
 * <meta name="description">, <link rel="canonical">, and og:/twitter:
 * title|description|url tags. We keep sitewide tags (og:image, og:type
 * fallback, etc.) — though we re-emit og:type per-route anyway.
 */
function stripConflictingTags(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/gi, "")
    .replace(/<meta\s+name=["']description["'][^>]*>\s*/gi, "")
    .replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+property=["']og:(title|description|url|type)["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+name=["']twitter:(title|description|card)["'][^>]*>\s*/gi, "");
}

function injectIntoHead(html, headBlock) {
  if (html.includes("</head>")) {
    return html.replace("</head>", `    ${headBlock}\n  </head>`);
  }
  return html;
}

function injectIntoBody(html, bodyHtml) {
  if (!bodyHtml) return html;
  // Insert hidden prerendered content right after the #root div so the
  // hydrated React app fully replaces it. Crawlers still read it.
  const marker = '<div id="root"></div>';
  if (html.includes(marker)) {
    const block = `<div id="root"></div>\n    <div id="prerendered-seo-content" hidden aria-hidden="true">${bodyHtml}</div>`;
    return html.replace(marker, block);
  }
  return html;
}

async function main() {
  const baseHtmlPath = path.join(DIST, "index.html");
  let baseHtml;
  try {
    baseHtml = await fs.readFile(baseHtmlPath, "utf8");
  } catch (err) {
    console.error(`[prerender] Cannot read ${baseHtmlPath}. Did vite build run first?`);
    process.exit(1);
  }

  const cleaned = stripConflictingTags(baseHtml);

  let written = 0;
  for (const [routePath, cfg] of Object.entries(ROUTES)) {
    const canonical = routePath === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${routePath}`;
    const headBlock = buildHead({
      title: cfg.title,
      description: cfg.description,
      canonical,
      robots: cfg.robots || "index, follow",
      jsonLd: cfg.jsonLd || [],
    });

    let html = injectIntoHead(cleaned, headBlock);
    html = injectIntoBody(html, cfg.bodyHtml);

    let outDir;
    let outFile;
    if (routePath === "/") {
      outFile = path.join(DIST, "index.html");
    } else {
      outDir = path.join(DIST, routePath.replace(/^\//, ""));
      await fs.mkdir(outDir, { recursive: true });
      outFile = path.join(outDir, "index.html");
    }
    await fs.writeFile(outFile, html, "utf8");
    written++;
    console.log(`[prerender] ${routePath} -> ${path.relative(DIST, outFile)}`);
  }

  console.log(`[prerender] Wrote ${written} static route files.`);

  // Emit redirect stubs for legacy URLs → canonical Birmingham pages.
  let redirected = 0;
  for (const [from, to] of Object.entries(REDIRECTS || {})) {
    const targetUrl = `${SITE_ORIGIN}${to}`;
    const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Redirecting…</title>
    <meta name="robots" content="noindex, follow" />
    <link rel="canonical" href="${escapeAttr(targetUrl)}" />
    <meta http-equiv="refresh" content="0; url=${escapeAttr(targetUrl)}" />
    <meta name="description" content="This page has moved to ${escapeAttr(targetUrl)}" />
    <script>window.location.replace(${JSON.stringify(to)});</script>
  </head>
  <body>
    <p>This page has moved to <a href="${escapeAttr(targetUrl)}">${escapeHtml(targetUrl)}</a>.</p>
  </body>
</html>
`;
    const outDir = path.join(DIST, from.replace(/^\//, ""));
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(path.join(outDir, "index.html"), html, "utf8");
    redirected++;
    console.log(`[prerender] redirect ${from} -> ${to}`);
  }
  console.log(`[prerender] Wrote ${redirected} redirect stubs.`);

  // Blog posts: one static file per published post.
  const env = await loadEnv();
  const posts = await fetchPublishedPosts(
    env,
    "slug,title,content,excerpt,author_name,publish_date,created_at,updated_at,meta_title,meta_description,featured_image_url",
    "prerender",
  );
  let blogWritten = 0;
  for (const post of posts) {
    try {
      const postUrl = `${SITE_ORIGIN}/news/${post.slug}`;
      const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.meta_title || post.title,
        name: post.title,
        description: post.meta_description || post.excerpt || "",
        url: postUrl,
        mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
        datePublished: post.publish_date || post.created_at,
        dateModified: post.updated_at || post.publish_date || post.created_at,
        inLanguage: "en-GB",
        author: { "@type": "Person", name: post.author_name },
        publisher: {
          "@type": "Organization",
          name: "Cornerstone Media",
          url: "https://cornerstone-media.co.uk",
          logo: { "@type": "ImageObject", url: "https://cornerstone-media.co.uk/og-logo.png" },
        },
        ...(post.featured_image_url && { image: post.featured_image_url }),
      };
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_ORIGIN}/` },
          { "@type": "ListItem", position: 2, name: "News", item: `${SITE_ORIGIN}/news` },
          { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
        ],
      };
      let headBlock = buildHead({
        title: post.meta_title || `${post.title} | Cornerstone Media`,
        description:
          post.meta_description ||
          post.excerpt ||
          "Read the latest digital marketing insights from Cornerstone Media Birmingham.",
        canonical: postUrl,
        jsonLd: [blogPostingSchema, breadcrumbSchema],
      }).replace(
        '<meta property="og:type" content="website" />',
        '<meta property="og:type" content="article" />',
      );
      const bodyHtml = `<article><h1>${escapeHtml(post.title)}</h1>${post.content || ""}</article>`;
      let html = injectIntoHead(cleaned, headBlock);
      html = injectIntoBody(html, bodyHtml);
      const outDir = path.join(DIST, "news", post.slug);
      await fs.mkdir(outDir, { recursive: true });
      await fs.writeFile(path.join(outDir, "index.html"), html, "utf8");
      blogWritten++;
      console.log(`[prerender] /news/${post.slug}`);
    } catch (err) {
      console.warn(`[prerender] Skipped /news/${post.slug}:`, err?.message || err);
    }
  }
  console.log(`[prerender] Wrote ${blogWritten} blog post files.`);

  // Fallback for posts published after the last deploy (served via vercel.json rewrite
  // only when no static file exists). No title/canonical so it never claims the homepage.
  await fs.writeFile(path.join(DIST, "news-fallback.html"), cleaned, "utf8");
  console.log("[prerender] Wrote news-fallback.html");
}

main().catch((err) => {
  console.error("[prerender] Failed:", err);
  process.exit(1);
});
