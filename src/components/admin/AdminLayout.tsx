import { useEffect } from "react";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Helmet } from "react-helmet-async";
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Tags,
  LogOut,
  Loader2,
} from "lucide-react";

const sidebarLinks = [
  { label: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Blog Posts", path: "/admin/posts", icon: FileText },
  { label: "Categories", path: "/admin/categories", icon: FolderOpen },
  { label: "Tags", path: "/admin/tags", icon: Tags },
];

const AdminLayout = () => {
  const { user, role, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading && (!user || !role)) {
      navigate("/admin");
    }
  }, [user, role, loading, navigate]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0f1117]">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (!user || !role) return null;

  return (
    <div className="flex min-h-screen bg-[#0f1117]">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 flex h-full w-60 flex-col border-r border-white/10 bg-[#13151d]">
        <div className="border-b border-white/10 px-5 py-5">
          <Link to="/admin/dashboard" className="text-lg font-bold text-white">
            CM Admin
          </Link>
          <p className="mt-0.5 text-xs text-gray-500 capitalize">{role}</p>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          {sidebarLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-blue-600/15 text-blue-400"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 px-3 py-4">
          <p className="mb-2 truncate px-3 text-xs text-gray-500">{user.email}</p>
          <button
            onClick={() => signOut().then(() => navigate("/admin"))}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-red-400"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-60 flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
