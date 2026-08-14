import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "update_blog_post",
  title: "Update blog post",
  description: "Update fields of an existing blog post identified by its slug, including publishing a draft.",
  inputSchema: {
    slug: z.string().trim().min(1).describe("Slug of the post to update."),
    title: z.string().trim().min(1).optional(),
    new_slug: z.string().trim().regex(/^[a-z0-9-]+$/).optional().describe("Change the post slug."),
    content: z.string().optional().describe("Post body as HTML."),
    excerpt: z.string().optional(),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    status: z.enum(["draft", "published"]).optional(),
    publish_date: z.string().optional(),
  },
  annotations: { readOnlyHint: false, destructiveHint: true, openWorldHint: false },
  handler: async ({ slug, new_slug, ...fields }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const patch: Record<string, unknown> = { ...fields };
    if (new_slug) patch.slug = new_slug;
    Object.keys(patch).forEach((k) => patch[k] === undefined && delete patch[k]);
    if (Object.keys(patch).length === 0) {
      return { content: [{ type: "text", text: "No fields provided to update." }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    const { data, error } = await supabase
      .from("blog_posts")
      .update(patch)
      .eq("slug", slug)
      .select()
      .maybeSingle();
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    if (!data) return { content: [{ type: "text", text: `No post updated for slug "${slug}" (not found or not permitted).` }], isError: true };
    return {
      content: [{ type: "text", text: `Updated "${data.title}" (${data.status})` }],
      structuredContent: { post: data },
    };
  },
});
