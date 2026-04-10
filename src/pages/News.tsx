import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, User } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image_url: string | null;
  author_name: string;
  publish_date: string | null;
  created_at: string;
  category_id: string | null;
}

const newsSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Cornerstone Media News & Insights",
  description:
    "Digital marketing news, SEO tips, PPC strategies, and website design insights from Birmingham's leading marketing agency.",
  url: "https://cornerstone-media.co.uk/news",
  publisher: {
    "@type": "Organization",
    name: "Cornerstone Media",
    url: "https://cornerstone-media.co.uk",
  },
};

const News = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select(
          "id, title, slug, excerpt, featured_image_url, author_name, publish_date, created_at, category_id"
        )
        .eq("status", "published")
        .order("publish_date", { ascending: false });

      if (!error && data) setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      <SEOHead
        title="Digital Marketing News & Insights | Cornerstone Media Birmingham"
        description="Stay up to date with the latest digital marketing news, SEO strategies, PPC tips, and website design insights from Cornerstone Media, Birmingham's trusted marketing agency."
        canonical="https://cornerstone-media.co.uk/news"
        schema={newsSchema}
      />
      <Navbar />
      <main className="min-h-screen pt-28">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-wider text-accent">
                News &amp; Insights
              </span>
              <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Digital Marketing <span className="gradient-text">News</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
                Expert insights on SEO, PPC, social media, and website design from Birmingham's
                leading digital marketing agency.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {loading ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="animate-pulse rounded-2xl border border-border bg-card p-6"
                  >
                    <div className="mb-4 h-48 rounded-xl bg-muted" />
                    <div className="mb-2 h-6 w-3/4 rounded bg-muted" />
                    <div className="h-4 w-full rounded bg-muted" />
                  </div>
                ))}
              </div>
            ) : posts.length === 0 ? (
              <p className="text-center font-body text-muted-foreground">
                No articles published yet. Check back soon!
              </p>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, i) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    <Link to={`/news/${post.slug}`} className="block">
                      <div className="card-hover overflow-hidden rounded-2xl border border-border bg-card">
                        {post.featured_image_url && (
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={post.featured_image_url}
                              alt={post.title}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <div className="mb-3 flex items-center gap-4 font-body text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              {formatDate(post.publish_date || post.created_at)}
                            </span>
                            <span className="flex items-center gap-1">
                              <User className="h-3.5 w-3.5" />
                              {post.author_name}
                            </span>
                          </div>
                          <h2 className="mb-2 font-heading text-xl font-bold text-foreground transition-colors group-hover:text-accent">
                            {post.title}
                          </h2>
                          {post.excerpt && (
                            <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground line-clamp-3">
                              {post.excerpt}
                            </p>
                          )}
                          <span className="inline-flex items-center gap-1 font-body text-sm font-semibold text-accent transition-all group-hover:gap-2">
                            Read More <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default News;
