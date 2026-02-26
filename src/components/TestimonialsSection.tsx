import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Cornerstone Media transformed our digital presence entirely. Our leads increased by 320% in just six months, and their team was phenomenal to work with.",
    name: "Sarah Mitchell",
    role: "Marketing Director, TechFlow",
  },
  {
    quote: "The ROI we've seen from their PPC management has been extraordinary. They truly understand data-driven marketing and deliver results consistently.",
    name: "James Worthington",
    role: "CEO, Brighton Retail Group",
  },
  {
    quote: "Their website redesign increased our conversion rate by 180%. The team at Cornerstone Media are strategic, creative, and deeply committed to our success.",
    name: "Emma Clarke",
    role: "Founder, Horizon Health",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
            Testimonials
          </p>
          <h2 className="mb-12 font-heading text-3xl font-bold text-foreground md:text-4xl">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-10"
            >
              <p className="mb-6 font-body text-lg italic leading-relaxed text-foreground/90">
                "{testimonials[current].quote}"
              </p>
              <p className="font-heading text-sm font-semibold text-accent">
                {testimonials[current].name}
              </p>
              <p className="font-body text-xs text-muted-foreground">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-accent" : "w-2 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
