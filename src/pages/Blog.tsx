import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { format } from "date-fns";
import { motion } from "framer-motion";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image_url: string | null;
  publish_date: string | null;
  created_at: string;
  author_name: string;
  blog_categories: { name: string; slug: string } | null;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, featured_image_url, publish_date, created_at, author_name, blog_categories(name, slug)")
        .eq("status", "published")
        .lte("publish_date", new Date().toISOString())
        .order("publish_date", { ascending: false });
      setPosts((data as unknown as Post[]) ?? []);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Blog | Digital Marketing Insights | Cornerstone Media"
        description="Expert digital marketing insights from Cornerstone Media. Tips on SEO, PPC, social media, and web design for Birmingham businesses."
        canonical="https://cornerstone-media.co.uk/blog"
      />
      <Navbar />

      <main className="pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 max-w-3xl"
          >
            <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Blog
            </p>
            <h1 className="mb-4 font-heading text-4xl font-extrabold text-foreground md:text-6xl">
              Digital Marketing <span className="gradient-text">Insights</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Expert tips, strategies, and news from Birmingham's leading digital marketing agency.
            </p>
          </motion.div>

          {loading ? (
            <p className="text-center text-muted-foreground">Loading posts...</p>
          ) : posts.length === 0 ? (
            <p className="text-center text-muted-foreground">No posts published yet. Check back soon!</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-secondary/20 card-hover"
                >
                  {post.featured_image_url && (
                    <Link to={`/blog/${post.slug}`}>
                      <img
                        src={post.featured_image_url}
                        alt={post.title}
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </Link>
                  )}
                  <div className="p-6">
                    {post.blog_categories?.name && (
                      <span className="mb-3 inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                        {post.blog_categories.name}
                      </span>
                    )}
                    <Link to={`/blog/${post.slug}`}>
                      <h2 className="mb-2 font-heading text-lg font-bold text-foreground transition-colors group-hover:text-secondary">
                        {post.title}
                      </h2>
                    </Link>
                    {post.excerpt && (
                      <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{post.author_name}</span>
                      <time>{format(new Date(post.publish_date || post.created_at), "dd MMM yyyy")}</time>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
