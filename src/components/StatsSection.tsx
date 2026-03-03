import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const AnimatedCounter = ({ end, suffix = "", prefix = "", duration = 2 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const inc = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += inc;
      if (current >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, (duration * 1000) / steps);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const stats = [
  { value: 320, suffix: "%", label: "Average increase in leads" },
  { value: 5, suffix: "x", label: "Return on ad spend" },
  { value: 200, suffix: "%", label: "Organic traffic growth" },
  { value: 150, suffix: "+", label: "Campaigns delivered" },
];

const StatsSection = () => (
  <section className="section-padding relative overflow-hidden" aria-label="Performance statistics">
    <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} aria-hidden="true" />
    <div className="relative mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
          Results That Speak
        </p>
        <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
          Proven <span className="gradient-text">Performance</span>
        </h2>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-2xl border border-border bg-card px-8 py-10 text-center transition-all duration-500 hover:border-secondary/30 card-hover overflow-visible"
          >
            <p className="mb-3 font-heading text-4xl font-extrabold text-secondary md:text-5xl">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </p>
            <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
