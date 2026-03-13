import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import RichTextEditor from "@/components/admin/RichTextEditor";
import { ArrowLeft, Save, Eye } from "lucide-react";

interface Category { id: string; name: string; slug: string }
interface Tag { id: string; name: string; slug: string }

const AdminPostEditor = () => {
  const { id } = useParams();
  const isNew = id === "new";
  const navigate = useNavigate();
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [authorName, setAuthorName] = useState("Cornerstone Media");
  const [status, setStatus] = useState("draft");
  const [publishDate, setPublishDate] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const [catsRes, tagsRes] = await Promise.all([
        supabase.from("blog_categories").select("id, name, slug").order("name"),
        supabase.from("blog_tags").select("id, name, slug").order("name"),
      ]);
      setCategories((catsRes.data as Category[]) ?? []);
      setTags((tagsRes.data as Tag[]) ?? []);

      if (!isNew && id) {
        const { data: post } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("id", id)
          .single();
        if (post) {
          setTitle(post.title);
          setSlug(post.slug);
          setExcerpt(post.excerpt ?? "");
          setContent(post.content ?? "");
          setFeaturedImage(post.featured_image_url ?? "");
          setCategoryId(post.category_id ?? "");
          setAuthorName(post.author_name);
          setStatus(post.status);
          setPublishDate(post.publish_date ? new Date(post.publish_date).toISOString().slice(0, 16) : "");
          setMetaTitle(post.meta_title ?? "");
          setMetaDescription(post.meta_description ?? "");
        }

        const { data: postTags } = await supabase
          .from("blog_post_tags")
          .select("tag_id")
          .eq("post_id", id);
        setSelectedTags(postTags?.map((t) => t.tag_id) ?? []);
      }
    };
    fetchData();
  }, [id, isNew]);

  const generateSlug = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (isNew) setSlug(generateSlug(val));
  };

  const toggleTag = (tagId: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagId) ? prev.filter((t) => t !== tagId) : [...prev, tagId]
    );
  };

  const handleSave = async () => {
    if (!title || !slug) {
      setError("Title and slug are required");
      return;
    }
    setSaving(true);
    setError("");

    const postData = {
      title,
      slug,
      excerpt: excerpt || null,
      content,
      featured_image_url: featuredImage || null,
      category_id: categoryId || null,
      author_name: authorName,
      status,
      publish_date: publishDate ? new Date(publishDate).toISOString() : status === "published" ? new Date().toISOString() : null,
      user_id: user?.id ?? null,
      meta_title: metaTitle || null,
      meta_description: metaDescription || null,
    };

    let postId = id;

    if (isNew) {
      const { data, error: err } = await supabase.from("blog_posts").insert(postData).select("id").single();
      if (err) { setError(err.message); setSaving(false); return; }
      postId = data.id;
    } else {
      const { error: err } = await supabase.from("blog_posts").update(postData).eq("id", id!);
      if (err) { setError(err.message); setSaving(false); return; }
    }

    // Sync tags
    if (postId && postId !== "new") {
      await supabase.from("blog_post_tags").delete().eq("post_id", postId);
      if (selectedTags.length > 0) {
        await supabase.from("blog_post_tags").insert(
          selectedTags.map((tag_id) => ({ post_id: postId!, tag_id }))
        );
      }
    }

    setSaving(false);
    navigate("/admin/posts");
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-6 flex items-center justify-between">
        <button onClick={() => navigate("/admin/posts")} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back to Posts
        </button>
        <div className="flex items-center gap-3">
          {!isNew && status === "published" && (
            <a href={`/blog/${slug}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 hover:bg-white/5">
              <Eye className="h-4 w-4" /> Preview
            </a>
          )}
          <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50">
            <Save className="h-4 w-4" /> {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>

      {error && <p className="mb-4 rounded-lg bg-red-500/10 px-4 py-2 text-sm text-red-400">{error}</p>}

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main content */}
        <div className="space-y-5 lg:col-span-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-300">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-blue-500"
              placeholder="Post title"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-300">Slug</label>
            <div className="flex items-center rounded-lg border border-white/10 bg-white/5">
              <span className="px-3 text-sm text-gray-500">/blog/</span>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="flex-1 bg-transparent py-3 pr-4 text-white outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-300">Excerpt</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={2}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500"
              placeholder="Brief summary for listings..."
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-300">Content</label>
            <RichTextEditor content={content} onChange={setContent} />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Status */}
          <div className="rounded-xl border border-white/10 bg-[#1a1d27] p-5">
            <label className="mb-2 block text-sm font-medium text-gray-300">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="scheduled">Scheduled</option>
            </select>

            {(status === "published" || status === "scheduled") && (
              <div className="mt-3">
                <label className="mb-1 block text-xs text-gray-500">Publish Date</label>
                <input
                  type="datetime-local"
                  value={publishDate}
                  onChange={(e) => setPublishDate(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none"
                />
              </div>
            )}
          </div>

          {/* Category */}
          <div className="rounded-xl border border-white/10 bg-[#1a1d27] p-5">
            <label className="mb-2 block text-sm font-medium text-gray-300">Category</label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none"
            >
              <option value="">No category</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          {/* Tags */}
          <div className="rounded-xl border border-white/10 bg-[#1a1d27] p-5">
            <label className="mb-2 block text-sm font-medium text-gray-300">Tags</label>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => toggleTag(tag.id)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    selectedTags.includes(tag.id)
                      ? "bg-blue-600/20 text-blue-400 ring-1 ring-blue-500/30"
                      : "bg-white/5 text-gray-400 hover:bg-white/10"
                  }`}
                >
                  {tag.name}
                </button>
              ))}
              {tags.length === 0 && <p className="text-xs text-gray-500">No tags created yet</p>}
            </div>
          </div>

          {/* Author */}
          <div className="rounded-xl border border-white/10 bg-[#1a1d27] p-5">
            <label className="mb-2 block text-sm font-medium text-gray-300">Author</label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none"
            />
          </div>

          {/* Featured Image */}
          <div className="rounded-xl border border-white/10 bg-[#1a1d27] p-5">
            <label className="mb-2 block text-sm font-medium text-gray-300">Featured Image URL</label>
            <input
              type="url"
              value={featuredImage}
              onChange={(e) => setFeaturedImage(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none"
              placeholder="https://..."
            />
            {featuredImage && (
              <img src={featuredImage} alt="Preview" className="mt-3 rounded-lg max-h-40 w-full object-cover" />
            )}
          </div>

          {/* SEO */}
          <div className="rounded-xl border border-white/10 bg-[#1a1d27] p-5">
            <p className="mb-3 text-sm font-medium text-gray-300">SEO</p>
            <div className="space-y-3">
              <div>
                <label className="mb-1 block text-xs text-gray-500">Meta Title</label>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  maxLength={65}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none"
                  placeholder={title}
                />
                <p className="mt-1 text-xs text-gray-600">{(metaTitle || title).length}/65</p>
              </div>
              <div>
                <label className="mb-1 block text-xs text-gray-500">Meta Description</label>
                <textarea
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  maxLength={160}
                  rows={2}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none"
                  placeholder="Description for search engines..."
                />
                <p className="mt-1 text-xs text-gray-600">{metaDescription.length}/160</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPostEditor;
