import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_KEY = "cm_cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
    if (consent === "accepted") {
      enableAnalytics();
    }
  }, []);

  const enableAnalytics = () => {
    // GTM is already in index.html but we ensure dataLayer consent mode
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "cookie_consent_granted" });
  };

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    enableAnalytics();
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(COOKIE_KEY, "rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[60] border-t border-border bg-card/95 backdrop-blur-xl p-4 sm:p-6"
        >
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              We use cookies to improve your experience and analyse website traffic. See our{" "}
              <Link to="/cookie-policy" className="text-secondary hover:underline">Cookie Policy</Link>{" "}
              for details.
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={reject}
                className="rounded-lg border border-border px-4 py-2 font-heading text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={accept}
                className="gradient-btn px-4 py-2 text-sm"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
