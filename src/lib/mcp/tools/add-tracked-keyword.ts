import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "add_tracked_keyword",
  title: "Add tracked keyword",
  description: "Add a keyword to the SEO rank tracking dashboard.",
  inputSchema: {
    keyword: z.string().trim().min(1).describe("Search term to track, e.g. 'ppc birmingham'."),
    country: z.string().trim().min(2).max(3).default("gbr").describe("Country code for the tracking market."),
    notes: z.string().optional().describe("Optional note about why this keyword matters."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: false },
  handler: async ({ keyword, country, notes }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    const { data, error } = await supabase
      .from("tracked_keywords")
      .insert({ keyword, country: country ?? "gbr", notes, created_by: ctx.getUserId() })
      .select()
      .single();
    return error
      ? { content: [{ type: "text", text: error.message }], isError: true }
      : {
          content: [{ type: "text", text: `Now tracking "${data.keyword}" (${data.country})` }],
          structuredContent: { keyword: data },
        };
  },
});
