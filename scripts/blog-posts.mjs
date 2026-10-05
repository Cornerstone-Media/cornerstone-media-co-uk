// Shared helpers for build scripts that read published rows from blog_posts.
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(__dirname, "..");

export async function loadEnv() {
  const env = { ...process.env };
  try {
    const raw = await fs.readFile(path.join(ROOT, ".env"), "utf8");
    for (const line of raw.split("\n")) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && !env[m[1]]) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  } catch {
    /* no .env file — rely on process.env */
  }
  return env;
}

/** Returns published posts (never throws; logs a warning and returns [] on failure). */
export async function fetchPublishedPosts(
  env,
  select = "slug,publish_date,updated_at,created_at",
  tag = "blog",
) {
  const url = env.VITE_SUPABASE_URL;
  const key = env.VITE_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) {
    console.warn(`[${tag}] Backend credentials unavailable — skipping blog posts.`);
    return [];
  }
  const endpoint =
    `${url}/rest/v1/blog_posts` +
    `?select=${select}&status=eq.published&order=publish_date.desc`;
  try {
    const res = await fetch(endpoint, {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
    });
    if (!res.ok) {
      console.warn(`[${tag}] blog_posts request failed (${res.status}) — skipping blog posts.`);
      return [];
    }
    const rows = await res.json();
    return Array.isArray(rows) ? rows.filter((r) => r && r.slug) : [];
  } catch (err) {
    console.warn(`[${tag}] blog_posts request errored — skipping blog posts.`, err?.message || err);
    return [];
  }
}
