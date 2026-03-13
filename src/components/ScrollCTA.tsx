import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";
import { Link } from "react-router-dom";

const ScrollCTA = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 70 && !show) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [show, dismissed]);

  const dismiss = () => {
    setDismissed(true);
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && !dismissed && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-20 right-4 z-50 hidden w-80 rounded-2xl border border-border bg-card p-6 shadow-2xl shadow-background/50 lg:block"
        >
          <button
            onClick={dismiss}
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/15">
              <MessageSquare className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <p className="font-heading text-sm font-bold text-foreground mb-1">Still have questions?</p>
              <p className="font-body text-xs text-muted-foreground mb-3">Let's chat about how we can help your business grow.</p>
              <Link
                to="/contact"
                className="gradient-btn inline-block px-4 py-2 text-xs"
                onClick={() => {
                  (window as any).dataLayer = (window as any).dataLayer || [];
                  (window as any).dataLayer.push({ event: "cta_click", click_location: "scroll_cta", cta_type: "book_call" });
                }}
              >
                Book a Call
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollCTA;
