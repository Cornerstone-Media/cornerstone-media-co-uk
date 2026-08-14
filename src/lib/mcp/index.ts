import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listBlogPosts from "./tools/list-blog-posts";
import getBlogPost from "./tools/get-blog-post";
import createBlogPost from "./tools/create-blog-post";
import updateBlogPost from "./tools/update-blog-post";
import listContactSubmissions from "./tools/list-contact-submissions";
import listKeywordRankings from "./tools/list-keyword-rankings";
import addTrackedKeyword from "./tools/add-tracked-keyword";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "cornerstone-growth-engine",
  title: "Cornerstone Growth Engine",
  version: "0.1.0",
  instructions:
    "Tools for Cornerstone Media's website: read and write news/blog posts, review contact enquiries, and manage SEO keyword tracking. All tools act as the signed-in Cornerstone Media user.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [
    listBlogPosts,
    getBlogPost,
    createBlogPost,
    updateBlogPost,
    listContactSubmissions,
    listKeywordRankings,
    addTrackedKeyword,
  ],
});
