import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Pencil, Trash2, Eye } from "lucide-react";
import { format } from "date-fns";

interface Post {
  id: string;
  title: string;
  slug: string;
  status: string;
  publish_date: string | null;
  created_at: string;
  author_name: string;
  blog_categories: { name: string } | null;
}

const statusColors: Record<string, string> = {
  draft: "bg-yellow-500/10 text-yellow-400",
  published: "bg-green-500/10 text-green-400",
  scheduled: "bg-blue-500/10 text-blue-400",
};

const AdminPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const { data } = await supabase
      .from("blog_posts")
      .select("id, title, slug, status, publish_date, created_at, author_name, blog_categories(name)")
      .order("created_at", { ascending: false });
    setPosts((data as unknown as Post[]) ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchPosts(); }, []);

  const deletePost = async (id: string) => {
    if (!confirm("Delete this post?")) return;
    await supabase.from("blog_post_tags").delete().eq("post_id", id);
    await supabase.from("blog_posts").delete().eq("id", id);
    fetchPosts();
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Blog Posts</h1>
        <Link
          to="/admin/posts/new"
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" /> New Post
        </Link>
      </div>

      <div className="rounded-xl border border-white/10 bg-[#1a1d27] overflow-hidden">
        {loading ? (
          <p className="p-8 text-center text-gray-500">Loading...</p>
        ) : posts.length === 0 ? (
          <p className="p-8 text-center text-gray-500">No posts yet. Create your first post.</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                <th className="px-5 py-3">Title</th>
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-white/5 hover:bg-white/[0.02]">
                  <td className="px-5 py-4">
                    <p className="font-medium text-white">{post.title}</p>
                    <p className="text-xs text-gray-500">/{post.slug}</p>
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-400">
                    {post.blog_categories?.name ?? "—"}
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusColors[post.status] ?? ""}`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-400">
                    {format(new Date(post.publish_date || post.created_at), "dd MMM yyyy")}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      {post.status === "published" && (
                        <a
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded p-1.5 text-gray-400 hover:bg-white/10 hover:text-white"
                          title="View"
                        >
                          <Eye className="h-4 w-4" />
                        </a>
                      )}
                      <Link
                        to={`/admin/posts/${post.id}`}
                        className="rounded p-1.5 text-gray-400 hover:bg-white/10 hover:text-white"
                        title="Edit"
                      >
                        <Pencil className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => deletePost(post.id)}
                        className="rounded p-1.5 text-gray-400 hover:bg-red-500/10 hover:text-red-400"
                        title="Delete"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminPosts;
