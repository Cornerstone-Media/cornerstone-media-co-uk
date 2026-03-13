import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { FileText, FolderOpen, Tags, MessageSquare } from "lucide-react";

const AdminDashboard = () => {
  const [stats, setStats] = useState({ posts: 0, published: 0, categories: 0, tags: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const [postsRes, publishedRes, catsRes, tagsRes] = await Promise.all([
        supabase.from("blog_posts").select("id", { count: "exact", head: true }),
        supabase.from("blog_posts").select("id", { count: "exact", head: true }).eq("status", "published"),
        supabase.from("blog_categories").select("id", { count: "exact", head: true }),
        supabase.from("blog_tags").select("id", { count: "exact", head: true }),
      ]);
      setStats({
        posts: postsRes.count ?? 0,
        published: publishedRes.count ?? 0,
        categories: catsRes.count ?? 0,
        tags: tagsRes.count ?? 0,
      });
    };
    fetchStats();
  }, []);

  const cards = [
    { label: "Total Posts", value: stats.posts, icon: FileText, color: "text-blue-400" },
    { label: "Published", value: stats.published, icon: MessageSquare, color: "text-green-400" },
    { label: "Categories", value: stats.categories, icon: FolderOpen, color: "text-purple-400" },
    { label: "Tags", value: stats.tags, icon: Tags, color: "text-amber-400" },
  ];

  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold text-white">Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-xl border border-white/10 bg-[#1a1d27] p-6"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-400">{card.label}</p>
              <card.icon className={`h-5 w-5 ${card.color}`} />
            </div>
            <p className="mt-3 text-3xl font-bold text-white">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
