import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search, MousePointerClick, Share2, Code, Users, Shield, Eye, Zap,
  BarChart3, Target, Layers, TrendingUp, ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

import shafiqImg from "@/assets/team-shafiq.jpg";
import chloeImg from "@/assets/team-chloe.jpg";
import mohsinImg from "@/assets/team-mohsin.jpg";
import abdullahImg from "@/assets/team-abdullah.jpg";

/* ------------------------------------------------------------------ */
/*  JSON-LD Schema                                                     */
/* ------------------------------------------------------------------ */
const teamSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://cornerstone-media.co.uk/#organization",
      name: "Cornerstone Media",
      url: "https://cornerstone-media.co.uk",
      logo: "https://cornerstone-media.co.uk/og-logo.png",
      description:
        "Birmingham-based digital marketing agency specialising in SEO, PPC, social media marketing, and website design for businesses across the West Midlands.",
      areaServed: [
        { "@type": "City", name: "Birmingham" },
        { "@type": "AdministrativeArea", name: "West Midlands" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Birmingham",
        addressRegion: "West Midlands",
        addressCountry: "GB",
      },
    },
    ...[
      {
        name: "Shafiq",
        jobTitle: "Paid Media Director",
        description:
          "Experienced paid media director managing Google Ads, PPC and paid social campaigns for businesses across Birmingham and the West Midlands.",
        knowsAbout: [
          "Google Ads", "PPC Advertising", "Paid Social", "Search Engine Marketing",
          "Remarketing", "Performance Marketing", "Digital Marketing Strategy",
        ],
      },
      {
        name: "Chloe",
        jobTitle: "Content Creator & Organic Social Lead",
        description:
          "Creative content specialist and organic social media lead helping Birmingham businesses build engaged audiences across social platforms.",
        knowsAbout: [
          "Content Creation", "Organic Social Media", "Social Media Marketing",
          "Brand Content", "Content Strategy", "Instagram Marketing", "Facebook Marketing",
        ],
      },
      {
        name: "Mohsin",
        jobTitle: "Head of SEO",
        description:
          "Technical and strategic SEO specialist leading a team of SEO experts, helping businesses improve search visibility and organic traffic.",
        knowsAbout: [
          "SEO", "Search Engine Optimisation", "Technical SEO", "Local SEO",
          "Keyword Research", "On-Page SEO", "Content Optimisation", "Link Development",
        ],
      },
      {
        name: "Abdullah",
        jobTitle: "Head of Web Development",
        description:
          "Skilled web developer building high-performing, conversion-focused websites for businesses across Birmingham and beyond.",
        knowsAbout: [
          "Website Development", "Web Design", "WordPress", "Ecommerce",
          "Conversion Optimisation", "Website Performance", "Technical SEO",
        ],
      },
    ].map((p) => ({
      "@type": "Person",
      ...p,
      worksFor: { "@id": "https://cornerstone-media.co.uk/#organization" },
      image: "https://cornerstone-media.co.uk/og-logo.png",
    })),
  ],
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const trustItems = [
  { icon: Users, text: "Specialists across SEO, PPC, social media and websites" },
  { icon: Zap, text: "Lean team structure with real experts doing the work" },
  { icon: Eye, text: "Transparent reporting and honest advice" },
  { icon: Shield, text: "UK strategy with international delivery support" },
];

const teamMembers = [
  {
    name: "Shafiq",
    nickname: "The Geek",
    role: "Paid Media Director",
    image: shafiqImg,
    alt: "Shafiq paid media specialist at Birmingham digital marketing agency",
    bio: [
      "Shafiq manages everything paid at Cornerstone Media, from Google Ads and search campaigns to paid social advertising across major platforms.",
      'Nicknamed "The Geek", he is constantly researching platform updates, campaign tactics and new advertising features.',
      "If there is a new experiment to run or a campaign to optimise, Shafiq is already halfway through testing it.",
      "The only downside is when he finds something interesting, the rest of the team usually hears about it… often on a Sunday.",
    ],
    tags: ["Google Ads", "Paid Social", "PPC Strategy", "Performance Marketing"],
  },
  {
    name: "Chloe",
    nickname: "The Pocket Rocket",
    role: "Content Creator & Organic Social Lead",
    image: chloeImg,
    alt: "Chloe content creator and social media specialist at Birmingham digital marketing agency",
    bio: [
      "Chloe leads on content creation and organic social media, helping brands show up consistently and creatively across their channels.",
      'Nicknamed "The Pocket Rocket", she approaches projects with serious speed and energy.',
      "From planning content calendars to producing social media campaigns, Chloe keeps brands active, visible and engaging online.",
      "Small in stature, big in momentum.",
    ],
    tags: ["Content Creation", "Organic Social", "Social Strategy", "Brand Content"],
  },
  {
    name: "Mohsin",
    nickname: "The Ninja",
    role: "Head of SEO",
    image: mohsinImg,
    alt: "Mohsin SEO expert at Birmingham digital marketing agency",
    bio: [
      'Mohsin is our SEO expert, known internally as "The Ninja" because many high-end clients benefit from his work without ever actually seeing him.',
      "Based in Lahore, Pakistan, he leads a team of SEO specialists covering technical SEO, keyword research, content optimisation and link development.",
      "While the UK team might present the results, Mohsin and his team are quietly making sure rankings climb behind the scenes.",
    ],
    tags: ["Technical SEO", "Keyword Research", "SEO Strategy", "On-Page SEO"],
  },
  {
    name: "Abdullah",
    nickname: "The Machine",
    role: "Head of Web Development",
    image: abdullahImg,
    alt: "Abdullah web developer at Birmingham digital marketing agency",
    bio: [
      "Abdullah runs website development at Cornerstone Media.",
      'Nicknamed "The Machine", he has been building websites since he was 15.',
      "Now only 24, he already has years of real-world development experience creating fast, technically solid websites designed to convert.",
      "Based in Islamabad, Pakistan, Abdullah makes sure the websites actually work beautifully once everyone else has finished talking about them.",
    ],
    tags: ["Web Development", "Website Performance", "Technical Fixes", "Conversion Optimisation"],
  },
];

const structureItems = [
  {
    icon: Layers,
    title: "Lean by Design",
    text: "We operate without layers of unnecessary management, which means clients get direct access to the people doing the work.",
  },
  {
    icon: Users,
    title: "Direct Access to Specialists",
    text: "The people planning the strategy are the same people implementing it.",
  },
  {
    icon: BarChart3,
    title: "Better Value for Clients",
    text: "Without inflated agency overheads, more of your budget goes into actual marketing work.",
  },
  {
    icon: Target,
    title: "Integrated Expertise",
    text: "SEO, PPC, social media marketing and website development all work together.",
  },
];

const expertiseAreas = [
  "SEO strategy and technical audits",
  "Google Ads and paid social campaigns",
  "Content strategy and social media growth",
  "Website design and development",
  "Conversion optimisation",
  "Performance analytics and reporting",
];

const serviceLinks = [
  { icon: Search, label: "SEO Services", path: "/seo-birmingham" },
  { icon: MousePointerClick, label: "PPC Management", path: "/ppc-birmingham" },
  { icon: Share2, label: "Social Media Marketing", path: "/social-media-marketing-birmingham" },
  { icon: Code, label: "Website Design", path: "/website-design-birmingham" },
  { icon: ArrowRight, label: "Contact Us", path: "/contact" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
const MeetTheTeam = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Meet the Team | Digital Marketing Specialists Birmingham | Cornerstone Media"
      description="Meet the experienced digital marketing specialists behind Cornerstone Media. Our Birmingham-based team includes SEO, PPC, social media, and web design experts helping businesses grow across the West Midlands."
      canonical="https://cornerstone-media.co.uk/meet-the-team"
      schema={teamSchema}
    />
    <Navbar />

    <main>
      {/* ============================================================ */}
      {/* SECTION 1 — HERO                                              */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden pt-40 pb-20 section-padding">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/6 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Our Team
            </p>
            <h1 className="font-heading text-4xl font-extrabold text-foreground sm:text-5xl lg:text-7xl mb-6">
              Meet the Team Behind{" "}
              <span className="gradient-text">Cornerstone Media</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              Cornerstone Media is a Birmingham-based digital marketing agency built around a lean team of specialists
              in paid media, SEO, social media marketing, content creation, and website development.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              Instead of a traditional agency structure full of account managers and sales layers, we keep things
              simple — real specialists doing the work that actually drives results.
            </p>
            <p className="font-body text-sm text-muted-foreground italic max-w-xl mx-auto mb-10">
              No bloated agency structure. No mystery account handling. Just a team that genuinely knows digital marketing.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/contact" className="gradient-btn text-base">
                Book a Free Strategy Consultation
              </Link>
              <Link to="/services" className="gradient-btn-outline text-base">
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2 — TRUST BAR                                         */}
      {/* ============================================================ */}
      <section className="section-padding bg-card/50">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl font-bold text-foreground text-center mb-10 sm:text-3xl"
          >
            Why Clients Work With Us
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                  <item.icon className="h-5 w-5 text-secondary" />
                </div>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3 — TEAM GRID                                         */}
      {/* ============================================================ */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">
              The Specialists Behind the Strategy
            </h2>
            <p className="font-body text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cornerstone Media combines Birmingham agency expertise with specialist support across the UK and
              internationally, giving clients access to a focused team of experts across every major digital
              marketing channel.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/5 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.alt}
                    width={800}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-0.5">
                    {member.name}{" "}
                    <span className="text-secondary font-medium text-base">"{member.nickname}"</span>
                  </h3>
                  <p className="font-heading text-sm font-semibold text-secondary mb-4">{member.role}</p>

                  <div className="space-y-2 mb-5">
                    {member.bio.map((line, j) => (
                      <p key={j} className="font-body text-sm leading-relaxed text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-muted/40 px-2.5 py-0.5 font-body text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4 — WHY OUR TEAM STRUCTURE WORKS                      */}
      {/* ============================================================ */}
      <section className="section-padding bg-card/50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Why Our Team Structure Works
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {structureItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                  <item.icon className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5 — EXPERIENCE & EXPERTISE                            */}
      {/* ============================================================ */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex gap-4 items-start mb-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Built on Real Digital Marketing Experience
              </h2>
            </div>
            <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
              <p>
                The team behind Cornerstone Media has worked across agency environments, client campaigns and real
                digital marketing projects for years.
              </p>
              <p>
                Cornerstone Media was created to offer a more transparent and results-focused alternative to
                traditional agency models.
              </p>
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground pt-2">
                Expertise areas
              </p>
              <ul className="space-y-2 pl-1">
                {expertiseAreas.map((area) => (
                  <li key={area} className="flex items-start gap-3">
                    <Target className="h-5 w-5 shrink-0 text-secondary mt-0.5" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6 — SERVICE LINKS                                     */}
      {/* ============================================================ */}
      <section className="section-padding bg-card/50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Explore Our Digital Marketing Services
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {serviceLinks.map((svc, i) => (
              <motion.div
                key={svc.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={svc.path}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/5 hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                    <svc.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <span className="font-heading text-sm font-bold text-foreground">{svc.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* BANNER LINE                                                   */}
      {/* ============================================================ */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-secondary/20 bg-secondary/5 px-8 py-6 text-center"
          >
            <p className="font-heading text-lg font-bold text-foreground sm:text-xl">
              Real people. Real specialists.{" "}
              <span className="gradient-text">No bloated agency nonsense.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7 — FINAL CTA                                         */}
      {/* ============================================================ */}
      <section className="section-padding relative overflow-hidden bg-card/50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-6 font-heading text-3xl font-extrabold text-foreground md:text-5xl">
            Want to Work With a Team That{" "}
            <span className="gradient-text">Actually Knows the Work</span>?
          </h2>
          <p className="mb-10 font-body text-lg text-muted-foreground">
            If you're looking for a digital marketing agency in Birmingham that combines specialist expertise,
            honest advice and a hands-on way of working, Cornerstone Media would love to help.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/contact" className="gradient-btn text-base">
              Book a Free Strategy Consultation
            </Link>
            <Link to="/contact" className="gradient-btn-outline text-base">
              Contact the Team
            </Link>
          </div>
        </motion.div>
      </section>
    </main>

    <Footer />
  </div>
);

export default MeetTheTeam;
