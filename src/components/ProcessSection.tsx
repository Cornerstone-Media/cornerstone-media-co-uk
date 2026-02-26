import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discover", description: "We audit your current digital presence and uncover growth opportunities." },
  { number: "02", title: "Strategise", description: "A tailored roadmap designed around your business goals and budget." },
  { number: "03", title: "Execute", description: "Our team implements campaigns, builds assets, and drives results." },
  { number: "04", title: "Scale", description: "Continuous optimisation to compound your growth month after month." },
];

const ProcessSection = () => (
  <section className="section-padding bg-card/50">
    <div className="mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
          Our Approach
        </p>
        <h2 className="max-w-md font-heading text-4xl font-bold text-foreground md:text-5xl">
          Our Proven <span className="gradient-text">Process</span>
        </h2>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="group relative"
          >
            {i < steps.length - 1 && (
              <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-border to-transparent lg:block" />
            )}
            <div className="relative rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-secondary/30 card-hover">
              <span className="mb-4 block font-heading text-4xl font-extrabold gradient-text opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                {step.number}
              </span>
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
