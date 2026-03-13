import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Pencil, Trash2, X, Check } from "lucide-react";

interface Category { id: string; name: string; slug: string }

const AdminCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newName, setNewName] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    const { data } = await supabase.from("blog_categories").select("*").order("name");
    setCategories((data as Category[]) ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchCategories(); }, []);

  const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const addCategory = async () => {
    if (!newName.trim()) return;
    await supabase.from("blog_categories").insert({ name: newName.trim(), slug: slugify(newName) });
    setNewName("");
    fetchCategories();
  };

  const saveEdit = async (id: string) => {
    await supabase.from("blog_categories").update({ name: editName.trim(), slug: slugify(editName) }).eq("id", id);
    setEditId(null);
    fetchCategories();
  };

  const deleteCategory = async (id: string) => {
    if (!confirm("Delete this category?")) return;
    await supabase.from("blog_categories").delete().eq("id", id);
    fetchCategories();
  };

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-6 text-2xl font-bold text-white">Categories</h1>

      {/* Add new */}
      <div className="mb-6 flex gap-3">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addCategory()}
          placeholder="New category name"
          className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500"
        />
        <button onClick={addCategory} className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
          <Plus className="h-4 w-4" /> Add
        </button>
      </div>

      <div className="rounded-xl border border-white/10 bg-[#1a1d27] divide-y divide-white/5">
        {loading ? (
          <p className="p-6 text-center text-gray-500">Loading...</p>
        ) : categories.length === 0 ? (
          <p className="p-6 text-center text-gray-500">No categories yet.</p>
        ) : (
          categories.map((cat) => (
            <div key={cat.id} className="flex items-center justify-between px-5 py-3">
              {editId === cat.id ? (
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveEdit(cat.id)}
                  className="flex-1 rounded border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white outline-none"
                  autoFocus
                />
              ) : (
                <div>
                  <p className="text-sm font-medium text-white">{cat.name}</p>
                  <p className="text-xs text-gray-500">/{cat.slug}</p>
                </div>
              )}
              <div className="flex items-center gap-1">
                {editId === cat.id ? (
                  <>
                    <button onClick={() => saveEdit(cat.id)} className="rounded p-1.5 text-green-400 hover:bg-green-500/10"><Check className="h-4 w-4" /></button>
                    <button onClick={() => setEditId(null)} className="rounded p-1.5 text-gray-400 hover:bg-white/10"><X className="h-4 w-4" /></button>
                  </>
                ) : (
                  <>
                    <button onClick={() => { setEditId(cat.id); setEditName(cat.name); }} className="rounded p-1.5 text-gray-400 hover:bg-white/10 hover:text-white"><Pencil className="h-4 w-4" /></button>
                    <button onClick={() => deleteCategory(cat.id)} className="rounded p-1.5 text-gray-400 hover:bg-red-500/10 hover:text-red-400"><Trash2 className="h-4 w-4" /></button>
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

export default AdminCategories;
