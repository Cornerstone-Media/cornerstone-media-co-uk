import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
      <div className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/8 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-20 lg:px-8">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary"
          >
            Birmingham's Data-Driven Digital Marketing Agency
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mb-8 font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-8xl"
          >
            Turning Digital
            <br />
            Strategy Into{" "}
            <span className="gradient-text">Measurable Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-12 max-w-xl font-body text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Cornerstone Media helps Birmingham businesses scale through expert PPC management, SEO, social media marketing, high-converting website design, and ongoing maintenance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/contact" className="gradient-btn text-base">
              Get a Free Strategy Call
            </Link>
            <a href="#services" className="gradient-btn-outline text-base">
              Explore Our Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
