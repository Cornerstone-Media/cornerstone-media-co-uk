import { Phone, Mail } from "lucide-react";

const MobileCTABar = () => {
  const scrollToForm = () => {
    const form = document.getElementById("enquiry-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-border bg-card/95 backdrop-blur-xl lg:hidden">
      <a
        href="tel:+447846798534"
        className="flex flex-1 items-center justify-center gap-2 py-3 font-heading text-sm font-semibold text-foreground transition-colors hover:text-secondary"
        onClick={() => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: "phone_click", click_location: "mobile_bar" });
        }}
      >
        <Phone className="h-4 w-4" />
        Call Us
      </a>
      <div className="w-px bg-border" />
      <button
        onClick={() => {
          scrollToForm();
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: "cta_click", click_location: "mobile_bar", cta_type: "get_quote" });
        }}
        className="flex flex-1 items-center justify-center gap-2 py-3 font-heading text-sm font-semibold text-secondary transition-colors hover:text-accent"
      >
        <Mail className="h-4 w-4" />
        Get a Quote
      </button>
    </div>
  );
};

export default MobileCTABar;
