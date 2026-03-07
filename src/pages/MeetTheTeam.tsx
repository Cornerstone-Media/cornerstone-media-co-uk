import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, MousePointerClick, Share2, Code, Users, MapPin, TrendingUp, Target, BarChart3, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const teamSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://cornerstonemedialtd.com/#organization",
      "name": "Cornerstone Media",
      "url": "https://cornerstonemedialtd.com",
      "logo": "https://cornerstonemedialtd.com/og-logo.png",
      "description": "Birmingham-based digital marketing agency specialising in SEO, PPC, social media marketing, and website design for businesses across the West Midlands.",
      "areaServed": [
        { "@type": "City", "name": "Birmingham" },
        { "@type": "AdministrativeArea", "name": "West Midlands" }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Birmingham",
        "addressRegion": "West Midlands",
        "addressCountry": "GB"
      }
    },
    {
      "@type": "Person",
      "name": "Shafiq",
      "jobTitle": "Paid Media Specialist",
      "description": "Experienced paid media specialist managing Google Ads and PPC campaigns for businesses across Birmingham and the West Midlands.",
      "worksFor": { "@id": "https://cornerstonemedialtd.com/#organization" },
      "image": "https://cornerstonemedialtd.com/og-logo.png",
      "knowsAbout": ["Google Ads", "PPC Advertising", "Paid Media", "Search Engine Marketing", "Remarketing", "Digital Marketing Strategy"]
    },
    {
      "@type": "Person",
      "name": "Chloe",
      "jobTitle": "Social Media & Content Specialist",
      "description": "Creative social media and content specialist helping Birmingham businesses build engaged audiences across social platforms.",
      "worksFor": { "@id": "https://cornerstonemedialtd.com/#organization" },
      "image": "https://cornerstonemedialtd.com/og-logo.png",
      "knowsAbout": ["Social Media Marketing", "Content Marketing", "Content Creation", "Facebook Ads", "Instagram Marketing", "LinkedIn Advertising"]
    },
    {
      "@type": "Person",
      "name": "Mohsin",
      "jobTitle": "SEO Specialist",
      "description": "Technical and strategic SEO specialist helping Birmingham businesses improve search visibility and organic traffic.",
      "worksFor": { "@id": "https://cornerstonemedialtd.com/#organization" },
      "image": "https://cornerstonemedialtd.com/og-logo.png",
      "knowsAbout": ["SEO", "Search Engine Optimisation", "Technical SEO", "Local SEO", "Content Strategy", "Digital Marketing Strategy"]
    },
    {
      "@type": "Person",
      "name": "Abdullah",
      "jobTitle": "Web Developer",
      "description": "Skilled web developer building high-performing websites for Birmingham businesses, focused on conversion optimisation and technical performance.",
      "worksFor": { "@id": "https://cornerstonemedialtd.com/#organization" },
      "image": "https://cornerstonemedialtd.com/og-logo.png",
      "knowsAbout": ["Website Development", "Web Design", "WordPress", "Ecommerce", "Conversion Optimisation", "Technical SEO"]
    }
  ]
};

const teamMembers = [
  {
    name: "Shafiq",
    role: "Paid Media Specialist",
    description: "Shafiq manages paid advertising campaigns across Google Ads and social platforms, turning ad spend into measurable business growth for clients across Birmingham.",
    alt: "Shafiq paid media specialist at Birmingham digital marketing agency",
  },
  {
    name: "Chloe",
    role: "Social Media & Content Specialist",
    description: "Chloe creates engaging content strategies and manages social media campaigns that build brand awareness and drive real engagement for Birmingham businesses.",
    alt: "Chloe social media content creator at Birmingham digital marketing agency",
  },
  {
    name: "Mohsin",
    role: "SEO Specialist",
    description: "Mohsin leads SEO strategy and technical optimisation, helping businesses across Birmingham and the West Midlands climb search rankings and attract organic traffic.",
    alt: "Mohsin SEO expert supporting Birmingham digital marketing campaigns",
  },
  {
    name: "Abdullah",
    role: "Web Developer",
    description: "Abdullah builds fast, conversion-focused websites that turn visitors into customers. From WordPress to custom builds, he ensures every site performs at its best.",
    alt: "Abdullah web developer for Birmingham digital marketing agency",
  },
];

const expertiseCards = [
  {
    icon: Search,
    title: "SEO Strategy & Technical SEO",
    description: "From keyword research and on-page optimisation to technical audits and local SEO, our specialists help Birmingham businesses rank higher in search results.",
    link: "/seo-birmingham",
    linkText: "SEO services",
  },
  {
    icon: MousePointerClick,
    title: "Paid Advertising & PPC Campaigns",
    description: "Strategic Google Ads management and paid media campaigns that generate leads and deliver measurable return on investment.",
    link: "/ppc-birmingham",
    linkText: "PPC management",
  },
  {
    icon: Share2,
    title: "Content Creation & Social Media Marketing",
    description: "Engaging content strategies and social media campaigns across Facebook, Instagram, and LinkedIn that build audiences and drive business growth.",
    link: "/social-media-marketing-birmingham",
    linkText: "social media marketing services",
  },
  {
    icon: Code,
    title: "Website Design & Development",
    description: "High-performing websites built to convert visitors into customers, with SEO best practices baked in from the start.",
    link: "/website-design-birmingham",
    linkText: "website design and development",
  },
];

const crossChannelBenefits = [
  "SEO research helps inform paid advertising campaigns",
  "Paid campaign data reveals high-converting search terms for SEO",
  "Content creation supports both organic search visibility and social media engagement",
  "Website development ensures traffic converts into enquiries and leads",
];

const MeetTheTeam = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Meet the Team | Digital Marketing Specialists Birmingham | Cornerstone Media"
      description="Meet the experienced digital marketing specialists behind Cornerstone Media. Our Birmingham-based team includes SEO, PPC, social media, and web design experts helping businesses grow across the West Midlands."
      canonical="https://cornerstonemedialtd.com/meet-the-team"
      schema={teamSchema}
    />
    <Navbar />

    <main>
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-20 section-padding">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/6 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Our Team</p>
            <h1 className="font-heading text-4xl font-extrabold text-foreground sm:text-5xl lg:text-7xl mb-6">
              Meet the <span className="gradient-text">Team</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              The experienced digital marketing specialists behind Cornerstone Media. Our Birmingham-based team brings together deep expertise across SEO, PPC, social media, and web design to help your business grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-card/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="font-heading text-sm font-semibold text-secondary mb-3">{member.role}</p>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">{member.description}</p>
                <img src="" alt={member.alt} className="sr-only" aria-hidden="true" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Callouts */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">
              Digital Marketing Specialists in Birmingham
            </h2>
            <p className="font-body text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The Cornerstone Media team combines hands-on experience across every major digital marketing channel. From{" "}
              <Link to="/seo-birmingham" className="text-secondary hover:underline">SEO strategy</Link> and technical optimisation to{" "}
              <Link to="/ppc-birmingham" className="text-secondary hover:underline">paid advertising campaigns</Link>,{" "}
              <Link to="/social-media-marketing-birmingham" className="text-secondary hover:underline">social media marketing</Link> and high-performing{" "}
              <Link to="/website-design-birmingham" className="text-secondary hover:underline">website development</Link>, our specialists work together to help businesses grow online.
            </p>
            <p className="font-body text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
              Each member of the team focuses on their area of expertise, ensuring every campaign benefits from deep specialist knowledge rather than a generalist approach.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {expertiseCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-secondary/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                  <card.icon className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{card.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground mb-3">{card.description}</p>
                  <Link to={card.link} className="font-body text-sm font-medium text-secondary hover:underline">
                    Learn about our {card.linkText} →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Signal (E-E-A-T) */}
      <section className="section-padding bg-card/50">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex gap-4 items-start mb-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                  Experience Across Digital Marketing Campaigns
                </h2>
              </div>
            </div>
            <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
              <p>
                The specialists behind Cornerstone Media have worked across a wide range of digital marketing projects, helping businesses improve search visibility, generate leads through{" "}
                <Link to="/ppc-birmingham" className="text-secondary hover:underline">paid campaigns</Link>, grow{" "}
                <Link to="/social-media-marketing-birmingham" className="text-secondary hover:underline">social media audiences</Link> and build{" "}
                <Link to="/website-design-birmingham" className="text-secondary hover:underline">websites designed to convert</Link>.
              </p>
              <p>
                Our team brings together technical expertise, creative thinking and practical experience from real-world campaigns across multiple industries.
              </p>
              <p>
                Rather than relying on theoretical strategies, we focus on practical digital marketing work that produces measurable results.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How Our Team Supports Your Business */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex gap-4 items-start mb-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                  How Our Specialists Work Together
                </h2>
              </div>
            </div>
            <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
              <p>
                Successful digital marketing rarely comes from a single channel.
              </p>
              <p>
                At Cornerstone Media, our team combines expertise across{" "}
                <Link to="/seo-birmingham" className="text-secondary hover:underline">SEO</Link>,{" "}
                <Link to="/ppc-birmingham" className="text-secondary hover:underline">PPC advertising</Link>,{" "}
                <Link to="/social-media-marketing-birmingham" className="text-secondary hover:underline">social media marketing</Link> and{" "}
                <Link to="/website-design-birmingham" className="text-secondary hover:underline">website development</Link> to create joined-up strategies that support real business growth.
              </p>
              <p>For example:</p>
              <ul className="space-y-3 pl-1">
                {crossChannelBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Target className="h-5 w-5 shrink-0 text-secondary mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <p>
                By combining these disciplines, we help businesses across Birmingham and the West Midlands get more value from their digital marketing investment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local SEO Relevance */}
      <section className="section-padding bg-card/50">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex gap-4 items-start mb-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                <MapPin className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                  Supporting Businesses Across Birmingham and the West Midlands
                </h2>
              </div>
            </div>
            <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
              <p>
                Cornerstone Media works with businesses across Birmingham,{" "}
                <Link to="/digital-marketing-solihull" className="text-secondary hover:underline">Solihull</Link>,{" "}
                <Link to="/digital-marketing-sutton-coldfield" className="text-secondary hover:underline">Sutton Coldfield</Link>,{" "}
                <Link to="/digital-marketing-wolverhampton" className="text-secondary hover:underline">Wolverhampton</Link> and the wider West Midlands.
              </p>
              <p>
                Our team understands the challenges local businesses face when trying to compete online, whether that involves improving search visibility, generating leads through{" "}
                <Link to="/ppc-birmingham" className="text-secondary hover:underline">paid advertising</Link>, building a stronger{" "}
                <Link to="/social-media-marketing-birmingham" className="text-secondary hover:underline">social media presence</Link> or launching a new{" "}
                <Link to="/website-design-birmingham" className="text-secondary hover:underline">website</Link>.
              </p>
              <p>
                By combining local knowledge with specialist digital marketing expertise, we help businesses across the region grow their online presence and attract more customers.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Birmingham", "Solihull", "Sutton Coldfield", "Wolverhampton", "Walsall", "Dudley", "West Bromwich"].map((loc) => (
                <span key={loc} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-foreground">
                  <MapPin className="h-3.5 w-3.5 text-secondary" />
                  {loc}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mx-auto max-w-2xl text-center">
          <h2 className="mb-6 font-heading text-3xl font-extrabold text-foreground md:text-5xl">
            Ready to <span className="gradient-text">Work With Us</span>?
          </h2>
          <p className="mb-10 font-body text-lg text-muted-foreground">
            Get in touch with our team of digital marketing specialists for a free strategy consultation. Let's discuss how we can help your Birmingham business grow.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/contact" className="gradient-btn text-base">Book a Free Strategy Call</Link>
            <Link to="/services" className="gradient-btn-outline text-base">View Our Services</Link>
          </div>
        </motion.div>
      </section>
    </main>

    <Footer />
  </div>
);

export default MeetTheTeam;
