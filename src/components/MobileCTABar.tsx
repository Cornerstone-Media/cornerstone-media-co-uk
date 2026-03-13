import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const MobileCTABar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 border-t border-border bg-background/95 px-3 py-2.5 backdrop-blur-lg lg:hidden">
    <a
      href="tel:07846798534"
      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-accent bg-transparent py-2.5 font-body text-xs font-semibold text-accent transition-colors active:bg-accent/10"
    >
      <Phone className="h-3.5 w-3.5" />
      Free Strategy Call
    </a>
    <Link
      to="/contact"
      className="flex flex-1 items-center justify-center rounded-lg bg-accent py-2.5 font-body text-xs font-semibold text-accent-foreground transition-colors active:bg-accent/90"
    >
      Get My Free Audit
    </Link>
  </div>
);

export default MobileCTABar;
