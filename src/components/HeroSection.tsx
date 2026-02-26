import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Digital marketing analytics dashboard"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-accent/15 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-secondary"
          >
            Data-Driven Digital Marketing
          </motion.p>
          <h1 className="mb-6 font-heading text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
            Turning Digital Strategy Into{" "}
            <span className="gradient-text">Measurable Growth</span>
          </h1>
          <p className="mb-10 max-w-xl font-body text-lg leading-relaxed text-muted-foreground">
            Cornerstone Media helps businesses scale through data-driven marketing, high-converting websites, and strategic digital campaigns.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#cta" className="gradient-btn text-base">
              Get a Free Strategy Call
            </a>
            <a href="#services" className="gradient-btn-outline text-base">
              Explore Our Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
