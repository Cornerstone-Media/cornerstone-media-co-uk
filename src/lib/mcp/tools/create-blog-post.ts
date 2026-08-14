import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "create_blog_post",
  title: "Create blog post",
  description: "Create a new news/blog post. Defaults to draft status so it is not published immediately.",
  inputSchema: {
    title: z.string().trim().min(1).describe("Post title."),
    slug: z.string().trim().min(1).regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers and hyphens.").describe("URL slug."),
    content: z.string().optional().describe("Post body as HTML."),
    excerpt: z.string().optional().describe("Short summary shown in listings."),
    meta_title: z.string().optional().describe("SEO title tag."),
    meta_description: z.string().optional().describe("SEO meta description."),
    status: z.enum(["draft", "published"]).default("draft").describe("Publication status."),
    publish_date: z.string().optional().describe("ISO date/time to show as the publish date."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: false },
  handler: async (input, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    const { data, error } = await supabase
      .from("blog_posts")
      .insert({ ...input, status: input.status ?? "draft", user_id: ctx.getUserId() })
      .select()
      .single();
    return error
      ? { content: [{ type: "text", text: error.message }], isError: true }
      : {
          content: [{ type: "text", text: `Created "${data.title}" (${data.status}) at /news/${data.slug}` }],
          structuredContent: { post: data },
        };
  },
});
