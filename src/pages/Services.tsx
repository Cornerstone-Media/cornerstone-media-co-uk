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
  CheckCircle2,
  Users,
  BarChart3,
  Target,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";

const services = [
  {
    icon: MousePointerClick,
    title: "PPC Advertising Birmingham",
    tagline: "Instant, Targeted Reach",
    description:
      "Drive high-intent traffic to your Birmingham business with expertly managed Google Ads campaigns that maximise every pound of your budget. Our PPC specialists create data-driven campaigns targeting customers actively searching for your products and services.",
    features: ["Google Ads Management", "Conversion Tracking", "A/B Testing", "ROI Reporting"],
    path: "/ppc",
    accent: "from-primary to-secondary",
    glowColor: "primary",
  },
  {
    icon: Search,
    title: "SEO Services Birmingham",
    tagline: "Dominate Search Results",
    description:
      "Climb the Google rankings in Birmingham and beyond with technical SEO, content strategy, and authoritative link building that compounds over time. Our SEO team delivers sustainable organic growth for Birmingham businesses.",
    features: ["Technical SEO Audits", "Keyword Research", "Link Building", "Local SEO"],
    path: "/seo",
    accent: "from-secondary to-accent",
    glowColor: "secondary",
  },
  {
    icon: Share2,
    title: "Social Media Marketing Birmingham",
    tagline: "Build a Loyal Audience",
    description:
      "Build brand awareness and drive meaningful engagement through strategic social media campaigns tailored to the Birmingham market. We manage your social presence across Facebook, Instagram, LinkedIn, and TikTok.",
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
      "Engage your audience with SEO-optimised blog posts, website copy, and content strategy that drives organic traffic and conversions for Birmingham businesses.",
    features: ["Blog Writing", "Web Copy", "SEO Content", "Brand Storytelling"],
    path: "/content-writing",
    accent: "from-primary to-accent",
    glowColor: "primary",
  },
  {
    icon: Palette,
    title: "Website Design Birmingham",
    tagline: "Beautiful & Conversion-Focused",
    description:
      "Conversion-focused website design for Birmingham businesses — beautifully crafted, blazing fast, and optimised for every device. We build websites that turn visitors into customers.",
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
      "Keep your site secure, fast, and up-to-date with ongoing maintenance, monitoring, and performance optimisation plans designed for Birmingham businesses.",
    features: ["Security Updates", "Performance Monitoring", "Backups", "Uptime Guarantee"],
    path: "/website-maintenance",
    accent: "from-accent to-secondary",
    glowColor: "accent",
  },
];

const whyChooseUs = [
  {
    icon: Target,
    title: "Results-Driven Approach",
    description: "Every campaign is built around measurable KPIs. We track conversions, revenue, and ROI — not vanity metrics.",
  },
  {
    icon: Users,
    title: "Birmingham Market Expertise",
    description: "We understand the Birmingham business landscape, local competition, and customer behaviour patterns unique to the West Midlands.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description: "Monthly reports with clear data on traffic, leads, and revenue. You always know exactly how your investment is performing.",
  },
  {
    icon: Zap,
    title: "Integrated Strategy",
    description: "Our services work together — SEO supports PPC, content fuels social media, and web design underpins everything for maximum impact.",
  },
];

const faqs = [
  {
    q: "What digital marketing services does Cornerstone Media offer?",
    a: "Cornerstone Media offers a comprehensive suite of digital marketing services including PPC advertising (Google Ads), search engine optimisation (SEO), social media marketing, content writing, website design, and website maintenance. All services are tailored specifically for Birmingham businesses and the wider West Midlands market.",
  },
  {
    q: "How do I know which digital marketing service is right for my Birmingham business?",
    a: "Every business is different. We offer a free strategy consultation where we assess your current online presence, discuss your goals, and recommend the services that will deliver the best return on investment. Whether you need immediate leads through PPC or long-term growth through SEO, we'll build a plan that fits your budget and objectives.",
  },
  {
    q: "Can I combine multiple services for better results?",
    a: "Absolutely. In fact, we recommend an integrated approach. For example, combining SEO Birmingham services with PPC Birmingham campaigns ensures you capture both organic and paid traffic. Adding social media marketing builds brand awareness that supports all other channels. Our clients who use multiple services consistently see stronger overall results.",
  },
  {
    q: "How long before I see results from digital marketing?",
    a: "It depends on the service. PPC advertising can generate leads within days of launching campaigns. SEO typically takes 3-6 months to show significant ranking improvements, though some gains appear sooner. Social media marketing builds momentum over 2-3 months. We set realistic expectations during our initial consultation and provide regular progress updates.",
  },
  {
    q: "Do you work with small businesses in Birmingham?",
    a: "Yes, we work with businesses of all sizes across Birmingham and the West Midlands. From sole traders and startups to established companies with multiple locations, we tailor our services and pricing to match your scale and ambitions. Many of our long-term clients started with a single service and expanded as they grew.",
  },
  {
    q: "What makes Cornerstone Media different from other Birmingham marketing agencies?",
    a: "We combine deep technical expertise with creative execution and genuine local market knowledge. Unlike larger agencies where you become just another account number, we provide dedicated attention and personalised strategy. We're transparent about pricing, honest about timelines, and focused entirely on delivering measurable business growth.",
  },
];

const servicesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    "name": "Cornerstone Media",
    "description": "Full-service digital marketing agency in Birmingham offering PPC, SEO, social media marketing, website design, content writing, and website maintenance.",
    "url": "https://cornerstonemedialtd.com/services",
    "telephone": "+447846798534",
    "email": "info@cornerstonemedialtd.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Birmingham",
      "addressRegion": "West Midlands",
      "addressCountry": "GB",
    },
    "areaServed": [
      { "@type": "City", "name": "Birmingham" },
      { "@type": "AdministrativeArea", "name": "West Midlands" },
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PPC Advertising Birmingham", "url": "https://cornerstonemedialtd.com/ppc" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Birmingham", "url": "https://cornerstonemedialtd.com/seo" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing Birmingham", "url": "https://cornerstonemedialtd.com/social-media" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design Birmingham", "url": "https://cornerstonemedialtd.com/website-design" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Writing", "url": "https://cornerstonemedialtd.com/content-writing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Maintenance", "url": "https://cornerstonemedialtd.com/website-maintenance" } },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
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
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Digital Marketing Services Birmingham | Cornerstone Media"
        description="Explore the full range of digital marketing services from Cornerstone Media in Birmingham — PPC, SEO, social media, website design, content writing & maintenance. Free strategy call."
        canonical="https://cornerstonemedialtd.com/services"
        schema={servicesSchema}
      />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-40 pb-24 section-padding">
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
                Digital Marketing Services{" "}
                <span className="gradient-text">Birmingham</span>
              </h1>

              <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Cornerstone Media is a full-service digital marketing agency in Birmingham. From{" "}
                <Link to="/ppc" className="text-secondary hover:underline">PPC advertising</Link> and{" "}
                <Link to="/seo" className="text-secondary hover:underline">SEO</Link> to{" "}
                <Link to="/social-media" className="text-secondary hover:underline">social media marketing</Link> and{" "}
                <Link to="/website-design" className="text-secondary hover:underline">website design</Link>,
                we provide everything your business needs to grow online and generate more leads, sales, and revenue.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="section-padding pt-0 pb-16">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Why Birmingham Businesses Choose Cornerstone Media
              </h2>
              <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
                <p>
                  Birmingham is one of the most competitive business markets in the UK. With thousands of companies competing for attention online, having a strong digital marketing strategy isn't optional — it's essential for survival and growth. Cornerstone Media helps Birmingham businesses cut through the noise with targeted, data-driven marketing campaigns that deliver real results.
                </p>
                <p>
                  Whether you're a startup looking to establish your online presence, an established business wanting to increase market share, or a growing company ready to scale your digital efforts, our team of specialists will create a bespoke strategy designed around your specific goals and budget. We don't believe in one-size-fits-all solutions because every Birmingham business is unique.
                </p>
                <p>
                  Our integrated approach means every service works together. Your <Link to="/seo" className="text-secondary hover:underline">SEO strategy</Link> informs your content creation. Your <Link to="/ppc" className="text-secondary hover:underline">PPC campaigns</Link> provide keyword data that strengthens organic efforts. Your <Link to="/website-design" className="text-secondary hover:underline">website design</Link> is optimised for conversions from every traffic source. This joined-up thinking is what sets Cornerstone Media apart from other Birmingham marketing agencies.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding pt-0" aria-label="Our digital marketing services">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Our Full Range of Digital Marketing Services
              </h2>
              <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">
                Each service is delivered by experienced specialists who understand the Birmingham market and are focused on generating measurable business growth.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {services.map((service) => (
                <motion.div key={service.title} variants={cardVariants}>
                  <Link
                    to={service.path}
                    className="group relative flex h-full flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-secondary/40 card-hover"
                  >
                    <div
                      className={`h-1 w-full bg-gradient-to-r ${service.accent} opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
                    />
                    <div
                      className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-${service.glowColor}/10 blur-[60px] opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
                    />
                    <div className="relative flex flex-1 flex-col p-8">
                      <div
                        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} shadow-lg transition-transform duration-500 group-hover:scale-110`}
                      >
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <p className="mb-1 font-heading text-xs font-semibold uppercase tracking-widest text-secondary">
                        {service.tagline}
                      </p>
                      <h3 className="mb-3 font-heading text-2xl font-bold text-foreground">
                        {service.title}
                      </h3>
                      <p className="mb-6 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
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
                      <div className="flex items-center gap-2 font-heading text-sm font-semibold text-secondary transition-all duration-300 group-hover:gap-3 group-hover:text-accent">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How Services Work Together */}
        <section className="section-padding bg-card/50">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 text-center sm:text-4xl">
                How Our Services Work Together
              </h2>
              <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
                <p>
                  The most successful digital marketing strategies don't rely on a single channel. At Cornerstone Media, we design integrated campaigns where each service amplifies the others, creating a compounding effect that accelerates your growth in the Birmingham market.
                </p>
                <p>
                  For example, our <Link to="/seo" className="text-secondary hover:underline">SEO Birmingham</Link> services build long-term organic visibility, while <Link to="/ppc" className="text-secondary hover:underline">PPC Birmingham</Link> campaigns deliver immediate leads from day one. The keyword data from your PPC campaigns directly informs our SEO content strategy, ensuring we target the terms that actually convert — not just the ones with the highest search volume.
                </p>
                <p>
                  Meanwhile, <Link to="/social-media" className="text-secondary hover:underline">social media marketing</Link> builds brand recognition and trust, which improves click-through rates across both organic and paid search results. High-quality content created by our writing team fuels social engagement and earns backlinks that strengthen your SEO authority. And a professionally designed, <Link to="/website-design" className="text-secondary hover:underline">conversion-optimised website</Link> ensures that all this traffic actually converts into enquiries, bookings, and sales.
                </p>
                <p>
                  This integrated approach is why our Birmingham clients consistently outperform competitors who treat each marketing channel as a separate silo. When every element of your digital presence works in harmony, the results are far greater than the sum of their parts.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Why Choose Cornerstone Media for Digital Marketing in Birmingham
              </h2>
              <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">
                We're not just another agency. We're your growth partner, committed to delivering measurable results that impact your bottom line.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                    <item.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="font-body text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="section-padding bg-card/50">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 text-center sm:text-4xl">
                Our Process: From Strategy to Results
              </h2>
              <div className="space-y-8 mt-10">
                {[
                  { step: "1", title: "Discovery & Audit", desc: "We start with a deep dive into your business, competitors, and current online performance. We audit your website, analyse your market position in Birmingham, and identify the biggest opportunities for growth." },
                  { step: "2", title: "Strategy Development", desc: "Based on our findings, we create a tailored digital marketing strategy with clear objectives, timelines, and KPIs. We recommend the right mix of services — whether that's SEO, PPC, social media, or a combination — to achieve your goals." },
                  { step: "3", title: "Implementation", desc: "Our specialist teams execute the strategy across all channels. From technical website optimisations and ad campaign builds to content creation and social media management, every element is handled by experienced professionals." },
                  { step: "4", title: "Measurement & Optimisation", desc: "We continuously monitor performance, analyse results, and optimise campaigns for better returns. Monthly reports keep you informed with transparent data on traffic, leads, conversions, and revenue impact." },
                ].map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary font-heading text-lg font-bold text-white">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="font-body text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Frequently Asked Questions About Our Birmingham Digital Marketing Services
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group rounded-xl border border-border bg-card p-6 [&[open]]:bg-muted/30"
                >
                  <summary className="flex cursor-pointer items-center justify-between font-heading text-lg font-semibold text-foreground list-none">
                    {faq.q}
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary opacity-0 transition-opacity group-open:opacity-100" />
                  </summary>
                  <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Services;
