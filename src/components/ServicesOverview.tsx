import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, MousePointerClick, Share2, Palette, Wrench, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: MousePointerClick,
    title: "PPC Advertising",
    description: "Drive targeted traffic to your Birmingham business with expertly managed Google Ads and pay-per-click campaigns that maximise ROI.",
    path: "/ppc",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Climb Google rankings in Birmingham and beyond with technical SEO, content strategy, and authoritative link building.",
    path: "/seo",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build brand awareness and drive conversions for your Birmingham business through strategic social media campaigns.",
    path: "/social-media",
  },
  {
    icon: Palette,
    title: "Website Design",
    description: "Conversion-focused website design for Birmingham businesses — beautifully crafted, fast, and optimised for every device.",
    path: "/website-design",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description: "Keep your website secure, fast, and up-to-date with our ongoing maintenance, monitoring, and performance optimisation plans.",
    path: "/website-maintenance",
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding bg-card/50" aria-label="Our digital marketing services">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            What We Do
          </p>
          <h2 className="max-w-lg font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Full-Spectrum{" "}
            <span className="gradient-text">Digital Marketing Services</span> in Birmingham
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={service.path}
                className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-secondary/30 hover:bg-muted/30 card-hover"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-muted/50 transition-all duration-500 group-hover:border-secondary/30 group-hover:bg-secondary/10">
                  <service.icon className="h-6 w-6 text-muted-foreground transition-colors duration-500 group-hover:text-secondary" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-6 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 font-heading text-sm font-semibold text-secondary transition-all duration-300 group-hover:text-accent group-hover:gap-3">
                  Learn More
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
