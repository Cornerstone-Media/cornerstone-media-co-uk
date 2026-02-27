import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "PPC", path: "/ppc" },
  { label: "SEO", path: "/seo" },
  { label: "Social", path: "/social-media" },
  { label: "Website", path: "/website-design" },
  { label: "Maintenance", path: "/website-maintenance" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#19A8CA]/95 backdrop-blur-xl border-b border-[#19A8CA]/40 shadow-lg shadow-background/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="flex h-28 items-center justify-between">
          {/* Mobile: hamburger on left */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative z-50 lg:hidden ${scrolled ? "text-white" : "text-foreground"}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo: left on desktop, centered on mobile */}
          <Link to="/" className="flex-shrink-0 lg:mr-auto">
            <img
              src={logo}
              alt="Cornerstone Media"
              className="h-28 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative rounded-lg px-4 py-2 font-body text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? location.pathname === link.path
                      ? "text-white font-bold"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                    : location.pathname === link.path
                      ? "text-accent"
                      : "text-muted-foreground hover:text-accent hover:bg-accent/10"
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <a
              href="tel:07846798534"
              className="gradient-btn-outline ml-4 flex items-center gap-2 text-sm"
            >
              <Phone className="h-4 w-4" />
              Free Strategy Call
            </a>
            <Link to="/contact" className="gradient-btn ml-2 text-sm">
              Get My Free Audit
            </Link>
          </div>

          {/* Mobile: invisible spacer to balance the hamburger */}
          <div className="w-6 lg:hidden" />
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-card border-t border-border lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block rounded-lg px-4 py-3 font-body text-sm font-medium transition-all duration-200 ${
                      location.pathname === link.path
                        ? "text-accent bg-muted"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href="tel:07846798534"
                className="gradient-btn-outline flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="h-4 w-4" />
                Free Strategy Call
              </a>
              <Link to="/contact" className="gradient-btn mt-2 text-center text-sm">
                Get My Free Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
