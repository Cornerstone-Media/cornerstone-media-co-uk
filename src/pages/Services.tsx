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
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
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
      "Drive high-intent traffic to your Birmingham business with expertly managed Google Ads campaigns that maximise every pound of your budget.",
    features: ["Google Ads Management", "Conversion Tracking", "A/B Testing", "ROI Reporting"],
    path: "/ppc",
    accent: "from-primary to-secondary",
  },
  {
    icon: Search,
    title: "SEO Services Birmingham",
    tagline: "Dominate Search Results",
    description:
      "Climb the Google rankings in Birmingham and beyond with technical SEO, content strategy, and authoritative link building that compounds over time.",
    features: ["Technical SEO Audits", "Keyword Research", "Link Building", "Local SEO"],
    path: "/seo",
    accent: "from-secondary to-accent",
  },
  {
    icon: Share2,
    title: "Social Media Marketing Birmingham",
    tagline: "Build a Loyal Audience",
    description:
      "Build brand awareness and drive meaningful engagement through strategic social media campaigns tailored to the Birmingham market.",
    features: ["Content Calendars", "Paid Social Ads", "Community Management", "Analytics"],
    path: "/social-media",
    accent: "from-accent to-primary",
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
  },
  {
    icon: Palette,
    title: "Website Design Birmingham",
    tagline: "Beautiful & Conversion-Focused",
    description:
      "Conversion-focused website design for Birmingham businesses — beautifully crafted, blazing fast, and optimised for every device.",
    features: ["Custom Design", "Mobile-First", "UX Strategy", "Speed Optimised"],
    path: "/website-design",
    accent: "from-secondary to-primary",
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
    q: "What digital marketing services do Birmingham businesses need?",
    a: "Most Birmingham businesses benefit from a combination of SEO, PPC advertising, social media marketing, and a professionally designed website. The right mix depends on your industry, budget, and growth goals. A local retailer might prioritise Google Ads and local SEO, while a B2B company may focus on LinkedIn marketing and content strategy. We offer a free consultation to help you identify the highest-impact services for your specific situation.",
  },
  {
    q: "How long does SEO take to work?",
    a: "SEO is a long-term investment. Most Birmingham businesses start seeing measurable improvements in organic traffic within 3 to 6 months, with significant ranking gains typically appearing between 6 and 12 months. The timeline depends on your starting position, industry competitiveness, and the quality of your website. Our SEO Birmingham team provides monthly progress reports so you can track keyword movements, traffic growth, and lead generation from day one.",
  },
  {
    q: "Is PPC better than SEO?",
    a: "PPC and SEO serve different but complementary purposes. PPC delivers immediate visibility and leads — you can start generating enquiries within days of launching Google Ads campaigns. SEO builds sustainable, long-term organic traffic that doesn't require ongoing ad spend. The most effective digital marketing strategies combine both: PPC for instant results and SEO for compounding growth. Our Birmingham clients who invest in both channels consistently see the strongest overall ROI.",
  },
  {
    q: "How much does digital marketing cost in Birmingham?",
    a: "Digital marketing costs vary based on the services you need, the competitiveness of your industry, and your growth ambitions. PPC budgets can start from a few hundred pounds per month, while comprehensive SEO campaigns typically require a larger ongoing investment. We provide transparent pricing with no hidden fees and tailor packages to suit businesses of all sizes in Birmingham. Contact us for a free quote based on your specific requirements.",
  },
  {
    q: "Do you work with small businesses in Birmingham?",
    a: "Absolutely. We work with businesses of all sizes across Birmingham and the West Midlands — from sole traders and startups to established companies with multiple locations. Many of our most successful partnerships started with a single service and expanded as the business grew. We tailor our pricing and approach to match your scale, ensuring you get maximum value regardless of budget size.",
  },
  {
    q: "What makes Cornerstone Media different from other Birmingham marketing agencies?",
    a: "We combine deep technical expertise with creative execution and genuine local market knowledge. Unlike larger agencies where you become just another account, we provide dedicated attention and personalised strategy. We are transparent about pricing, honest about timelines, and focused entirely on delivering measurable business growth for Birmingham companies.",
  },
  {
    q: "Can I combine multiple digital marketing services?",
    a: "Yes, and we strongly recommend it. An integrated approach delivers far better results than treating each channel in isolation. For example, combining SEO with PPC means the keyword data from your paid campaigns directly improves your organic strategy. Social media builds brand awareness that lifts click-through rates across search. And a well-designed website ensures all traffic converts into genuine leads and sales.",
  },
];

const servicesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    "name": "Cornerstone Media",
    "description": "Full-service digital marketing agency in Birmingham offering SEO, PPC, social media marketing, website design, content writing, and website maintenance services.",
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
      "name": "Digital Marketing Services Birmingham",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Birmingham", "url": "https://cornerstonemedialtd.com/seo" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PPC Advertising Birmingham", "url": "https://cornerstonemedialtd.com/ppc" } },
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
      {open && (
        <div className="px-6 pb-6 pt-0">
          <p className="font-body text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
        </div>
      )}
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Digital Marketing Services Birmingham | Cornerstone Media"
        description="Digital marketing services in Birmingham including SEO, PPC, social media marketing and website design from Cornerstone Media. Free strategy consultation available."
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
                  Full-Service Digital Marketing
                </span>
              </div>

              <h1 className="font-heading text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-7xl mb-6">
                Digital Marketing Services{" "}
                <span className="gradient-text">Birmingham</span>
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

        {/* H2 – Digital Marketing Agency Birmingham */}
        <section className="section-padding pt-0 pb-16">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 sm:text-4xl">
                Digital Marketing Agency Birmingham
              </h2>
              <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
                <p>
                  Birmingham is one of the most competitive business markets in the United Kingdom. With over 45,000 registered businesses operating across the city and surrounding West Midlands region, standing out online requires more than a basic website and occasional social media post. It demands a strategic, data-driven approach to digital marketing that aligns every channel with your commercial objectives.
                </p>
                <p>
                  Cornerstone Media was founded to give Birmingham businesses access to the same calibre of digital marketing expertise that was previously only available to companies with London-sized budgets. We bring enterprise-level strategy, tools, and execution to businesses of every size — from independent retailers in the Jewellery Quarter to professional services firms in Colmore Row and manufacturers across the wider West Midlands.
                </p>
                <p>
                  What sets us apart from other marketing agencies in Birmingham is our integrated approach. Rather than treating SEO, PPC, social media, and web design as separate services delivered by separate teams, we build unified strategies where every channel reinforces the others. The result is faster growth, lower cost per acquisition, and a stronger return on your marketing investment.
                </p>
                <p>
                  Whether you need to generate more leads, increase online sales, build brand awareness, or establish authority in your industry, our team of specialists will create and execute a bespoke digital marketing plan designed around your specific goals, budget, and timeline.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* H2 – SEO Services Birmingham */}
        <section className="section-padding bg-card/50">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 sm:text-4xl">
                SEO Services Birmingham
              </h2>
              <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
                <p>
                  Search engine optimisation is the foundation of any successful online marketing strategy. Our <Link to="/seo" className="text-secondary hover:underline font-medium">SEO Birmingham</Link> services help your business rank higher in Google for the keywords that matter most to your bottom line — driving consistent, high-quality organic traffic without ongoing advertising costs.
                </p>
                <p>
                  Our SEO process covers every aspect of search visibility. We begin with comprehensive <strong className="text-foreground">keyword research</strong> to identify the search terms your ideal customers use when looking for products or services like yours in Birmingham. This research shapes every element of your SEO strategy, from on-page content to link building targets.
                </p>
                <p>
                  <strong className="text-foreground">Technical SEO</strong> ensures your website meets Google's crawling, indexing, and rendering requirements. We audit site speed, mobile responsiveness, URL structure, schema markup, internal linking, and Core Web Vitals to eliminate any barriers preventing your pages from ranking. Many Birmingham businesses lose rankings simply because of technical issues they are unaware of.
                </p>
                <p>
                  <strong className="text-foreground">On-page SEO</strong> involves optimising your titles, meta descriptions, headings, content, images, and internal links so Google clearly understands what each page is about and ranks it accordingly. We also implement <strong className="text-foreground">local SEO</strong> strategies including Google Business Profile optimisation, local citation building, and geo-targeted content to ensure your business appears prominently in Birmingham's local search results and map pack.
                </p>
              </div>
              <div className="mt-6">
                <Link to="/seo" className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-secondary hover:text-accent transition-colors">
                  Learn more about our SEO Birmingham services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* H2 – PPC Services Birmingham */}
        <section className="section-padding">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 sm:text-4xl">
                PPC Services Birmingham
              </h2>
              <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
                <p>
                  Pay-per-click advertising delivers immediate visibility and leads for your Birmingham business. Our <Link to="/ppc" className="text-secondary hover:underline font-medium">PPC Birmingham</Link> specialists manage high-performance <strong className="text-foreground">Google Ads</strong> campaigns that put your business in front of customers at the exact moment they are searching for what you offer.
                </p>
                <p>
                  We build <strong className="text-foreground">paid search campaigns</strong> around commercial intent keywords, ensuring your budget is spent on clicks that are most likely to convert into enquiries, bookings, or sales. Every campaign includes detailed audience targeting, ad copy testing, and landing page optimisation to maximise your conversion rate and minimise wasted spend.
                </p>
                <p>
                  Our PPC management also includes <strong className="text-foreground">remarketing</strong> campaigns that re-engage visitors who have already shown interest in your business, bringing them back to complete their purchase or enquiry. Combined with advanced <strong className="text-foreground">conversion tracking</strong>, we measure every lead and sale generated by your ads so you have complete visibility of your return on investment.
                </p>
                <p>
                  Whether you are launching a new product, promoting a seasonal offer, or building a consistent lead generation engine, PPC advertising provides the speed and precision that organic marketing channels cannot match. Our Birmingham PPC clients typically see their first leads within the first week of campaign launch.
                </p>
              </div>
              <div className="mt-6">
                <Link to="/ppc" className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-secondary hover:text-accent transition-colors">
                  Learn more about our PPC Birmingham services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* H2 – Social Media Marketing Birmingham */}
        <section className="section-padding bg-card/50">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 sm:text-4xl">
                Social Media Marketing Birmingham
              </h2>
              <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
                <p>
                  Social media is where your Birmingham audience spends their time, and it is where your brand needs to be visible, engaging, and consistent. Our <Link to="/social-media" className="text-secondary hover:underline font-medium">social media marketing Birmingham</Link> services help you build a loyal following, generate leads, and increase brand awareness across the platforms that matter most for your business.
                </p>
                <p>
                  We develop bespoke <strong className="text-foreground">content creation</strong> strategies that combine eye-catching visuals, compelling copy, and strategic posting schedules to maximise reach and engagement. Whether your audience is on Facebook, Instagram, LinkedIn, or TikTok, we create platform-specific content that resonates with Birmingham consumers and drives meaningful interaction.
                </p>
                <p>
                  Beyond organic social media management, we run targeted <strong className="text-foreground">paid social advertising</strong> campaigns that put your business in front of precisely defined audiences based on demographics, interests, behaviours, and location. These campaigns are particularly powerful for Birmingham businesses targeting local customers, as we can geo-target ads to specific areas within the city and surrounding region.
                </p>
                <p>
                  Our <strong className="text-foreground">engagement strategies</strong> go beyond simply posting content. We actively manage community interactions, respond to comments and messages, and build genuine relationships between your brand and its audience. This builds trust and loyalty that directly translates into repeat business and word-of-mouth referrals across Birmingham.
                </p>
              </div>
              <div className="mt-6">
                <Link to="/social-media" className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-secondary hover:text-accent transition-colors">
                  Learn more about Social Media Marketing Birmingham <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* H2 – Website Design Birmingham */}
        <section className="section-padding">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 sm:text-4xl">
                Website Design Birmingham
              </h2>
              <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
                <p>
                  Your website is the hub of your entire digital presence. Every SEO ranking, PPC click, and social media interaction ultimately drives visitors to your site — which means its design, speed, and user experience directly determine how many of those visitors become paying customers. Our <Link to="/website-design" className="text-secondary hover:underline font-medium">website design Birmingham</Link> services create sites that look stunning, load instantly, and convert visitors into leads and sales.
                </p>
                <p>
                  We specialise in building <strong className="text-foreground">responsive websites</strong> that deliver a flawless experience across desktops, tablets, and smartphones. With over 60% of web traffic now coming from mobile devices, a mobile-first approach is essential for any Birmingham business that wants to compete online.
                </p>
                <p>
                  Every website we design is built with <strong className="text-foreground">conversion-focused design</strong> principles at its core. We strategically place calls-to-action, streamline user journeys, and remove friction points that prevent visitors from taking the next step. The result is a website that doesn't just look professional — it actively generates business.
                </p>
                <p>
                  Performance matters. Google uses page speed as a ranking factor, and slow-loading websites lose visitors before they even see your content. We build <strong className="text-foreground">fast-loading websites</strong> using modern technologies and optimisation techniques that achieve excellent Core Web Vitals scores, improving both your search rankings and your user experience.
                </p>
              </div>
              <div className="mt-6">
                <Link to="/website-design" className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-secondary hover:text-accent transition-colors">
                  Learn more about Website Design Birmingham <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-card/50" aria-label="All digital marketing services">
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
                    <div className={`h-1 w-full bg-gradient-to-r ${service.accent} opacity-60 transition-opacity duration-500 group-hover:opacity-100`} />
                    <div className="relative flex flex-1 flex-col p-8">
                      <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} shadow-lg transition-transform duration-500 group-hover:scale-110`}>
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

        {/* H2 – Our Digital Marketing Process */}
        <section className="section-padding">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 text-center sm:text-4xl">
                Our Digital Marketing Process
              </h2>
              <p className="font-body text-base leading-relaxed text-muted-foreground mb-10 text-center max-w-2xl mx-auto">
                We follow a proven four-stage process that takes your Birmingham business from initial audit to sustained growth, with complete transparency at every step.
              </p>
              <div className="space-y-8">
                {[
                  { step: "1", title: "Discovery & Audit", desc: "We begin with a comprehensive audit of your current digital presence, analysing your website performance, search visibility, competitor landscape, and market opportunities specific to Birmingham. This data forms the foundation of your bespoke strategy." },
                  { step: "2", title: "Strategy Development", desc: "Based on our findings, we create a tailored digital marketing strategy with clear objectives, realistic timelines, and measurable KPIs. We recommend the optimal combination of SEO, PPC, social media, and web design services to achieve your specific business goals." },
                  { step: "3", title: "Execution & Implementation", desc: "Our specialist teams execute the strategy across all chosen channels. From technical website optimisations and Google Ads campaign builds to content creation and social media management, every element is handled by experienced professionals who understand the Birmingham market." },
                  { step: "4", title: "Measurement & Optimisation", desc: "We continuously monitor performance, analyse results, and optimise campaigns for improved returns. Monthly reports give you complete visibility of traffic, leads, conversions, and revenue impact — ensuring your investment consistently delivers strong results." },
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

        {/* H2 – Why Choose Cornerstone Media */}
        <section className="section-padding bg-card/50">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Why Choose Cornerstone Media
              </h2>
              <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">
                We are not just another agency. We are your growth partner — a Birmingham-based team committed to delivering measurable results that directly impact your bottom line.
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

        {/* H2 – FAQs */}
        <section className="section-padding">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Frequently Asked Questions
              </h2>
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

export default Services;
