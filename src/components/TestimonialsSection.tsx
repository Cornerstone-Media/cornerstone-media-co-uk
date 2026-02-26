import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { quote: "Cornerstone Media completely turned around our online bookings. We've seen a huge uplift in enquiries since they took over our digital marketing.", name: "Five Star Minibus and Coaches", role: "Birmingham" },
  { quote: "Professional, reliable, and results-driven. Our website traffic has doubled and we're getting consistent leads every week now.", name: "Mayfair Cleaning Services", role: "Birmingham" },
  { quote: "They understood our business from day one. The PPC campaigns they built have been delivering quality leads at a fraction of what we were paying before.", name: "Waste Clearance Service", role: "Birmingham" },
  { quote: "Cornerstone Media helped us build a strong online presence from scratch. Their team is responsive, creative, and genuinely invested in our growth.", name: "S4 Housing", role: "Birmingham" },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Testimonials
          </p>
          <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-border bg-card p-10 md:p-14"
            >
              <Quote className="mx-auto mb-6 h-8 w-8 text-secondary/40" />
              <p className="mb-8 font-body text-lg leading-relaxed text-foreground/90 md:text-xl">
                "{testimonials[current].quote}"
              </p>
              <p className="font-heading text-base font-bold text-foreground">
                {testimonials[current].name}
              </p>
              <p className="font-body text-sm text-muted-foreground">
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
                i === current ? "w-8 bg-secondary" : "w-2 bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
