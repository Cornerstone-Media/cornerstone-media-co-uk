import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Target, BarChart3, Award, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "name": "Cornerstone Media",
  "description": "Birmingham-based digital marketing agency specialising in SEO, PPC, social media marketing, and website design for businesses across the West Midlands.",
  "url": "https://cornerstonemedialtd.com/about",
  "telephone": "+447846798534",
  "email": "info@cornerstonemedialtd.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Birmingham",
    "addressRegion": "West Midlands",
    "addressCountry": "GB"
  },
  "areaServed": [
    { "@type": "City", "name": "Birmingham" },
    { "@type": "AdministrativeArea", "name": "West Midlands" }
  ],
  "knowsAbout": ["PPC Advertising", "SEO", "Social Media Marketing", "Website Design", "Content Writing", "Website Maintenance"],
  "priceRange": "££"
};

const values = [
  { icon: Target, title: "Results-Driven", description: "Every strategy we create is built around measurable KPIs. We focus on conversions, revenue, and ROI — not vanity metrics. Your growth is our benchmark." },
  { icon: Users, title: "Client-First Partnership", description: "We work as an extension of your team. Open communication, transparent reporting, and genuine care about your business success define every client relationship." },
  { icon: BarChart3, title: "Data-Led Decisions", description: "We base every recommendation on real data and analytics. From keyword research to campaign optimisation, evidence drives our strategy — never guesswork." },
  { icon: Award, title: "Continuous Improvement", description: "Digital marketing never stands still, and neither do we. We constantly test, learn, and refine our approaches to stay ahead of industry changes and algorithm updates." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="About Cornerstone Media | Digital Marketing Agency Birmingham"
      description="Learn about Cornerstone Media, Birmingham's trusted digital marketing agency. We deliver expert SEO, PPC, social media, and web design services to businesses across the West Midlands."
      canonical="https://cornerstonemedialtd.com/about"
      schema={aboutSchema}
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
            <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-secondary">About Us</p>
            <h1 className="font-heading text-4xl font-extrabold text-foreground sm:text-5xl lg:text-7xl mb-6">
              About <span className="gradient-text">Cornerstone Media</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We are a Birmingham-based digital marketing agency helping businesses across the West Midlands grow through strategic, data-driven marketing that delivers real, measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-card/50">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 sm:text-4xl">Our Story</h2>
            <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
              <p>
                Cornerstone Media was founded with a clear mission: to provide Birmingham businesses with genuinely effective digital marketing without the inflated agency fees and jargon that plague the industry. We saw too many local businesses struggling with marketing agencies that delivered impressive-sounding reports but no tangible business growth.
              </p>
              <p>
                From our roots in Birmingham, we have built a team of specialists covering every discipline of digital marketing — from <Link to="/seo-birmingham" className="text-secondary hover:underline">search engine optimisation</Link> and <Link to="/ppc-birmingham" className="text-secondary hover:underline">pay-per-click advertising</Link> to <Link to="/social-media-marketing-birmingham" className="text-secondary hover:underline">social media marketing</Link> and <Link to="/website-design-birmingham" className="text-secondary hover:underline">website design</Link>. Each team member brings deep expertise in their area, combined with a shared commitment to transparency and results.
              </p>
              <p>
                We chose to base ourselves in Birmingham because we believe passionately in the potential of this city and its business community. Birmingham is experiencing a period of extraordinary growth and investment, and we want to help local businesses capitalise on the opportunities that come with being part of one of Europe's most dynamic cities. Our local presence means we understand the market, the competition, and the unique challenges that Birmingham businesses face.
              </p>
              <p>
                Today, we work with businesses of all sizes across Birmingham, Solihull, Sutton Coldfield, Wolverhampton, and the wider West Midlands region. From sole traders launching their first website to established companies scaling their digital presence, we tailor our approach to match each client's specific needs, goals, and budget.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 sm:text-4xl">How We Work</h2>
            <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
              <p>
                At Cornerstone Media, we take an integrated approach to digital marketing. Rather than treating each channel in isolation, we build unified strategies where <Link to="/seo-birmingham" className="text-secondary hover:underline">SEO</Link>, <Link to="/ppc-birmingham" className="text-secondary hover:underline">PPC</Link>, <Link to="/social-media-marketing-birmingham" className="text-secondary hover:underline">social media</Link>, and <Link to="/website-design-birmingham" className="text-secondary hover:underline">web design</Link> work together to amplify results. The keyword data from your PPC campaigns informs your SEO strategy. Your content marketing fuels social media engagement. Your website design maximises conversion from every traffic source.
              </p>
              <p>
                Every engagement begins with a thorough discovery phase. We take time to understand your business model, competitive landscape, target audience, and growth ambitions before recommending any strategy. This research-first approach ensures we invest your marketing budget in the channels and tactics that will generate the strongest return.
              </p>
              <p>
                Transparency is non-negotiable. We provide detailed monthly reports that go beyond surface-level metrics. You will see exactly how your campaigns are performing, what we are doing to improve them, and how our work is contributing to your bottom line. No smoke and mirrors — just clear data and honest analysis.
              </p>
              <p>
                We believe in earning your business every month through results, not locking you into long-term contracts. Our clients stay with us because our work delivers genuine growth, not because of contractual obligation. That accountability keeps us focused, motivated, and consistently delivering the quality of work your Birmingham business deserves.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-card/50">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">Our Values</h2>
            <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do — from how we build strategies to how we communicate with our clients.
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((item, i) => (
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

      {/* Birmingham Focus */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 sm:text-4xl">Proudly Based in Birmingham</h2>
            <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
              <p>
                Birmingham is more than just our office location — it is the heart of our business. We are deeply connected to the city's thriving business community, from the tech startups emerging in Digbeth to the established firms along Colmore Row. Our understanding of Birmingham's diverse economy, its neighbourhoods, and its people gives us a competitive advantage that remote agencies cannot replicate.
              </p>
              <p>
                We serve businesses across the entire West Midlands region, including <Link to="/digital-marketing-solihull" className="text-secondary hover:underline">Solihull</Link>, <Link to="/digital-marketing-sutton-coldfield" className="text-secondary hover:underline">Sutton Coldfield</Link>, <Link to="/digital-marketing-wolverhampton" className="text-secondary hover:underline">Wolverhampton</Link>, <Link to="/digital-marketing-walsall" className="text-secondary hover:underline">Walsall</Link>, <Link to="/digital-marketing-dudley" className="text-secondary hover:underline">Dudley</Link>, and <Link to="/digital-marketing-west-bromwich" className="text-secondary hover:underline">West Bromwich</Link>. Whether your customers are local, national, or international, our Birmingham-based team combines local knowledge with digital expertise to help your business reach its full potential.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden bg-card/50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mx-auto max-w-2xl text-center">
          <h2 className="mb-6 font-heading text-3xl font-extrabold text-foreground md:text-5xl">
            Ready to Work <span className="gradient-text">Together?</span>
          </h2>
          <p className="mb-10 font-body text-lg text-muted-foreground">
            Get in touch for a free strategy consultation and discover how Cornerstone Media can help your Birmingham business grow.
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

export default About;
