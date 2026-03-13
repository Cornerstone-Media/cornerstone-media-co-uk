import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  featured_image_url: string | null;
  publish_date: string | null;
  created_at: string;
  author_name: string;
  meta_title: string | null;
  meta_description: string | null;
  blog_categories: { name: string; slug: string } | null;
}

interface Tag { name: string; slug: string }

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("*, blog_categories(name, slug)")
        .eq("slug", slug!)
        .eq("status", "published")
        .single();

      if (!data) {
        navigate("/blog");
        return;
      }
      setPost(data as unknown as Post);

      const { data: postTags } = await supabase
        .from("blog_post_tags")
        .select("tag_id, blog_tags(name, slug)")
        .eq("post_id", data.id);
      setTags(postTags?.map((t: any) => t.blog_tags).filter(Boolean) ?? []);
      setLoading(false);
    };
    fetchPost();
  }, [slug, navigate]);

  if (loading || !post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center pt-48">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    author: { "@type": "Person", name: post.author_name },
    datePublished: post.publish_date || post.created_at,
    publisher: {
      "@type": "Organization",
      name: "Cornerstone Media",
      url: "https://cornerstone-media.co.uk",
    },
    image: post.featured_image_url || undefined,
    url: `https://cornerstone-media.co.uk/blog/${post.slug}`,
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={post.meta_title || `${post.title} | Cornerstone Media Blog`}
        description={post.meta_description || post.excerpt || `Read ${post.title} from Cornerstone Media.`}
        canonical={`https://cornerstone-media.co.uk/blog/${post.slug}`}
        schema={articleSchema}
        breadcrumbName={post.title}
      />
      <Navbar />

      <main className="pt-36 pb-20">
        <article className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>

            {post.blog_categories?.name && (
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                {post.blog_categories.name}
              </span>
            )}

            <h1 className="mb-6 font-heading text-3xl font-extrabold text-foreground md:text-5xl leading-tight">
              {post.title}
            </h1>

            <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" /> {post.author_name}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> {format(new Date(post.publish_date || post.created_at), "dd MMMM yyyy")}
              </span>
            </div>

            {post.featured_image_url && (
              <img
                src={post.featured_image_url}
                alt={post.title}
                className="mb-10 w-full rounded-2xl object-cover max-h-[400px]"
              />
            )}

            {/* Blog content */}
            <div
              className="prose prose-lg max-w-none font-body text-foreground/90 
                prose-headings:font-heading prose-headings:text-foreground
                prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-xl prose-blockquote:border-secondary/30
                prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />

            {/* Tags */}
            {tags.length > 0 && (
              <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-border pt-6">
                <span className="text-sm font-medium text-muted-foreground">Tags:</span>
                {tags.map((tag) => (
                  <span key={tag.slug} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    {tag.name}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
