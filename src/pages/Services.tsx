import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  MousePointerClick,
  Share2,
  PenLine,
  Palette,
  Wrench,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";

const services = [
  {
    icon: MousePointerClick,
    title: "PPC Advertising",
    tagline: "Instant, Targeted Reach",
    description:
      "Drive high-intent traffic to your Birmingham business with expertly managed Google Ads campaigns that maximise every pound of your budget.",
    features: ["Google Ads Management", "Conversion Tracking", "A/B Testing", "ROI Reporting"],
    path: "/ppc",
    accent: "from-primary to-secondary",
    glowColor: "primary",
  },
  {
    icon: Search,
    title: "SEO Services",
    tagline: "Dominate Search Results",
    description:
      "Climb the Google rankings in Birmingham and beyond with technical SEO, content strategy, and authoritative link building that compounds over time.",
    features: ["Technical SEO Audits", "Keyword Research", "Link Building", "Local SEO"],
    path: "/seo",
    accent: "from-secondary to-accent",
    glowColor: "secondary",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    tagline: "Build a Loyal Audience",
    description:
      "Build brand awareness and drive meaningful engagement through strategic social media campaigns tailored to the Birmingham market.",
    features: ["Content Calendars", "Paid Social Ads", "Community Management", "Analytics"],
    path: "/social-media",
    accent: "from-accent to-primary",
    glowColor: "accent",
  },
  {
    icon: PenLine,
    title: "Content Writing",
    tagline: "Words That Convert",
    description:
      "Engage your audience with SEO-optimised blog posts, website copy, and content strategy that drives organic traffic and conversions.",
    features: ["Blog Writing", "Web Copy", "SEO Content", "Brand Storytelling"],
    path: "/content-writing",
    accent: "from-primary to-accent",
    glowColor: "primary",
  },
  {
    icon: Palette,
    title: "Website Design",
    tagline: "Beautiful & Conversion-Focused",
    description:
      "Conversion-focused website design for Birmingham businesses — beautifully crafted, blazing fast, and optimised for every device.",
    features: ["Custom Design", "Mobile-First", "UX Strategy", "Speed Optimised"],
    path: "/website-design",
    accent: "from-secondary to-primary",
    glowColor: "secondary",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    tagline: "Always On, Always Fast",
    description:
      "Keep your site secure, fast, and up-to-date with ongoing maintenance, monitoring, and performance optimisation plans.",
    features: ["Security Updates", "Performance Monitoring", "Backups", "Uptime Guarantee"],
    path: "/website-maintenance",
    accent: "from-accent to-secondary",
    glowColor: "accent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Our Services | PPC, SEO, Web Design & More | Cornerstone Media"
        description="Explore the full range of digital marketing services from Cornerstone Media in Birmingham. PPC, SEO, social media, content writing, web design & maintenance."
        canonical="https://cornerstonemedia.co.uk/services"
      />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-40 pb-24 section-padding">
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/8 blur-[150px]" />
            <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/6 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 mb-6">
                <Sparkles className="h-4 w-4 text-secondary" />
                <span className="font-heading text-xs font-semibold uppercase tracking-widest text-secondary">
                  Our Services
                </span>
              </div>

              <h1 className="font-heading text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-7xl mb-6">
                Everything You Need to{" "}
                <span className="gradient-text">Grow Online</span>
              </h1>

              <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                From first click to loyal customer — we provide the full spectrum of digital marketing services
                to help Birmingham businesses thrive in the digital landscape.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding pt-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mx-auto max-w-7xl grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={cardVariants}>
                <Link
                  to={service.path}
                  className="group relative flex h-full flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-secondary/40 card-hover"
                >
                  {/* Top gradient bar */}
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${service.accent} opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  {/* Hover glow */}
                  <div
                    className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-${service.glowColor}/10 blur-[60px] opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
                  />

                  <div className="relative flex flex-1 flex-col p-8">
                    {/* Icon */}
                    <div
                      className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} shadow-lg transition-transform duration-500 group-hover:scale-110`}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Tagline */}
                    <p className="mb-1 font-heading text-xs font-semibold uppercase tracking-widest text-secondary">
                      {service.tagline}
                    </p>

                    {/* Title */}
                    <h2 className="mb-3 font-heading text-2xl font-bold text-foreground">
                      {service.title}
                    </h2>

                    {/* Description */}
                    <p className="mb-6 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    {/* Feature pills */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-border bg-muted/50 px-3 py-1 font-body text-xs text-muted-foreground transition-colors duration-300 group-hover:border-secondary/30 group-hover:text-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 font-heading text-sm font-semibold text-secondary transition-all duration-300 group-hover:gap-3 group-hover:text-accent">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Services;
