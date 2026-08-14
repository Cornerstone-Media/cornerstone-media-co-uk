import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "list_keyword_rankings",
  title: "List keyword rankings",
  description: "List tracked SEO keywords with their most recent Google Search Console position, clicks and impressions.",
  inputSchema: {
    keyword: z.string().trim().min(1).optional().describe("Filter to keywords containing this text."),
    limit: z.number().int().min(1).max(50).default(20).describe("Maximum keywords to return."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ keyword, limit }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    let query = supabase
      .from("tracked_keywords")
      .select("id, keyword, country, notes, keyword_rankings(position, clicks, impressions, ctr, range_start, range_end, captured_at)")
      .order("keyword", { ascending: true })
      .limit(limit ?? 20);
    if (keyword) query = query.ilike("keyword", `%${keyword}%`);
    const { data, error } = await query;
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    const rows = (data ?? []).map((k) => {
      const rankings = [...(k.keyword_rankings ?? [])].sort(
        (a, b) => new Date(b.range_end).getTime() - new Date(a.range_end).getTime(),
      );
      return { id: k.id, keyword: k.keyword, country: k.country, notes: k.notes, latest: rankings[0] ?? null };
    });
    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { keywords: rows },
    };
  },
});
