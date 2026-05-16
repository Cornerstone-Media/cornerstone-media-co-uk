import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

interface Post {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string | null;
  featured_image_url: string | null;
  author_name: string;
  publish_date: string | null;
  created_at: string;
  meta_title: string | null;
  meta_description: string | null;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .maybeSingle();

      if (!error && data) setPost(data);
      setLoading(false);
    };
    fetchPost();
  }, [slug]);

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const estimateReadTime = (content: string | null) => {
    if (!content) return "3 min read";
    const words = content.replace(/<[^>]+>/g, "").split(/\s+/).length;
    return `${Math.max(1, Math.round(words / 200))} min read`;
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-28">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <div className="animate-pulse space-y-4">
              <div className="h-8 w-3/4 rounded bg-muted" />
              <div className="h-4 w-1/2 rounded bg-muted" />
              <div className="mt-8 h-64 rounded-xl bg-muted" />
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-28">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <h1 className="font-heading text-3xl font-bold text-foreground">
              Article Not Found
            </h1>
            <p className="mt-4 font-body text-muted-foreground">
              Sorry, we couldn't find the article you're looking for.
            </p>
            <Link to="/news" className="gradient-btn mt-8 inline-block">
              Back to News
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.meta_description || post.excerpt || "",
    url: `https://cornerstone-media.co.uk/news/${post.slug}`,
    datePublished: post.publish_date || post.created_at,
    author: {
      "@type": "Person",
      name: post.author_name,
    },
    publisher: {
      "@type": "Organization",
      name: "Cornerstone Media",
      url: "https://cornerstone-media.co.uk",
    },
    ...(post.featured_image_url && { image: post.featured_image_url }),
  };

  return (
    <>
      <SEOHead
        title={post.meta_title || `${post.title} | Cornerstone Media`}
        description={
          post.meta_description ||
          post.excerpt ||
          "Read the latest digital marketing insights from Cornerstone Media Birmingham."
        }
        canonical={`https://cornerstone-media.co.uk/news/${post.slug}`}
        schema={articleSchema}
        ogType="article"
        ogImage={post.featured_image_url || undefined}
      />
      <Navbar />
      <main className="min-h-screen pt-28">
        <article className="section-padding">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <Link
                to="/news"
                className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to News
              </Link>
            </nav>

            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-4 border-b border-border pb-6 font-body text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {post.author_name}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.publish_date || post.created_at)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {estimateReadTime(post.content)}
                </span>
              </div>
            </motion.header>

            {post.featured_image_url && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 overflow-hidden rounded-2xl"
              >
                <img
                  src={post.featured_image_url}
                  alt={post.title}
                  className="w-full object-cover"
                />
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="prose prose-lg mt-10 max-w-none font-body text-foreground prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />

            {/* CTA */}
            <div className="mt-16 rounded-2xl border border-border bg-card p-8 text-center">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Ready to Grow Your Business?
              </h2>
              <p className="mx-auto mt-3 max-w-lg font-body text-muted-foreground">
                Get in touch with our Birmingham-based team for a free digital marketing audit
                and discover how we can help you dominate search results.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="gradient-btn">
                  Get My Free Audit
                </Link>
                <a href="tel:07846798534" className="gradient-btn-outline">
                  Call Us Today
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
