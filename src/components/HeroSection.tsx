import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden" aria-label="Hero">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Birmingham digital marketing agency office — data analytics dashboard"
          className="h-full w-full object-cover opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/80" />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px] animate-float" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px] animate-float" style={{ animationDelay: "2s" }} aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/8 blur-[80px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-20 lg:px-8">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary"
          >
            Cornerstone Media — Birmingham's Data-Driven Marketing Agency
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mb-8 font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-8xl"
          >
            Digital Marketing Agency{" "}
            <span className="gradient-text">Birmingham</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-12 max-w-xl font-body text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Cornerstone Media helps Birmingham businesses grow through expert{" "}
            <Link to="/ppc-birmingham" className="text-secondary hover:underline">PPC advertising</Link>,{" "}
            <Link to="/seo-birmingham" className="text-secondary hover:underline">SEO</Link>,{" "}
            <Link to="/social-media-marketing-birmingham" className="text-secondary hover:underline">social media marketing</Link>, and{" "}
            <Link to="/website-design-birmingham" className="text-secondary hover:underline">website design</Link>.
            We deliver measurable results that drive real revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="relative z-10 flex flex-wrap gap-4"
          >
            <Link to="/contact" className="gradient-btn text-base">
              Get a Free Quote
            </Link>
            <a
              href="tel:+447846798534"
              className="gradient-btn-outline text-base flex items-center gap-2"
              onClick={() => {
                (window as any).dataLayer = (window as any).dataLayer || [];
                (window as any).dataLayer.push({ event: "phone_click", click_location: "hero" });
              }}
            >
              <Phone className="h-4 w-4" />
              Call Us: 07846 798 534
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="relative z-10 mt-8 flex flex-wrap items-center gap-4 text-sm font-body text-muted-foreground"
          >
            <span className="flex items-center gap-1.5"><span className="text-accent">★★★★★</span> 5-Star Rated</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>100+ Clients</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>Based in Birmingham</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>No Long-Term Contracts</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
