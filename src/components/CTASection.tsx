import { motion } from "framer-motion";

const CTASection = () => (
  <section id="cta" className="section-padding relative overflow-hidden bg-card/50">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
    <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/5 blur-[120px]" />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative mx-auto max-w-3xl text-center"
    >
      <h2 className="mb-6 font-heading text-4xl font-extrabold text-foreground md:text-6xl">
        Ready to Grow{" "}
        <span className="gradient-text">Your Business?</span>
      </h2>
      <p className="mb-10 font-body text-lg text-muted-foreground md:text-xl">
        Let's discuss how our team can help you achieve your digital marketing
        goals. Book a free, no-obligation strategy consultation today.
      </p>
      <a href="#" className="gradient-btn text-lg">
        Book a Free Consultation
      </a>
    </motion.div>
  </section>
);

export default CTASection;
