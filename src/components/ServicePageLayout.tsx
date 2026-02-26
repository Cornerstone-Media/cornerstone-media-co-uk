import { motion } from "framer-motion";
import { ReactNode } from "react";
import { type LucideIcon } from "lucide-react";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  processSteps: { title: string; description: string }[];
  icon: LucideIcon;
  topics: { title: string; description: string }[];
}

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  benefits,
  processSteps,
  icon: Icon,
  topics,
}: ServicePageLayoutProps) => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden bg-card">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/15 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-muted">
              <Icon className="h-8 w-8 text-secondary" />
            </div>
            <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
              {subtitle}
            </p>
            <h1 className="mb-6 font-heading text-4xl font-bold text-foreground md:text-6xl">
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="gradient-text">{title.split(" ").slice(-1)}</span>
            </h1>
            <p className="max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="mb-8 font-heading text-3xl font-bold text-foreground">
              Why Choose Our <span className="gradient-text">Service</span>
            </h2>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card flex items-start gap-4 p-6"
              >
                <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                <p className="font-body text-sm leading-relaxed text-foreground/90">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="section-padding bg-card">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="mb-12 font-heading text-3xl font-bold text-foreground">
              What's <span className="gradient-text">Included</span>
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            {topics.map((topic, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="gradient-border p-8"
              >
                <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">{topic.title}</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="mb-12 font-heading text-3xl font-bold text-foreground">
              How It <span className="gradient-text">Works</span>
            </h2>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-secondary bg-card">
                  <span className="gradient-text font-heading text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mb-2 font-heading text-base font-semibold text-foreground">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden bg-card">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-6 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Ready to Get <span className="gradient-text">Started?</span>
          </h2>
          <p className="mb-8 font-body text-muted-foreground">
            Book a free strategy session and discover how we can accelerate your growth.
          </p>
          <a href="#" className="gradient-btn inline-block">
            Request a Strategy Session
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default ServicePageLayout;
