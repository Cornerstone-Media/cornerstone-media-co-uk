import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Target, BarChart3, Award, MapPin } from "lucide-react";
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
  { icon: Target, title: "Results-Driven", description: "Every campaign is built around measurable KPIs. We focus on conversions, revenue, and return on investment — not vanity metrics that look good in meetings but don't grow your business. Your growth is our benchmark." },
  { icon: Users, title: "Client-First Partnership", description: "We work as an extension of your team, not an external supplier. Open communication, clear reporting, and genuine investment in your success define every relationship we build." },
  { icon: BarChart3, title: "Data-Led Decisions", description: "Every recommendation we make is backed by real data and analytics. From keyword research and SEO strategy to PPC campaign optimisation, our decisions are based on evidence — never guesswork." },
  { icon: Award, title: "Continuous Improvement", description: "Digital marketing evolves constantly. Search algorithms change. Platforms update. Consumer behaviour shifts. We continuously test, learn, and refine our strategies to stay ahead of the curve and keep your campaigns performing." },
];

const locations = ["Birmingham", "Solihull", "Sutton Coldfield", "Wolverhampton", "Walsall", "Dudley", "West Bromwich"];

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
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              We are a Birmingham-based digital marketing agency helping businesses across the West Midlands grow through strategic, data-driven marketing that delivers real, measurable results.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto italic">
              Or, to put it more honestly… we're a group of experienced agency staff and freelancers who got slightly tired (okay… <strong>very</strong> tired) of being told to hit impossible targets dreamed up by agency directors and business development managers waving around Google Keyword Planner screenshots like they were the Ten Commandments.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-4">
              So we did the logical thing. We left. And Cornerstone Media was born.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-4">
              Think of us as the A-Team of digital marketing — a group of specialists who joined forces to deliver honest advice, real expertise, and results that actually matter, without the inflated agency fees that usually go towards boardroom chairs and BDM commissions.
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
                Cornerstone Media was founded with a simple mission: to provide Birmingham businesses with genuinely effective digital marketing without the inflated agency costs, jargon-heavy presentations, and wildly optimistic forecasts that unfortunately plague the industry.
              </p>
              <p>Between us, we've spent years working inside agencies where the process often looked something like this:</p>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>A business development manager promises the moon.</li>
                <li>The strategy gets built around optimistic keyword estimates.</li>
                <li>The delivery team quietly panics.</li>
                <li>The client receives a beautifully formatted report that says a lot… but somehow doesn't translate into actual business growth.</li>
              </ol>
              <p>Sound familiar?</p>
              <p>We knew there had to be a better way.</p>
              <p>
                So a handful of <Link to="/seo-birmingham" className="text-secondary hover:underline">SEO specialists</Link>, <Link to="/ppc-birmingham" className="text-secondary hover:underline">PPC managers</Link>, <Link to="/social-media-marketing-birmingham" className="text-secondary hover:underline">social media strategists</Link>, content marketers, and <Link to="/website-design-birmingham" className="text-secondary hover:underline">web designers</Link> decided to do things differently. We joined forces as a flexible team of agency professionals and independent specialists who actually deliver the work — not just pitch it.
              </p>
              <p>
                Because we operate as a lean team without layers of management or expensive business development departments, we can focus our time and budget where it actually matters: getting results for our clients.
              </p>
              <p>And yes, it also means we don't have to fund anyone's third "strategy lunch" of the week.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 sm:text-4xl">How We Work</h2>
            <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
              <p>
                At Cornerstone Media, we take an integrated approach to digital marketing. Instead of treating channels as separate silos, we build strategies where <Link to="/seo-birmingham" className="text-secondary hover:underline">SEO</Link>, <Link to="/ppc-birmingham" className="text-secondary hover:underline">PPC</Link>, <Link to="/social-media-marketing-birmingham" className="text-secondary hover:underline">social media marketing</Link>, and <Link to="/website-design-birmingham" className="text-secondary hover:underline">website design</Link> work together to maximise results.
              </p>
              <p>For example:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><Link to="/ppc-birmingham" className="text-secondary hover:underline">Pay-per-click advertising (PPC)</Link> provides real-time keyword data that strengthens your <Link to="/seo-birmingham" className="text-secondary hover:underline">SEO strategy</Link>.</li>
                <li>Content marketing fuels engagement across <Link to="/social-media-marketing-birmingham" className="text-secondary hover:underline">social media marketing</Link> platforms.</li>
                <li><Link to="/website-design-birmingham" className="text-secondary hover:underline">Website design</Link> and optimisation ensure every visitor has the best chance of converting into a customer.</li>
              </ul>
              <p>In other words, everything works together — not in separate spreadsheets owned by different departments.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Discovery First */}
      <section className="section-padding bg-card/50">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 sm:text-4xl">Discovery First (Always)</h2>
            <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
              <p>Every project begins with a proper discovery phase. Before recommending anything, we take time to understand:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Your business model</li>
                <li>Your competitive landscape</li>
                <li>Your target audience</li>
                <li>Your growth goals</li>
              </ul>
              <p>
                Only then do we recommend a strategy. This research-first approach ensures your marketing budget is invested in the channels most likely to generate real ROI — not just the ones that look impressive in a proposal document.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 sm:text-4xl">Transparency (No Smoke and Mirrors)</h2>
            <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
              <p>Transparency is non-negotiable for us.</p>
              <p>You'll receive detailed monthly reports that go beyond vanity metrics like impressions and "potential reach". Instead, we focus on what actually matters:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Leads generated</li>
                <li>Sales and enquiries</li>
                <li>Conversion rates</li>
                <li>Return on investment</li>
              </ul>
              <p>You'll see exactly what we're doing, why we're doing it, and how it impacts your business.</p>
              <p>No smoke. No mirrors. And definitely no 45-page reports designed purely to look busy.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* No Long Contracts */}
      <section className="section-padding bg-card/50">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 sm:text-4xl">No Long Contracts. Just Results.</h2>
            <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
              <p>We believe marketing agencies should earn your business every month, not trap you in long contracts.</p>
              <p>Our clients stay with us because our work produces real growth, not because they're locked into a 12-month agreement signed during an enthusiastic sales pitch.</p>
              <p>That accountability keeps us focused, motivated, and constantly improving the results we deliver.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">Our Values</h2>
            <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do — from strategy to client relationships.
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

      {/* Proudly Based in Birmingham */}
      <section className="section-padding bg-card/50">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 sm:text-4xl">Proudly Based in Birmingham</h2>
            <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
              <p>
                We chose to build Cornerstone Media in Birmingham because we believe strongly in the potential of this city and its thriving business community. From the fast-growing tech scene in Digbeth to the established firms around Colmore Row, the city is full of businesses doing exciting things.
              </p>
              <p>
                As a digital marketing agency Birmingham businesses can rely on, we understand the local market, the competition, and the challenges companies face when trying to grow online.
              </p>
              <div className="flex flex-wrap gap-2 my-4">
                {locations.map((loc) => (
                  <span key={loc} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-foreground">
                    <MapPin className="h-3.5 w-3.5 text-secondary" />
                    {loc}
                  </span>
                ))}
              </div>
              <p>
                We serve businesses across the entire West Midlands region, including <Link to="/digital-marketing-solihull" className="text-secondary hover:underline">Solihull</Link>, <Link to="/digital-marketing-sutton-coldfield" className="text-secondary hover:underline">Sutton Coldfield</Link>, <Link to="/digital-marketing-wolverhampton" className="text-secondary hover:underline">Wolverhampton</Link>, <Link to="/digital-marketing-walsall" className="text-secondary hover:underline">Walsall</Link>, <Link to="/digital-marketing-dudley" className="text-secondary hover:underline">Dudley</Link>, and <Link to="/digital-marketing-west-bromwich" className="text-secondary hover:underline">West Bromwich</Link>. From sole traders launching their first website to established companies scaling their digital presence, we tailor our approach to match each client's goals, budget, and stage of growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* A Birmingham Agency That Delivers */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 sm:text-4xl">A Birmingham Digital Marketing Agency That Actually Delivers</h2>
            <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
              <p>
                Cornerstone Media combines local knowledge of Birmingham and the West Midlands with the experience of specialists who have spent years working across <Link to="/seo-birmingham" className="text-secondary hover:underline">SEO</Link>, <Link to="/ppc-birmingham" className="text-secondary hover:underline">PPC</Link>, <Link to="/social-media-marketing-birmingham" className="text-secondary hover:underline">social media marketing</Link>, and <Link to="/website-design-birmingham" className="text-secondary hover:underline">website design</Link>.
              </p>
              <p>We're not a huge corporate agency with layers of management.</p>
              <p>We're a tight-knit team of digital marketing professionals who care about doing the job properly.</p>
              <p>And occasionally having a laugh along the way.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden bg-card/50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mx-auto max-w-2xl text-center">
          <h2 className="mb-6 font-heading text-3xl font-extrabold text-foreground md:text-5xl">
            Let's <span className="gradient-text">Talk</span>
          </h2>
          <p className="mb-10 font-body text-lg text-muted-foreground">
            If you're looking for a digital marketing agency in Birmingham that offers honest advice, experienced specialists, and transparent results, we'd love to help. Get in touch for a free strategy consultation and discover how Cornerstone Media can help your Birmingham business grow.
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
