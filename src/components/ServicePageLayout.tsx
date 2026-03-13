import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { type LucideIcon, CheckCircle2, ChevronDown, Phone } from "lucide-react";
import { useState } from "react";
import ServiceEnquiryForm from "@/components/ServiceEnquiryForm";

interface FAQ {
  question: string;
  answer: string;
}

interface RelatedService {
  name: string;
  path: string;
  description: string;
}

interface DetailSection {
  heading: string;
  paragraphs: string[];
}

interface CaseStudy {
  title: string;
  result: string;
  description: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  processSteps: { title: string; description: string }[];
  icon: LucideIcon;
  topics: { title: string; description: string }[];
  detailedSections?: DetailSection[];
  whyBirmingham?: DetailSection;
  toolsAndPlatforms?: { heading: string; tools: string[] };
  caseStudies?: CaseStudy[];
  faqs?: FAQ[];
  relatedServices?: RelatedService[];
}

const AccordionDetail = ({ section, index }: { section: DetailSection; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="rounded-2xl border border-border bg-card overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left font-heading text-lg font-semibold text-foreground hover:text-secondary transition-colors"
        aria-expanded={open}
      >
        <span>{section.heading}</span>
        <ChevronDown className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {/* Content always in DOM for SEO crawlability */}
      <div className={`${open ? "block" : "hidden"} px-6 pb-6 pt-0 space-y-3`}>
        {section.paragraphs.map((p, j) => (
          <p key={j} className="font-body text-sm leading-relaxed text-muted-foreground">{p}</p>
        ))}
      </div>
      {/* Hidden SEO fallback for crawlers */}
      {!open && (
        <div className="sr-only" aria-hidden="false">
          {section.paragraphs.map((p, j) => (
            <p key={j}>{p}</p>
          ))}
        </div>
      )}
    </motion.div>
  );
};

const FAQItem = ({ faq, index }: { faq: FAQ; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="rounded-2xl border border-border bg-card overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left font-heading font-semibold text-foreground hover:text-secondary transition-colors"
        aria-expanded={open}
      >
        <span>{faq.question}</span>
        <ChevronDown className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`${open ? "block" : "hidden"} px-6 pb-6 pt-0`}>
        <p className="font-body text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
      </div>
      {!open && (
        <div className="sr-only" aria-hidden="false">
          <p>{faq.answer}</p>
        </div>
      )}
    </motion.div>
  );
};

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  benefits,
  processSteps,
  icon: Icon,
  topics,
  detailedSections,
  whyBirmingham,
  toolsAndPlatforms,
  caseStudies,
  faqs,
  relatedServices,
}: ServicePageLayoutProps) => {
  return (
    <div className="pt-36">
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

      {/* Benefits – visual grid */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Advantages</p>
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

      {/* Detailed Sections – now in accordions */}
      {detailedSections && detailedSections.length > 0 && (
        <section className="section-padding bg-card/50">
          <div className="mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary">In Depth</p>
              <h2 className="mb-8 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Learn <span className="gradient-text">More</span>
              </h2>
            </motion.div>
            <div className="space-y-4">
              {detailedSections.map((section, i) => (
                <AccordionDetail key={i} section={section} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Topics – feature grid */}
      <section className={`section-padding ${detailedSections ? "" : "bg-card/50"}`}>
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Deep Dive</p>
            <h2 className="mb-12 font-heading text-3xl font-bold text-foreground md:text-4xl">
              What's <span className="gradient-text">Included</span>
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Why Birmingham */}
      {whyBirmingham && (
        <section className="section-padding bg-card/50">
          <div className="mx-auto max-w-7xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Local Expertise</p>
              <h2 className="mb-8 font-heading text-3xl font-bold text-foreground md:text-4xl">
                {whyBirmingham.heading}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {whyBirmingham.paragraphs.map((p, i) => (
                  <div key={i} className="rounded-2xl border border-border bg-card p-6">
                    <p className="font-body text-sm leading-relaxed text-muted-foreground">{p}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Workflow</p>
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

      {/* Tools & Platforms */}
      {toolsAndPlatforms && (
        <section className="section-padding bg-card/50">
          <div className="mx-auto max-w-7xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Technology</p>
              <h2 className="mb-12 font-heading text-3xl font-bold text-foreground md:text-4xl">
                {toolsAndPlatforms.heading}
              </h2>
            </motion.div>
            <div className="flex flex-wrap gap-3">
              {toolsAndPlatforms.tools.map((tool, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="rounded-xl border border-border bg-muted/50 px-5 py-3 font-heading text-sm font-medium text-foreground/80"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies */}
      {caseStudies && caseStudies.length > 0 && (
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Results</p>
              <h2 className="mb-12 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Real <span className="gradient-text">Results</span> for Birmingham Businesses
              </h2>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((cs, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-card p-8 card-hover"
                >
                  <p className="mb-2 font-heading text-2xl font-extrabold gradient-text">{cs.result}</p>
                  <h3 className="mb-3 font-heading text-lg font-bold text-foreground">{cs.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">{cs.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className="section-padding bg-card/50">
          <div className="mx-auto max-w-7xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary">FAQ</p>
              <h2 className="mb-12 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </motion.div>
            <div className="mx-auto max-w-3xl space-y-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Explore More</p>
              <h2 className="mb-12 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Related <span className="gradient-text">Services</span>
              </h2>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((rs, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={rs.path}
                    className="group block rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-secondary/30 card-hover"
                  >
                    <h3 className="mb-3 font-heading text-lg font-bold text-foreground group-hover:text-secondary transition-colors">{rs.name}</h3>
                    <p className="font-body text-sm leading-relaxed text-muted-foreground">{rs.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enquiry Form */}
      <ServiceEnquiryForm
        serviceName={title}
        heading={`Get Your Free ${title.replace(" Birmingham", "")} Consultation`}
      />

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
            Book a free strategy session and discover how we can accelerate your growth in Birmingham.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="tel:+447846798534" className="gradient-btn text-base">
              Call Us Now: 07846 798 534
            </a>
            <Link to="/services" className="gradient-btn-outline text-base">
              View All Services
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ServicePageLayout;
