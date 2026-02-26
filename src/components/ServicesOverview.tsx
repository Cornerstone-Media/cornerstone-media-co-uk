import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, MousePointerClick, Share2, Palette, Wrench } from "lucide-react";

const services = [
  {
    icon: MousePointerClick,
    title: "PPC Advertising",
    description: "Drive targeted traffic and maximise ROI with expertly managed pay-per-click campaigns across Google Ads and beyond.",
    path: "/ppc",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Climb search rankings with technical optimisation, content strategy, and authoritative link building.",
    path: "/seo",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Build brand awareness and drive conversions through strategic social media campaigns and audience targeting.",
    path: "/social-media",
  },
  {
    icon: Palette,
    title: "Website Design",
    description: "Conversion-focused, beautifully designed websites that deliver exceptional user experiences across all devices.",
    path: "/website-design",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description: "Keep your site secure, fast, and up-to-date with ongoing maintenance, monitoring, and performance optimisation.",
    path: "/website-maintenance",
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding bg-card">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
            What We Do
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Full-Spectrum <span className="gradient-text">Digital Services</span>
          </h2>
          <p className="mx-auto max-w-2xl font-body text-muted-foreground">
            From strategy to execution, we provide everything your business needs to dominate the digital landscape.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={service.path}
                className="gradient-border group flex h-full flex-col p-8 transition-all duration-300 hover:glow-effect"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-secondary/20">
                  <service.icon className="h-6 w-6 text-secondary transition-colors group-hover:text-accent" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-4 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <span className="font-heading text-sm font-medium text-secondary transition-colors group-hover:text-accent">
                  Learn More →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
