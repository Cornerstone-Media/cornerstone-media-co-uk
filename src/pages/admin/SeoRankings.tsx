import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash2, RefreshCw, Download, LogOut, Plus, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Keyword = { id: string; keyword: string; country: string; created_at: string };
type Ranking = { keyword_id: string; position: number | null; impressions: number; clicks: number; ctr: number; captured_at: string; range_start: string; range_end: string };

const SeoRankings = () => {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [keywords, setKeywords] = useState<Keyword[]>([]);
  const [latest, setLatest] = useState<Record<string, Ranking | undefined>>({});
  const [previous, setPrevious] = useState<Record<string, Ranking | undefined>>({});
  const [newKw, setNewKw] = useState("");
  const [syncing, setSyncing] = useState(false);
  const [month, setMonth] = useState(() => new Date().toISOString().slice(0, 7));

  useEffect(() => {
    let mounted = true;
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { navigate("/auth", { replace: true }); return; }
      const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", session.user.id);
      const allowed = roles?.some((r) => r.role === "admin" || r.role === "editor");
      if (!allowed) {
        toast.error("Your account hasn't been granted dashboard access yet.");
        navigate("/", { replace: true });
        return;
      }
      if (mounted) {
        setChecking(false);
        load();
      }
    };
    init();
    return () => { mounted = false; };
  }, [navigate]);

  const load = async () => {
    const { data: kws } = await supabase.from("tracked_keywords").select("*").order("keyword");
    setKeywords(kws ?? []);
    if (!kws?.length) { setLatest({}); setPrevious({}); return; }
    const { data: ranks } = await supabase
      .from("keyword_rankings")
      .select("*")
      .in("keyword_id", kws.map((k) => k.id))
      .order("captured_at", { ascending: false });
    const l: Record<string, Ranking | undefined> = {};
    const p: Record<string, Ranking | undefined> = {};
    for (const r of (ranks ?? []) as Ranking[]) {
      if (!l[r.keyword_id]) l[r.keyword_id] = r;
      else if (!p[r.keyword_id]) p[r.keyword_id] = r;
    }
    setLatest(l); setPrevious(p);
  };

  const addKeyword = async (e: React.FormEvent) => {
    e.preventDefault();
    const kw = newKw.trim().toLowerCase();
    if (!kw) return;
    const { error } = await supabase.from("tracked_keywords").insert({ keyword: kw, country: "gbr" });
    if (error) { toast.error(error.message); return; }
    setNewKw("");
    toast.success("Keyword added");
    load();
  };

  const remove = async (id: string) => {
    const { error } = await supabase.from("tracked_keywords").delete().eq("id", id);
    if (error) { toast.error(error.message); return; }
    toast.success("Removed");
    load();
  };

  const sync = async () => {
    setSyncing(true);
    try {
      const { data, error } = await supabase.functions.invoke("gsc-rankings-sync");
      if (error) throw error;
      toast.success(`Synced ${data?.synced ?? 0} keyword${data?.synced === 1 ? "" : "s"} from Google Search Console.`);
      load();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Sync failed");
    } finally {
      setSyncing(false);
    }
  };

  const exportCsv = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;
    const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/gsc-monthly-report?month=${month}`;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${session.access_token}` } });
    if (!res.ok) { toast.error(await res.text()); return; }
    const blob = await res.blob();
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `seo-rankings-${month}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const signOut = async () => { await supabase.auth.signOut(); navigate("/auth"); };

  const fmtPos = (n: number | null | undefined) => n == null ? "—" : n.toFixed(1);
  const delta = (id: string) => {
    const l = latest[id]?.position, p = previous[id]?.position;
    if (l == null || p == null) return null;
    return +(p - l).toFixed(1); // positive = improved (lower position number)
  };

  if (checking) return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Checking access…</div>;

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold">SEO Rank Tracking</h1>
              <p className="text-muted-foreground text-sm mt-1">Google Search Console data, last 28-day average per keyword.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button asChild variant="ghost"><Link to="/admin/citations"><MapPin className="h-4 w-4 mr-2" />Citations</Link></Button>
              <Button onClick={sync} disabled={syncing} variant="secondary">
                <RefreshCw className={`h-4 w-4 mr-2 ${syncing ? "animate-spin" : ""}`} />
                {syncing ? "Syncing…" : "Sync now"}
              </Button>
              <Button onClick={signOut} variant="ghost"><LogOut className="h-4 w-4 mr-2" />Sign out</Button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 mb-8">
            <Card className="lg:col-span-2">
              <CardHeader><CardTitle>Add a target keyword</CardTitle></CardHeader>
              <CardContent>
                <form onSubmit={addKeyword} className="flex gap-2">
                  <Input value={newKw} onChange={(e) => setNewKw(e.target.value)} placeholder="e.g. digital marketing birmingham" />
                  <Button type="submit"><Plus className="h-4 w-4 mr-2" />Add</Button>
                </form>
                <p className="text-xs text-muted-foreground mt-2">Stored lowercase. Matches GSC query data exactly.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Monthly CSV report</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Label htmlFor="month" className="text-xs">Month</Label>
                <Input id="month" type="month" value={month} onChange={(e) => setMonth(e.target.value)} />
                <Button onClick={exportCsv} className="w-full"><Download className="h-4 w-4 mr-2" />Export CSV</Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader><CardTitle>Tracked keywords ({keywords.length})</CardTitle></CardHeader>
            <CardContent>
              {keywords.length === 0 ? (
                <p className="text-muted-foreground text-sm">No keywords yet. Add one above, then click "Sync now" to pull GSC data.</p>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Keyword</TableHead>
                        <TableHead className="text-right">Position</TableHead>
                        <TableHead className="text-right">Change</TableHead>
                        <TableHead className="text-right">Impressions</TableHead>
                        <TableHead className="text-right">Clicks</TableHead>
                        <TableHead className="text-right">CTR</TableHead>
                        <TableHead className="text-right">Last synced</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {keywords.map((k) => {
                        const r = latest[k.id];
                        const d = delta(k.id);
                        return (
                          <TableRow key={k.id}>
                            <TableCell className="font-medium">{k.keyword}</TableCell>
                            <TableCell className="text-right">{fmtPos(r?.position)}</TableCell>
                            <TableCell className={`text-right ${d == null ? "" : d > 0 ? "text-accent" : d < 0 ? "text-destructive" : ""}`}>
                              {d == null ? "—" : `${d > 0 ? "▲" : d < 0 ? "▼" : ""} ${Math.abs(d).toFixed(1)}`}
                            </TableCell>
                            <TableCell className="text-right">{r?.impressions ?? 0}</TableCell>
                            <TableCell className="text-right">{r?.clicks ?? 0}</TableCell>
                            <TableCell className="text-right">{r ? `${(r.ctr * 100).toFixed(2)}%` : "—"}</TableCell>
                            <TableCell className="text-right text-xs text-muted-foreground">
                              {r ? new Date(r.captured_at).toLocaleDateString("en-GB") : "Never"}
                            </TableCell>
                            <TableCell>
                              <Button size="icon" variant="ghost" aria-label={`Remove ${k.keyword}`} onClick={() => remove(k.id)}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SeoRankings;
