import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discover", description: "We audit your current digital presence and identify growth opportunities." },
  { number: "02", title: "Strategise", description: "We craft a bespoke strategy aligned with your business goals and budget." },
  { number: "03", title: "Execute", description: "Our specialists implement campaigns with precision and creative excellence." },
  { number: "04", title: "Scale", description: "We optimise, iterate, and scale what works to maximise your returns." },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
            How We Work
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Our Proven <span className="gradient-text">Process</span>
          </h2>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-4">
          {/* Connecting line */}
          <div className="absolute top-16 left-0 right-0 hidden h-px bg-gradient-to-r from-primary via-secondary to-accent md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-secondary bg-card">
                <span className="gradient-text font-heading text-lg font-bold">{step.number}</span>
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
