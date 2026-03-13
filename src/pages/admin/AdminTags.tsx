import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Pencil, Trash2, X, Check } from "lucide-react";

interface Tag { id: string; name: string; slug: string }

const AdminTags = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [newName, setNewName] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchTags = async () => {
    const { data } = await supabase.from("blog_tags").select("*").order("name");
    setTags((data as Tag[]) ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchTags(); }, []);

  const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const addTag = async () => {
    if (!newName.trim()) return;
    await supabase.from("blog_tags").insert({ name: newName.trim(), slug: slugify(newName) });
    setNewName("");
    fetchTags();
  };

  const saveEdit = async (id: string) => {
    await supabase.from("blog_tags").update({ name: editName.trim(), slug: slugify(editName) }).eq("id", id);
    setEditId(null);
    fetchTags();
  };

  const deleteTag = async (id: string) => {
    if (!confirm("Delete this tag?")) return;
    await supabase.from("blog_tags").delete().eq("id", id);
    fetchTags();
  };

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-6 text-2xl font-bold text-white">Tags</h1>

      <div className="mb-6 flex gap-3">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTag()}
          placeholder="New tag name"
          className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500"
        />
        <button onClick={addTag} className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
          <Plus className="h-4 w-4" /> Add
        </button>
      </div>

      <div className="rounded-xl border border-white/10 bg-[#1a1d27] divide-y divide-white/5">
        {loading ? (
          <p className="p-6 text-center text-gray-500">Loading...</p>
        ) : tags.length === 0 ? (
          <p className="p-6 text-center text-gray-500">No tags yet.</p>
        ) : (
          tags.map((tag) => (
            <div key={tag.id} className="flex items-center justify-between px-5 py-3">
              {editId === tag.id ? (
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveEdit(tag.id)}
                  className="flex-1 rounded border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white outline-none"
                  autoFocus
                />
              ) : (
                <div>
                  <p className="text-sm font-medium text-white">{tag.name}</p>
                  <p className="text-xs text-gray-500">/{tag.slug}</p>
                </div>
              )}
              <div className="flex items-center gap-1">
                {editId === tag.id ? (
                  <>
                    <button onClick={() => saveEdit(tag.id)} className="rounded p-1.5 text-green-400 hover:bg-green-500/10"><Check className="h-4 w-4" /></button>
                    <button onClick={() => setEditId(null)} className="rounded p-1.5 text-gray-400 hover:bg-white/10"><X className="h-4 w-4" /></button>
                  </>
                ) : (
                  <>
                    <button onClick={() => { setEditId(tag.id); setEditName(tag.name); }} className="rounded p-1.5 text-gray-400 hover:bg-white/10 hover:text-white"><Pencil className="h-4 w-4" /></button>
                    <button onClick={() => deleteTag(tag.id)} className="rounded p-1.5 text-gray-400 hover:bg-red-500/10 hover:text-red-400"><Trash2 className="h-4 w-4" /></button>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminTags;
