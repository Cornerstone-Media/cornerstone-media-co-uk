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
  Target,
  Users,
  BarChart3,
  Zap,
  ChevronDown,
  Globe,
  TrendingUp,
  Megaphone,
  LayoutGrid,
  RefreshCw,
  FileSearch,
  Settings,
  Smartphone,
  DollarSign,
  Eye,
  Heart,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";

/* ─── Data ─── */

const services = [
  {
    icon: MousePointerClick,
    title: "PPC Advertising",
    tagline: "Instant, Targeted Reach",
    description: "Drive high-intent traffic with expertly managed Google Ads campaigns that maximise every pound of your budget.",
    features: ["Google Ads Management", "Conversion Tracking", "A/B Testing", "ROI Reporting"],
    path: "/ppc",
    accent: "from-primary to-secondary",
  },
  {
    icon: Search,
    title: "SEO Services",
    tagline: "Dominate Search Results",
    description: "Climb Google rankings with technical SEO, content strategy, and authoritative link building that compounds over time.",
    features: ["Technical SEO Audits", "Keyword Research", "Link Building", "Local SEO"],
    path: "/seo",
    accent: "from-secondary to-accent",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    tagline: "Build a Loyal Audience",
    description: "Build brand awareness and drive engagement through strategic social media campaigns tailored to the Birmingham market.",
    features: ["Content Calendars", "Paid Social Ads", "Community Management", "Analytics"],
    path: "/social-media",
    accent: "from-accent to-primary",
  },
  {
    icon: PenLine,
    title: "Content Writing",
    tagline: "Words That Convert",
    description: "SEO-optimised blog posts, website copy, and content strategy that drives organic traffic and conversions.",
    features: ["Blog Writing", "Web Copy", "SEO Content", "Brand Storytelling"],
    path: "/content-writing",
    accent: "from-primary to-accent",
  },
  {
    icon: Palette,
    title: "Website Design",
    tagline: "Beautiful & Conversion-Focused",
    description: "Conversion-focused website design — beautifully crafted, blazing fast, and optimised for every device.",
    features: ["Custom Design", "Mobile-First", "UX Strategy", "Speed Optimised"],
    path: "/website-design",
    accent: "from-secondary to-primary",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    tagline: "Always On, Always Fast",
    description: "Keep your site secure, fast, and up-to-date with ongoing maintenance, monitoring, and performance optimisation.",
    features: ["Security Updates", "Performance Monitoring", "Backups", "Uptime Guarantee"],
    path: "/website-maintenance",
    accent: "from-accent to-secondary",
  },
];

const whyChooseUs = [
  { icon: Target, title: "Results-Driven", description: "Every campaign is built around measurable KPIs — conversions, revenue, and ROI, not vanity metrics." },
  { icon: Users, title: "Birmingham Experts", description: "We understand the local business landscape, competition, and customer behaviour unique to the West Midlands." },
  { icon: BarChart3, title: "Transparent Reporting", description: "Monthly reports with clear data on traffic, leads, and revenue so you always know how your investment performs." },
  { icon: Zap, title: "Integrated Strategy", description: "Our services work together — SEO supports PPC, content fuels social, and design underpins everything." },
];

const seoFeatures = [
  { icon: FileSearch, label: "Keyword Research" },
  { icon: Settings, label: "Technical SEO" },
  { icon: Globe, label: "On-Page SEO" },
  { icon: Target, label: "Local SEO" },
];

const ppcFeatures = [
  { icon: MousePointerClick, label: "Google Ads" },
  { icon: TrendingUp, label: "Paid Search" },
  { icon: RefreshCw, label: "Remarketing" },
  { icon: BarChart3, label: "Conversion Tracking" },
];

const socialFeatures = [
  { icon: PenLine, label: "Content Creation" },
  { icon: Megaphone, label: "Paid Social Ads" },
  { icon: Heart, label: "Engagement Strategies" },
  { icon: MessageSquare, label: "Community Management" },
];

const webFeatures = [
  { icon: Smartphone, label: "Responsive Design" },
  { icon: Target, label: "Conversion-Focused" },
  { icon: Zap, label: "Fast Loading" },
  { icon: LayoutGrid, label: "UX Strategy" },
];

const faqs = [
  { q: "What digital marketing services do Birmingham businesses need?", a: "Most Birmingham businesses benefit from a combination of SEO, PPC advertising, social media marketing, and a professionally designed website. The right mix depends on your industry, budget, and growth goals. A local retailer might prioritise Google Ads and local SEO, while a B2B company may focus on LinkedIn marketing and content strategy. We offer a free consultation to help you identify the highest-impact services for your specific situation." },
  { q: "How long does SEO take to work?", a: "SEO is a long-term investment. Most Birmingham businesses start seeing measurable improvements in organic traffic within 3 to 6 months, with significant ranking gains typically appearing between 6 and 12 months. The timeline depends on your starting position, industry competitiveness, and the quality of your website. Our SEO Birmingham team provides monthly progress reports so you can track keyword movements, traffic growth, and lead generation from day one." },
  { q: "Is PPC better than SEO?", a: "PPC and SEO serve different but complementary purposes. PPC delivers immediate visibility and leads — you can start generating enquiries within days of launching Google Ads campaigns. SEO builds sustainable, long-term organic traffic that doesn't require ongoing ad spend. The most effective digital marketing strategies combine both: PPC for instant results and SEO for compounding growth. Our Birmingham clients who invest in both channels consistently see the strongest overall ROI." },
  { q: "How much does digital marketing cost in Birmingham?", a: "Digital marketing costs vary based on the services you need, the competitiveness of your industry, and your growth ambitions. PPC budgets can start from a few hundred pounds per month, while comprehensive SEO campaigns typically require a larger ongoing investment. We provide transparent pricing with no hidden fees and tailor packages to suit businesses of all sizes in Birmingham. Contact us for a free quote based on your specific requirements." },
  { q: "Do you work with small businesses in Birmingham?", a: "Absolutely. We work with businesses of all sizes across Birmingham and the West Midlands — from sole traders and startups to established companies with multiple locations. Many of our most successful partnerships started with a single service and expanded as the business grew. We tailor our pricing and approach to match your scale, ensuring you get maximum value regardless of budget size." },
  { q: "What makes Cornerstone Media different from other Birmingham marketing agencies?", a: "We combine deep technical expertise with creative execution and genuine local market knowledge. Unlike larger agencies where you become just another account, we provide dedicated attention and personalised strategy. We are transparent about pricing, honest about timelines, and focused entirely on delivering measurable business growth for Birmingham companies." },
  { q: "Can I combine multiple digital marketing services?", a: "Yes, and we strongly recommend it. An integrated approach delivers far better results than treating each channel in isolation. For example, combining SEO with PPC means the keyword data from your paid campaigns directly improves your organic strategy. Social media builds brand awareness that lifts click-through rates across search. And a well-designed website ensures all traffic converts into genuine leads and sales." },
];

const servicesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    "name": "Cornerstone Media",
    "description": "Full-service digital marketing agency in Birmingham offering SEO, PPC, social media marketing, website design, content writing, and website maintenance services.",
    "url": "https://cornerstone-media.co.uk/services",
    "telephone": "+447846798534",
    "email": "info@cornerstone-media.co.uk",
    "address": { "@type": "PostalAddress", "addressLocality": "Birmingham", "addressRegion": "West Midlands", "addressCountry": "GB" },
    "areaServed": [{ "@type": "City", "name": "Birmingham" }, { "@type": "AdministrativeArea", "name": "West Midlands" }],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services Birmingham",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Birmingham", "url": "https://cornerstone-media.co.uk/seo-birmingham" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PPC Advertising Birmingham", "url": "https://cornerstone-media.co.uk/ppc-birmingham" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing Birmingham", "url": "https://cornerstone-media.co.uk/social-media-marketing-birmingham" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design Birmingham", "url": "https://cornerstone-media.co.uk/website-design-birmingham" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Writing", "url": "https://cornerstone-media.co.uk/content-writing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Maintenance", "url": "https://cornerstone-media.co.uk/website-maintenance" } },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ─── Sub-components ─── */

const FAQItem = ({ faq, index }: { faq: { q: string; a: string }; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="rounded-xl border border-border bg-card overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left font-heading text-lg font-semibold text-foreground hover:text-secondary transition-colors"
        aria-expanded={open}
      >
        <span>{faq.q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`${open ? "block" : "hidden"} px-6 pb-6 pt-0`}>
        <p className="font-body text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
      </div>
      {!open && (
        <div className="sr-only" aria-hidden="false">
          <p>{faq.a}</p>
        </div>
      )}
    </motion.div>
  );
};

const FeatureGrid = ({ features, className }: { features: { icon: any; label: string }[]; className?: string }) => (
  <div className={`grid grid-cols-2 gap-3 ${className || ""}`}>
    {features.map((f) => (
      <div key={f.label} className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 px-4 py-3">
        <f.icon className="h-5 w-5 text-secondary flex-shrink-0" />
        <span className="font-heading text-sm font-medium text-foreground">{f.label}</span>
      </div>
    ))}
  </div>
);

const ServiceDetailSection = ({
  heading,
  intro,
  features,
  linkTo,
  linkText,
  details,
  reversed,
}: {
  heading: string;
  intro: string;
  features: { icon: any; label: string }[];
  linkTo: string;
  linkText: string;
  details: string[];
  reversed?: boolean;
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className={`section-padding ${reversed ? "bg-card/50" : ""}`}>
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className={`grid gap-10 items-start lg:grid-cols-2`}>
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4 sm:text-4xl">{heading}</h2>
              <p className="font-body text-base leading-relaxed text-muted-foreground mb-6">{intro}</p>
              <Link to={linkTo} className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-secondary hover:text-accent transition-colors">
                {linkText} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div>
              <FeatureGrid features={features} className="mb-6" />
              {/* Expandable detail — content stays in DOM for SEO */}
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-2 font-heading text-sm font-medium text-secondary hover:text-accent transition-colors mb-4"
              >
                {expanded ? "Show less" : "Read more details"}
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
              </button>
              <div className={`${expanded ? "block" : "hidden"} space-y-3`}>
                {details.map((d, i) => (
                  <p key={i} className="font-body text-sm leading-relaxed text-muted-foreground">{d}</p>
                ))}
              </div>
              {/* SEO fallback */}
              {!expanded && (
                <div className="sr-only" aria-hidden="false">
                  {details.map((d, i) => <p key={i}>{d}</p>)}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Page ─── */

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Digital Marketing Services Birmingham | Cornerstone Media"
        description="Digital marketing services in Birmingham including SEO, PPC, social media marketing and website design from Cornerstone Media. Free strategy consultation available."
        canonical="https://cornerstone-media.co.uk/services"
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
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 mb-6">
                <Sparkles className="h-4 w-4 text-secondary" />
                <span className="font-heading text-xs font-semibold uppercase tracking-widest text-secondary">Full-Service Digital Marketing</span>
              </div>
              <h1 className="font-heading text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-7xl mb-6">
                Digital Marketing Services{" "}<span className="gradient-text">Birmingham</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Cornerstone Media is a full-service digital marketing agency in Birmingham delivering expert{" "}
                <Link to="/seo" className="text-secondary hover:underline">SEO</Link>,{" "}
                <Link to="/ppc" className="text-secondary hover:underline">PPC advertising</Link>,{" "}
                <Link to="/social-media" className="text-secondary hover:underline">social media marketing</Link>, and{" "}
                <Link to="/website-design" className="text-secondary hover:underline">website design</Link>{" "}
                services that generate measurable leads, sales, and revenue for businesses across the West Midlands.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="section-padding py-12 bg-card/50">
          <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "45,000+", label: "Birmingham Businesses" },
              { value: "100%", label: "Transparent Pricing" },
              { value: "4.9★", label: "Client Satisfaction" },
              { value: "Free", label: "Strategy Consultation" },
            ].map((stat) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className="font-heading text-2xl font-extrabold gradient-text">{stat.value}</p>
                <p className="font-body text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Agency intro — short visible, rest expandable */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="grid gap-10 lg:grid-cols-5">
                <div className="lg:col-span-3">
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-4 sm:text-4xl">Digital Marketing Agency Birmingham</h2>
                  <p className="font-body text-base leading-relaxed text-muted-foreground mb-4">
                    Birmingham is one of the most competitive business markets in the United Kingdom. With over 45,000 registered businesses, standing out online demands a strategic, data-driven approach that aligns every channel with your commercial objectives.
                  </p>
                  <p className="font-body text-base leading-relaxed text-muted-foreground">
                    What sets us apart is our integrated approach — rather than treating SEO, PPC, social media, and web design as separate services, we build unified strategies where every channel reinforces the others for faster growth and stronger ROI.
                  </p>
                </div>
                <div className="lg:col-span-2 grid grid-cols-1 gap-4">
                  {[
                    { icon: Globe, text: "Enterprise-level strategy for every business size" },
                    { icon: TrendingUp, text: "Data-driven approach with measurable outcomes" },
                    { icon: DollarSign, text: "Lower cost per acquisition, stronger returns" },
                    { icon: Eye, text: "Bespoke plans built around your goals & budget" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                      <item.icon className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="font-body text-sm text-foreground/90">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Expandable deeper content for SEO */}
              <ExpandableContent>
                <p>Cornerstone Media was founded to give Birmingham businesses access to the same calibre of digital marketing expertise previously only available to companies with London-sized budgets. We bring enterprise-level strategy, tools, and execution to businesses of every size — from independent retailers in the Jewellery Quarter to professional services firms in Colmore Row and manufacturers across the wider West Midlands.</p>
                <p>Whether you need to generate more leads, increase online sales, build brand awareness, or establish authority in your industry, our team of specialists will create and execute a bespoke digital marketing plan designed around your specific goals, budget, and timeline.</p>
              </ExpandableContent>
            </motion.div>
          </div>
        </section>

        {/* Service detail sections — visual + expandable */}
        <ServiceDetailSection
          heading="SEO Services Birmingham"
          intro="Search engine optimisation is the foundation of any successful online marketing strategy. Our SEO Birmingham services help your business rank higher in Google for the keywords that matter most — driving consistent, high-quality organic traffic without ongoing advertising costs."
          features={seoFeatures}
          linkTo="/seo"
          linkText="Learn more about SEO Birmingham"
          details={[
            "Our SEO process covers every aspect of search visibility. We begin with comprehensive keyword research to identify the search terms your ideal customers use when looking for products or services like yours in Birmingham.",
            "Technical SEO ensures your website meets Google's crawling, indexing, and rendering requirements. We audit site speed, mobile responsiveness, URL structure, schema markup, internal linking, and Core Web Vitals.",
            "On-page SEO involves optimising titles, meta descriptions, headings, content, images, and internal links. We also implement local SEO strategies including Google Business Profile optimisation and geo-targeted content.",
          ]}
        />

        <ServiceDetailSection
          heading="PPC Services Birmingham"
          intro="Pay-per-click advertising delivers immediate visibility and leads for your Birmingham business. Our PPC specialists manage high-performance Google Ads campaigns that put your business in front of customers at the exact moment they search."
          features={ppcFeatures}
          linkTo="/ppc"
          linkText="Learn more about PPC Birmingham"
          reversed
          details={[
            "We build paid search campaigns around commercial intent keywords, ensuring your budget is spent on clicks most likely to convert. Every campaign includes audience targeting, ad copy testing, and landing page optimisation.",
            "Our PPC management includes remarketing campaigns that re-engage visitors who have already shown interest. Combined with conversion tracking, we measure every lead and sale generated by your ads.",
            "Whether launching a new product or building a consistent lead generation engine, PPC provides speed and precision that organic channels cannot match. Our clients typically see their first leads within the first week.",
          ]}
        />

        <ServiceDetailSection
          heading="Social Media Marketing Birmingham"
          intro="Social media is where your Birmingham audience spends their time. Our social media marketing services help you build a loyal following, generate leads, and increase brand awareness across the platforms that matter most."
          features={socialFeatures}
          linkTo="/social-media"
          linkText="Learn more about Social Media Marketing Birmingham"
          details={[
            "We develop bespoke content creation strategies combining eye-catching visuals, compelling copy, and strategic posting schedules to maximise reach and engagement across Facebook, Instagram, LinkedIn, and TikTok.",
            "Beyond organic management, we run targeted paid social advertising campaigns that put your business in front of precisely defined audiences based on demographics, interests, behaviours, and location.",
            "Our engagement strategies go beyond posting — we actively manage community interactions, respond to comments, and build genuine relationships that translate into repeat business and referrals across Birmingham.",
          ]}
        />

        <ServiceDetailSection
          heading="Website Design Birmingham"
          intro="Your website is the hub of your entire digital presence. Every SEO ranking, PPC click, and social media interaction drives visitors to your site — its design and speed directly determine how many become paying customers."
          features={webFeatures}
          linkTo="/website-design"
          linkText="Learn more about Website Design Birmingham"
          reversed
          details={[
            "We specialise in responsive websites that deliver a flawless experience across desktops, tablets, and smartphones. With over 60% of web traffic from mobile, a mobile-first approach is essential.",
            "Every website is built with conversion-focused design principles — strategic CTAs, streamlined user journeys, and zero friction points that prevent visitors from taking the next step.",
            "Performance matters. Google uses page speed as a ranking factor. We build fast-loading websites using modern technologies achieving excellent Core Web Vitals scores for both rankings and user experience.",
          ]}
        />

        {/* Services Grid */}
        <section className="section-padding bg-card/50" aria-label="All digital marketing services">
          <div className="mx-auto max-w-7xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Our Full Range of Digital Marketing Services
              </h2>
              <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">
                Each service is delivered by experienced specialists focused on generating measurable business growth.
              </p>
            </motion.div>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <motion.div key={service.title} variants={cardVariants}>
                  <Link to={service.path} className="group relative flex h-full flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-secondary/40 card-hover">
                    <div className={`h-1 w-full bg-gradient-to-r ${service.accent} opacity-60 transition-opacity duration-500 group-hover:opacity-100`} />
                    <div className="relative flex flex-1 flex-col p-8">
                      <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <p className="mb-1 font-heading text-xs font-semibold uppercase tracking-widest text-secondary">{service.tagline}</p>
                      <h3 className="mb-3 font-heading text-2xl font-bold text-foreground">{service.title}</h3>
                      <p className="mb-6 flex-1 font-body text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                      <div className="mb-6 flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span key={feature} className="rounded-full border border-border bg-muted/50 px-3 py-1 font-body text-xs text-muted-foreground transition-colors duration-300 group-hover:border-secondary/30 group-hover:text-foreground">{feature}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 font-heading text-sm font-semibold text-secondary transition-all duration-300 group-hover:gap-3 group-hover:text-accent">
                        Learn More <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process — visual steps */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">Our Digital Marketing Process</h2>
              <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">
                A proven four-stage process that takes your Birmingham business from audit to sustained growth.
              </p>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "01", title: "Discovery & Audit", desc: "Comprehensive audit of your digital presence, website, search visibility, competitors, and Birmingham market opportunities." },
                { step: "02", title: "Strategy Development", desc: "Tailored digital marketing strategy with clear objectives, timelines, and measurable KPIs aligned to your goals." },
                { step: "03", title: "Execution", desc: "Specialist teams execute across all channels — from technical SEO and Google Ads to content creation and social media." },
                { step: "04", title: "Measure & Optimise", desc: "Continuous monitoring, analysis, and optimisation with monthly reports on traffic, leads, conversions, and revenue." },
              ].map((item, i) => (
                <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group rounded-2xl border border-border bg-card p-8 card-hover">
                  <span className="mb-4 block font-heading text-3xl font-extrabold gradient-text opacity-40 group-hover:opacity-100 transition-opacity duration-500">{item.step}</span>
                  <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-card/50">
          <div className="mx-auto max-w-7xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">Why Choose Cornerstone Media</h2>
              <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">
                Your growth partner — a Birmingham-based team delivering measurable results that impact your bottom line.
              </p>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-2">
              {whyChooseUs.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4 rounded-2xl border border-border bg-card p-6 card-hover">
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

        {/* FAQs */}
        <section className="section-padding">
          <div className="mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">Frequently Asked Questions</h2>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
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

/* ─── Expandable Content helper ─── */
const ExpandableContent = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-4">
      <button onClick={() => setOpen(!open)} className="flex items-center gap-2 font-heading text-sm font-medium text-secondary hover:text-accent transition-colors">
        {open ? "Show less" : "Read more about our approach"}
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`${open ? "block" : "hidden"} mt-4 space-y-4 font-body text-base leading-relaxed text-muted-foreground`}>
        {children}
      </div>
      {!open && (
        <div className="sr-only" aria-hidden="false">
          {children}
        </div>
      )}
    </div>
  );
};

export default Services;
