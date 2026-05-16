// CSV monthly report: one row per tracked keyword with first/last position + impressions/clicks in the month.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function csvEscape(v: unknown) {
  if (v === null || v === undefined) return "";
  const s = String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) return new Response("Unauthorized", { status: 401, headers: corsHeaders });
    const userClient = createClient(SUPABASE_URL, ANON_KEY, { global: { headers: { Authorization: authHeader } } });
    const { data: userData } = await userClient.auth.getUser();
    const user = userData?.user;
    if (!user) return new Response("Unauthorized", { status: 401, headers: corsHeaders });

    const admin = createClient(SUPABASE_URL, SERVICE_KEY);
    const { data: roles } = await admin.from("user_roles").select("role").eq("user_id", user.id);
    const allowed = roles?.some((r: { role: string }) => r.role === "admin" || r.role === "editor");
    if (!allowed) return new Response("Forbidden", { status: 403, headers: corsHeaders });

    const url = new URL(req.url);
    const month = url.searchParams.get("month"); // YYYY-MM
    if (!month || !/^\d{4}-\d{2}$/.test(month)) {
      return new Response("month query param required (YYYY-MM)", { status: 400, headers: corsHeaders });
    }
    const [y, m] = month.split("-").map(Number);
    const start = new Date(Date.UTC(y, m - 1, 1));
    const end = new Date(Date.UTC(y, m, 1));

    const { data: keywords } = await admin
      .from("tracked_keywords")
      .select("id, keyword, country")
      .order("keyword");

    const { data: rankings } = await admin
      .from("keyword_rankings")
      .select("keyword_id, position, impressions, clicks, ctr, captured_at")
      .gte("captured_at", start.toISOString())
      .lt("captured_at", end.toISOString())
      .order("captured_at", { ascending: true });

    const byKw = new Map<string, Array<{ position: number | null; impressions: number; clicks: number; ctr: number; captured_at: string }>>();
    for (const r of rankings ?? []) {
      const arr = byKw.get(r.keyword_id) ?? [];
      arr.push(r);
      byKw.set(r.keyword_id, arr);
    }

    const header = ["Keyword", "Country", "First position", "Latest position", "Change", "Best position", "Impressions", "Clicks", "Avg CTR (%)", "Snapshots"];
    const lines = [header.join(",")];

    for (const kw of keywords ?? []) {
      const rows = byKw.get(kw.id) ?? [];
      const positions = rows.map((r) => r.position).filter((p): p is number => p !== null);
      const first = positions[0] ?? null;
      const last = positions[positions.length - 1] ?? null;
      const best = positions.length ? Math.min(...positions) : null;
      const change = first !== null && last !== null ? +(first - last).toFixed(2) : null;
      const impressions = rows.reduce((s, r) => s + (r.impressions || 0), 0);
      const clicks = rows.reduce((s, r) => s + (r.clicks || 0), 0);
      const avgCtr = rows.length ? rows.reduce((s, r) => s + (r.ctr || 0), 0) / rows.length : 0;
      lines.push([
        kw.keyword, kw.country,
        first?.toFixed(1) ?? "",
        last?.toFixed(1) ?? "",
        change ?? "",
        best?.toFixed(1) ?? "",
        impressions, clicks,
        (avgCtr * 100).toFixed(2),
        rows.length,
      ].map(csvEscape).join(","));
    }

    return new Response(lines.join("\n"), {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="seo-rankings-${month}.csv"`,
      },
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    console.error("gsc-monthly-report error", msg);
    return new Response(msg, { status: 500, headers: corsHeaders });
  }
});
