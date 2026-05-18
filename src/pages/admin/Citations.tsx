import { useEffect, useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Trash2, ExternalLink, Plus, Save, CheckCircle2, AlertTriangle, Copy, BarChart3, MapPin, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Status = "pending" | "submitted" | "live" | "needs_update" | "rejected";
type Priority = "critical" | "high" | "medium" | "low";

type Citation = {
  id: string;
  platform_name: string;
  category: string;
  domain_authority: number | null;
  priority: Priority;
  status: Status;
  listing_url: string | null;
  submission_url: string | null;
  username: string | null;
  submitted_at: string | null;
  live_at: string | null;
  nap_name: string | null;
  nap_address: string | null;
  nap_phone: string | null;
  nap_website: string | null;
  notes: string | null;
  is_free: boolean;
  created_at: string;
  updated_at: string;
};

type Nap = {
  id?: string;
  business_name: string;
  address_line1: string;
  address_line2: string | null;
  city: string;
  region: string | null;
  postcode: string;
  country: string;
  phone: string;
  website: string;
  email: string | null;
  hours: string | null;
  description: string | null;
};

const statusMeta: Record<Status, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  pending: { label: "Pending", variant: "outline" },
  submitted: { label: "Submitted", variant: "secondary" },
  live: { label: "Live", variant: "default" },
  needs_update: { label: "Needs update", variant: "destructive" },
  rejected: { label: "Rejected", variant: "destructive" },
};

const priorityMeta: Record<Priority, { label: string; className: string }> = {
  critical: { label: "Critical", className: "bg-destructive/15 text-destructive border-destructive/30" },
  high: { label: "High", className: "bg-primary/15 text-primary border-primary/30" },
  medium: { label: "Medium", className: "bg-muted text-foreground border-border" },
  low: { label: "Low", className: "bg-muted/50 text-muted-foreground border-border" },
};

const norm = (s: string | null | undefined) => (s ?? "").trim().toLowerCase().replace(/\s+/g, " ").replace(/[.,]/g, "");
const normPhone = (s: string | null | undefined) => (s ?? "").replace(/\D/g, "");
const normUrl = (s: string | null | undefined) => (s ?? "").trim().toLowerCase().replace(/^https?:\/\//, "").replace(/\/+$/, "").replace(/^www\./, "");

const emptyNap: Nap = {
  business_name: "", address_line1: "", address_line2: "", city: "", region: "", postcode: "",
  country: "United Kingdom", phone: "", website: "", email: "", hours: "", description: "",
};

const Citations = () => {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [citations, setCitations] = useState<Citation[]>([]);
  const [nap, setNap] = useState<Nap>(emptyNap);
  const [napSaving, setNapSaving] = useState(false);
  const [filter, setFilter] = useState<Status | "all">("all");
  const [editing, setEditing] = useState<Citation | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { navigate("/auth", { replace: true }); return; }
      const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", session.user.id);
      if (!roles?.some((r) => r.role === "admin" || r.role === "editor")) {
        toast.error("Your account hasn't been granted dashboard access yet.");
        navigate("/", { replace: true });
        return;
      }
      if (mounted) { setChecking(false); await load(); }
    })();
    return () => { mounted = false; };
  }, [navigate]);

  const load = async () => {
    const [{ data: cits }, { data: naps }] = await Promise.all([
      supabase.from("citations").select("*").order("priority").order("platform_name"),
      supabase.from("nap_profile").select("*").order("created_at").limit(1),
    ]);
    setCitations((cits ?? []) as Citation[]);
    if (naps && naps[0]) setNap(naps[0] as Nap);
  };

  const saveNap = async () => {
    setNapSaving(true);
    const payload = { ...nap, updated_at: new Date().toISOString() };
    const { error } = nap.id
      ? await supabase.from("nap_profile").update(payload).eq("id", nap.id)
      : await supabase.from("nap_profile").insert(payload).select().single();
    setNapSaving(false);
    if (error) { toast.error(error.message); return; }
    toast.success("NAP profile saved");
    await load();
  };

  const napAsBlock = () => {
    const lines = [
      nap.business_name,
      nap.address_line1,
      nap.address_line2,
      [nap.city, nap.region, nap.postcode].filter(Boolean).join(", "),
      nap.country,
      `Phone: ${nap.phone}`,
      `Web: ${nap.website}`,
      nap.email ? `Email: ${nap.email}` : "",
    ].filter(Boolean).join("\n");
    return lines;
  };

  const copyNap = async () => {
    await navigator.clipboard.writeText(napAsBlock());
    toast.success("NAP copied to clipboard");
  };

  const napMatchStatus = (c: Citation): { ok: boolean; issues: string[] } => {
    if (c.status === "pending") return { ok: true, issues: [] };
    const issues: string[] = [];
    if (c.nap_name && norm(c.nap_name) !== norm(nap.business_name)) issues.push("Name");
    if (c.nap_phone && normPhone(c.nap_phone) !== normPhone(nap.phone)) issues.push("Phone");
    if (c.nap_website && normUrl(c.nap_website) !== normUrl(nap.website)) issues.push("Website");
    if (c.nap_address) {
      const ref = `${nap.address_line1} ${nap.address_line2 ?? ""} ${nap.city} ${nap.postcode}`;
      if (!norm(c.nap_address).includes(norm(nap.postcode)) || !norm(c.nap_address).includes(norm(nap.city))) {
        issues.push("Address");
      }
      void ref;
    }
    return { ok: issues.length === 0, issues };
  };

  const filtered = useMemo(() => {
    if (filter === "all") return citations;
    return citations.filter((c) => c.status === filter);
  }, [citations, filter]);

  const stats = useMemo(() => {
    const total = citations.length;
    const live = citations.filter((c) => c.status === "live").length;
    const submitted = citations.filter((c) => c.status === "submitted").length;
    const pending = citations.filter((c) => c.status === "pending").length;
    const needs = citations.filter((c) => c.status === "needs_update").length;
    const inconsistent = citations.filter((c) => !napMatchStatus(c).ok).length;
    return { total, live, submitted, pending, needs, inconsistent, progress: total ? Math.round((live / total) * 100) : 0 };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [citations, nap]);

  const openNew = () => {
    setEditing({
      id: "", platform_name: "", category: "uk-directory", domain_authority: null, priority: "medium",
      status: "pending", listing_url: "", submission_url: "", username: "", submitted_at: null, live_at: null,
      nap_name: nap.business_name, nap_address: `${nap.address_line1}, ${nap.city} ${nap.postcode}`,
      nap_phone: nap.phone, nap_website: nap.website, notes: "", is_free: true,
      created_at: "", updated_at: "",
    });
    setDialogOpen(true);
  };

  const openEdit = (c: Citation) => { setEditing({ ...c }); setDialogOpen(true); };

  const saveCitation = async () => {
    if (!editing) return;
    const { id, created_at, updated_at, ...payload } = editing;
    if (!payload.platform_name.trim()) { toast.error("Platform name required"); return; }
    const op = id
      ? supabase.from("citations").update(payload).eq("id", id)
      : supabase.from("citations").insert(payload);
    const { error } = await op;
    if (error) { toast.error(error.message); return; }
    toast.success(id ? "Citation updated" : "Citation added");
    setDialogOpen(false);
    setEditing(null);
    await load();
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this citation?")) return;
    const { error } = await supabase.from("citations").delete().eq("id", id);
    if (error) { toast.error(error.message); return; }
    toast.success("Removed");
    await load();
  };

  const quickStatus = async (c: Citation, status: Status) => {
    const patch: Partial<Citation> = { status };
    if (status === "live" && !c.live_at) patch.live_at = new Date().toISOString().slice(0, 10);
    if ((status === "submitted" || status === "live") && !c.submitted_at) patch.submitted_at = new Date().toISOString().slice(0, 10);
    const { error } = await supabase.from("citations").update(patch).eq("id", c.id);
    if (error) { toast.error(error.message); return; }
    await load();
  };

  const exportCsv = () => {
    const rows = [
      ["Platform", "Category", "Priority", "Status", "DA", "Listing URL", "Submitted", "Live", "NAP match", "Issues", "Notes"],
      ...citations.map((c) => {
        const m = napMatchStatus(c);
        return [
          c.platform_name, c.category, c.priority, c.status, c.domain_authority ?? "",
          c.listing_url ?? "", c.submitted_at ?? "", c.live_at ?? "",
          m.ok ? "OK" : "Mismatch", m.issues.join("; "), (c.notes ?? "").replace(/\n/g, " "),
        ];
      }),
    ];
    const csv = rows.map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `citations-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  if (checking) return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Checking access…</div>;

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-2">
            <div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold flex items-center gap-2">
                <MapPin className="h-7 w-7 text-primary" /> Local Citation Tracking
              </h1>
              <p className="text-muted-foreground text-sm mt-1">Manage NAP consistency and track every directory listing in one place.</p>
            </div>
            <div className="flex gap-2">
              <Button asChild variant="ghost"><Link to="/admin/seo-rankings"><BarChart3 className="h-4 w-4 mr-2" />SEO rankings</Link></Button>
              <Button onClick={exportCsv} variant="secondary"><Download className="h-4 w-4 mr-2" />Export CSV</Button>
              <Button onClick={openNew}><Plus className="h-4 w-4 mr-2" />Add citation</Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-6">
            <StatCard label="Live" value={stats.live} accent="text-primary" />
            <StatCard label="Submitted" value={stats.submitted} />
            <StatCard label="Pending" value={stats.pending} />
            <StatCard label="Needs update" value={stats.needs} accent={stats.needs ? "text-destructive" : ""} />
            <StatCard label="NAP mismatch" value={stats.inconsistent} accent={stats.inconsistent ? "text-destructive" : "text-primary"} />
          </div>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Build progress</span>
                <span className="text-sm text-muted-foreground">{stats.live}/{stats.total} live ({stats.progress}%)</span>
              </div>
              <Progress value={stats.progress} />
            </CardContent>
          </Card>

          <Tabs defaultValue="citations" className="w-full">
            <TabsList>
              <TabsTrigger value="citations">Citations</TabsTrigger>
              <TabsTrigger value="nap">NAP profile</TabsTrigger>
              <TabsTrigger value="guide">Guide</TabsTrigger>
            </TabsList>

            <TabsContent value="citations" className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                {(["all", "pending", "submitted", "live", "needs_update", "rejected"] as const).map((s) => (
                  <Button key={s} size="sm" variant={filter === s ? "default" : "outline"} onClick={() => setFilter(s)}>
                    {s === "all" ? "All" : statusMeta[s].label}
                  </Button>
                ))}
              </div>
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Platform</TableHead>
                          <TableHead>Priority</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>NAP</TableHead>
                          <TableHead>Listing</TableHead>
                          <TableHead>Live since</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filtered.map((c) => {
                          const m = napMatchStatus(c);
                          return (
                            <TableRow key={c.id} className="cursor-pointer" onClick={() => openEdit(c)}>
                              <TableCell>
                                <div className="font-medium">{c.platform_name}</div>
                                <div className="text-xs text-muted-foreground">{c.category}{c.domain_authority ? ` · DA ${c.domain_authority}` : ""}</div>
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline" className={priorityMeta[c.priority].className}>{priorityMeta[c.priority].label}</Badge>
                              </TableCell>
                              <TableCell onClick={(e) => e.stopPropagation()}>
                                <Select value={c.status} onValueChange={(v) => quickStatus(c, v as Status)}>
                                  <SelectTrigger className="w-[140px] h-8">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {(Object.keys(statusMeta) as Status[]).map((s) => (
                                      <SelectItem key={s} value={s}>{statusMeta[s].label}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </TableCell>
                              <TableCell>
                                {c.status === "pending" ? <span className="text-xs text-muted-foreground">—</span> :
                                  m.ok ? (
                                    <span className="inline-flex items-center gap-1 text-primary text-xs"><CheckCircle2 className="h-3.5 w-3.5" />Match</span>
                                  ) : (
                                    <span className="inline-flex items-center gap-1 text-destructive text-xs" title={m.issues.join(", ")}><AlertTriangle className="h-3.5 w-3.5" />{m.issues.join(", ")}</span>
                                  )}
                              </TableCell>
                              <TableCell onClick={(e) => e.stopPropagation()}>
                                {c.listing_url ? (
                                  <a href={c.listing_url} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-primary text-xs hover:underline">
                                    View <ExternalLink className="h-3 w-3" />
                                  </a>
                                ) : c.submission_url ? (
                                  <a href={c.submission_url} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-muted-foreground text-xs hover:underline">
                                    Submit <ExternalLink className="h-3 w-3" />
                                  </a>
                                ) : <span className="text-xs text-muted-foreground">—</span>}
                              </TableCell>
                              <TableCell className="text-xs text-muted-foreground">{c.live_at ?? "—"}</TableCell>
                              <TableCell onClick={(e) => e.stopPropagation()}>
                                <Button size="icon" variant="ghost" aria-label="Delete" onClick={() => remove(c.id)}>
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                        {filtered.length === 0 && (
                          <TableRow><TableCell colSpan={7} className="text-center text-muted-foreground py-8">No citations.</TableCell></TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="nap">
              <Card>
                <CardHeader>
                  <CardTitle>Master NAP profile</CardTitle>
                  <CardDescription>This is the canonical Name, Address, Phone & Website. Every listing is compared against it.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Field label="Business name" value={nap.business_name} onChange={(v) => setNap({ ...nap, business_name: v })} />
                    <Field label="Phone" value={nap.phone} onChange={(v) => setNap({ ...nap, phone: v })} />
                    <Field label="Address line 1" value={nap.address_line1} onChange={(v) => setNap({ ...nap, address_line1: v })} />
                    <Field label="Address line 2" value={nap.address_line2 ?? ""} onChange={(v) => setNap({ ...nap, address_line2: v })} />
                    <Field label="City" value={nap.city} onChange={(v) => setNap({ ...nap, city: v })} />
                    <Field label="Region / county" value={nap.region ?? ""} onChange={(v) => setNap({ ...nap, region: v })} />
                    <Field label="Postcode" value={nap.postcode} onChange={(v) => setNap({ ...nap, postcode: v })} />
                    <Field label="Country" value={nap.country} onChange={(v) => setNap({ ...nap, country: v })} />
                    <Field label="Website" value={nap.website} onChange={(v) => setNap({ ...nap, website: v })} />
                    <Field label="Email" value={nap.email ?? ""} onChange={(v) => setNap({ ...nap, email: v })} />
                    <Field label="Hours" value={nap.hours ?? ""} onChange={(v) => setNap({ ...nap, hours: v })} />
                  </div>
                  <div>
                    <Label className="text-sm">Business description</Label>
                    <Textarea value={nap.description ?? ""} onChange={(e) => setNap({ ...nap, description: e.target.value })} rows={3} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button onClick={saveNap} disabled={napSaving}><Save className="h-4 w-4 mr-2" />{napSaving ? "Saving…" : "Save NAP"}</Button>
                    <Button variant="outline" onClick={copyNap}><Copy className="h-4 w-4 mr-2" />Copy NAP block</Button>
                  </div>
                  <div>
                    <Label className="text-sm">Paste-ready block</Label>
                    <pre className="mt-1 rounded-md border bg-muted/40 p-3 text-xs whitespace-pre-wrap">{napAsBlock()}</pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="guide">
              <Card>
                <CardHeader>
                  <CardTitle>How to use this dashboard</CardTitle>
                  <CardDescription>The fastest free workflow to build clean local citations.</CardDescription>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-foreground/90 space-y-3">
                  <ol className="list-decimal pl-5 space-y-2">
                    <li><strong>Fill in the NAP tab</strong> with the exact wording you want used everywhere. Use the same punctuation, abbreviations and phone format on every site.</li>
                    <li><strong>Work through Critical → High → Medium → Low</strong> priority listings. Start with Google Business Profile, Bing Places, Apple Business Connect, Facebook, Trustpilot.</li>
                    <li>For each platform: open the submission link, paste the copied NAP block, then set status to <em>Submitted</em>. When the listing goes live, paste the live URL and flip to <em>Live</em>.</li>
                    <li>If you change your address or phone later, every row with a different value will flag as <em>NAP mismatch</em> — work down the list and update them.</li>
                    <li>Export CSV any time for monthly reporting or hand-off to a contractor.</li>
                  </ol>
                  <p className="text-muted-foreground text-xs">All 25 highest-impact UK directories are pre-loaded so you can start straight away. Add any niche or industry directory with the <em>Add citation</em> button.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing?.id ? "Edit citation" : "New citation"}</DialogTitle>
          </DialogHeader>
          {editing && (
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Platform name" value={editing.platform_name} onChange={(v) => setEditing({ ...editing, platform_name: v })} />
              <div>
                <Label className="text-sm">Category</Label>
                <Select value={editing.category} onValueChange={(v) => setEditing({ ...editing, category: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {["core", "uk-directory", "global-directory", "review", "social", "local", "industry", "general"].map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm">Priority</Label>
                <Select value={editing.priority} onValueChange={(v) => setEditing({ ...editing, priority: v as Priority })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {(Object.keys(priorityMeta) as Priority[]).map((p) => <SelectItem key={p} value={p}>{priorityMeta[p].label}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm">Status</Label>
                <Select value={editing.status} onValueChange={(v) => setEditing({ ...editing, status: v as Status })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {(Object.keys(statusMeta) as Status[]).map((s) => <SelectItem key={s} value={s}>{statusMeta[s].label}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <Field label="Domain authority (0-100)" value={String(editing.domain_authority ?? "")} onChange={(v) => setEditing({ ...editing, domain_authority: v ? parseInt(v) : null })} />
              <Field label="Submission URL" value={editing.submission_url ?? ""} onChange={(v) => setEditing({ ...editing, submission_url: v })} />
              <Field label="Live listing URL" value={editing.listing_url ?? ""} onChange={(v) => setEditing({ ...editing, listing_url: v })} />
              <Field label="Username / login" value={editing.username ?? ""} onChange={(v) => setEditing({ ...editing, username: v })} />
              <Field label="Submitted on" type="date" value={editing.submitted_at ?? ""} onChange={(v) => setEditing({ ...editing, submitted_at: v || null })} />
              <Field label="Went live on" type="date" value={editing.live_at ?? ""} onChange={(v) => setEditing({ ...editing, live_at: v || null })} />
              <div className="md:col-span-2 border-t pt-4">
                <p className="text-xs text-muted-foreground mb-2">NAP values used on this listing (leave blank to skip consistency check):</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Name used" value={editing.nap_name ?? ""} onChange={(v) => setEditing({ ...editing, nap_name: v })} />
                  <Field label="Phone used" value={editing.nap_phone ?? ""} onChange={(v) => setEditing({ ...editing, nap_phone: v })} />
                  <Field label="Address used" value={editing.nap_address ?? ""} onChange={(v) => setEditing({ ...editing, nap_address: v })} />
                  <Field label="Website used" value={editing.nap_website ?? ""} onChange={(v) => setEditing({ ...editing, nap_website: v })} />
                </div>
              </div>
              <div className="md:col-span-2">
                <Label className="text-sm">Notes</Label>
                <Textarea value={editing.notes ?? ""} onChange={(e) => setEditing({ ...editing, notes: e.target.value })} rows={3} />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="ghost" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={saveCitation}><Save className="h-4 w-4 mr-2" />Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

const StatCard = ({ label, value, accent = "" }: { label: string; value: number; accent?: string }) => (
  <Card>
    <CardContent className="pt-6">
      <div className={`text-3xl font-bold ${accent}`}>{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </CardContent>
  </Card>
);

const Field = ({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) => (
  <div>
    <Label className="text-sm">{label}</Label>
    <Input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
);

export default Citations;
