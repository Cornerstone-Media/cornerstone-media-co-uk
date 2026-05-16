// Sync rankings from Google Search Console for all tracked keywords.
// Admin/editor only. Inserts one keyword_rankings row per tracked keyword.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console/webmasters/v3";
const SITE = "https://cornerstone-media.co.uk/";

function isoDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const GSC_KEY = Deno.env.get("GOOGLE_SEARCH_CONSOLE_API_KEY");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;
    if (!LOVABLE_API_KEY || !GSC_KEY) {
      return new Response(JSON.stringify({ error: "Google Search Console connector is not configured." }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Auth: require admin/editor caller
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: corsHeaders });
    const userClient = createClient(SUPABASE_URL, ANON_KEY, { global: { headers: { Authorization: authHeader } } });
    const { data: userData } = await userClient.auth.getUser();
    const user = userData?.user;
    if (!user) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: corsHeaders });

    const admin = createClient(SUPABASE_URL, SERVICE_KEY);
    const { data: roles } = await admin.from("user_roles").select("role").eq("user_id", user.id);
    const allowed = roles?.some((r: { role: string }) => r.role === "admin" || r.role === "editor");
    if (!allowed) return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403, headers: corsHeaders });

    const { data: keywords, error: kwErr } = await admin
      .from("tracked_keywords")
      .select("id, keyword");
    if (kwErr) throw kwErr;
    if (!keywords?.length) {
      return new Response(JSON.stringify({ synced: 0, message: "No keywords to sync." }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const endDate = new Date();
    endDate.setDate(endDate.getDate() - 3); // GSC lag
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - 28);
    const range_start = isoDate(startDate);
    const range_end = isoDate(endDate);

    const inserts: Array<Record<string, unknown>> = [];
    for (const kw of keywords) {
      const body = {
        startDate: range_start,
        endDate: range_end,
        dimensions: ["query"],
        dimensionFilterGroups: [{
          filters: [{ dimension: "query", operator: "equals", expression: kw.keyword.toLowerCase() }],
        }],
        rowLimit: 1,
      };
      const r = await fetch(
        `${GATEWAY}/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": GSC_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        },
      );
      const json = await r.json().catch(() => ({}));
      const row = json?.rows?.[0];
      inserts.push({
        keyword_id: kw.id,
        position: row?.position ?? null,
        impressions: row?.impressions ?? 0,
        clicks: row?.clicks ?? 0,
        ctr: row?.ctr ?? 0,
        range_start,
        range_end,
      });
    }

    const { error: insErr } = await admin.from("keyword_rankings").insert(inserts);
    if (insErr) throw insErr;

    return new Response(JSON.stringify({ synced: inserts.length, range_start, range_end }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    console.error("gsc-rankings-sync error", msg);
    return new Response(JSON.stringify({ error: msg }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
