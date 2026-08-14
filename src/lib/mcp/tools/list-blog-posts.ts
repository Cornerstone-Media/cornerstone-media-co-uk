import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "list_blog_posts",
  title: "List blog posts",
  description: "List Cornerstone Media news/blog posts, newest first, optionally filtered by status.",
  inputSchema: {
    status: z.enum(["draft", "published"]).optional().describe("Filter by post status."),
    search: z.string().trim().min(1).optional().describe("Match text in the post title."),
    limit: z.number().int().min(1).max(50).default(10).describe("Maximum posts to return."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ status, search, limit }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    let query = supabase
      .from("blog_posts")
      .select("id, title, slug, status, excerpt, publish_date, updated_at")
      .order("publish_date", { ascending: false, nullsFirst: false })
      .limit(limit ?? 10);
    if (status) query = query.eq("status", status);
    if (search) query = query.ilike("title", `%${search}%`);
    const { data, error } = await query;
    return error
      ? { content: [{ type: "text", text: error.message }], isError: true }
      : {
          content: [{ type: "text", text: JSON.stringify(data ?? [], null, 2) }],
          structuredContent: { posts: data ?? [] },
        };
  },
});
