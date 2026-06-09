#!/usr/bin/env node
// Post-build prerender: for each route in scripts/seo-routes.mjs, write
// dist/<route>/index.html with that route's unique <title>, meta description,
// canonical, og:* / twitter:* tags and JSON-LD baked into the static markup.
// The SPA still hydrates on top, but crawlers (and AI crawlers that do not
// execute JS) see the correct head + body content immediately.

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES, SITE_ORIGIN } from "./seo-routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const escapeAttr = escapeHtml;

function buildHead({ title, description, canonical, jsonLd = [] }) {
  const tags = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeAttr(description)}" />`,
    `<meta name="robots" content="index, follow" />`,
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
}

main().catch((err) => {
  console.error("[prerender] Failed:", err);
  process.exit(1);
});
