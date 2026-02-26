import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { type LucideIcon, CheckCircle2 } from "lucide-react";

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
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden bg-card/50">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-float" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/8 blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-muted/50">
              <Icon className="h-8 w-8 text-secondary" />
            </div>
            <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              {subtitle}
            </p>
            <h1 className="mb-6 font-heading text-4xl font-extrabold text-foreground md:text-6xl lg:text-7xl">
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="gradient-text">{title.split(" ").slice(-1)}</span>
            </h1>
            <p className="max-w-2xl font-body text-lg leading-relaxed text-muted-foreground md:text-xl">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Advantages
            </p>
            <h2 className="mb-12 font-heading text-3xl font-bold text-foreground md:text-4xl">
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
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-secondary/20 card-hover"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="font-body text-sm leading-relaxed text-foreground/90">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="section-padding bg-card/50">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Deep Dive
            </p>
            <h2 className="mb-12 font-heading text-3xl font-bold text-foreground md:text-4xl">
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
                transition={{ delay: i * 0.08 }}
                className="gradient-border p-8"
              >
                <h3 className="mb-3 font-heading text-lg font-bold text-foreground">{topic.title}</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Workflow
            </p>
            <h2 className="mb-12 font-heading text-3xl font-bold text-foreground md:text-4xl">
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
                className="group rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-secondary/30 card-hover"
              >
                <span className="mb-4 block font-heading text-3xl font-extrabold gradient-text opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 font-heading text-base font-bold text-foreground">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden bg-card/50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-6 font-heading text-3xl font-extrabold text-foreground md:text-5xl">
            Ready to Get <span className="gradient-text">Started?</span>
          </h2>
          <p className="mb-10 font-body text-lg text-muted-foreground">
            Book a free strategy session and discover how we can accelerate your growth.
          </p>
          <Link to="/contact" className="gradient-btn text-base">
            Request a Strategy Session
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default ServicePageLayout;
