import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "list_contact_submissions",
  title: "List contact enquiries",
  description: "List recent website contact form enquiries (leads), newest first.",
  inputSchema: {
    limit: z.number().int().min(1).max(50).default(10).describe("Maximum enquiries to return."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ limit }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("id, name, email, phone, company, message, created_at")
      .order("created_at", { ascending: false })
      .limit(limit ?? 10);
    return error
      ? { content: [{ type: "text", text: error.message }], isError: true }
      : {
          content: [{ type: "text", text: JSON.stringify(data ?? [], null, 2) }],
          structuredContent: { submissions: data ?? [] },
        };
  },
});
