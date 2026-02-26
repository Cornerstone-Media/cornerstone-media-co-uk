import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <h2 className="mb-6 font-heading text-4xl font-bold text-foreground md:text-5xl">
          Ready to Grow <span className="gradient-text">Your Business?</span>
        </h2>
        <p className="mb-10 font-body text-lg text-muted-foreground">
          Let's discuss how our team can help you achieve your digital marketing goals. Book a free, no-obligation strategy consultation today.
        </p>
        <a href="#" className="gradient-btn inline-block text-lg">
          Book a Free Consultation
        </a>
      </motion.div>
    </section>
  );
};

export default CTASection;
