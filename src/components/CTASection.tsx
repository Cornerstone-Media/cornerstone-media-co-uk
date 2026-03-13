import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const CTASection = () => (
  <section id="cta" className="section-padding relative overflow-hidden bg-card/50" aria-label="Call to action">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" aria-hidden="true" />
    <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/5 blur-[120px]" aria-hidden="true" />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative mx-auto max-w-3xl text-center"
    >
      <h2 className="mb-6 font-heading text-4xl font-extrabold text-foreground md:text-6xl">
        Ready to Grow Your{" "}
        <span className="gradient-text">Business Online?</span>
      </h2>
      <p className="mb-10 font-body text-lg text-muted-foreground md:text-xl">
        Get a free, no-obligation consultation with our Birmingham digital marketing experts.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link to="/contact" className="gradient-btn text-lg">
          Start Your Journey
        </Link>
        <a
          href="tel:+447846798534"
          className="gradient-btn-outline text-lg flex items-center gap-2"
          onClick={() => {
            (window as any).dataLayer = (window as any).dataLayer || [];
            (window as any).dataLayer.push({ event: "phone_click", click_location: "cta_section" });
          }}
        >
          <Phone className="h-4 w-4" />
          07846 798 534
        </a>
      </div>
    </motion.div>
  </section>
);

export default CTASection;
