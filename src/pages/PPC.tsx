import { MousePointerClick, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ppcServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "PPC Advertising & Google Ads Management",
  "name": "PPC Agency Birmingham",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Cornerstone Media",
    "url": "https://cornerstone-media.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Birmingham",
      "addressRegion": "West Midlands",
      "addressCountry": "GB"
    }
  },
  "areaServed": [
    { "@type": "City", "name": "Birmingham" },
    { "@type": "AdministrativeArea", "name": "West Midlands" }
  ],
  "description": "PPC agency in Birmingham managing Google Ads, Microsoft Ads and paid search campaigns for measurable ROI."
};

const ppcLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://cornerstone-media.co.uk/ppc-birmingham#business",
  "name": "Cornerstone Media — PPC Agency Birmingham",
  "url": "https://cornerstone-media.co.uk/ppc-birmingham",
  "telephone": "+447846798534",
  "email": "info@cornerstone-media.co.uk",
  "priceRange": "££",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Birmingham",
    "addressRegion": "West Midlands",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.4862,
    "longitude": -1.8904
  },
  "areaServed": [
    { "@type": "City", "name": "Birmingham" },
    { "@type": "AdministrativeArea", "name": "West Midlands" }
  ],
  "serviceType": ["PPC Management", "Google Ads", "Paid Search", "Remarketing"]
};

const ppcFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How much does PPC management cost in Birmingham?", "acceptedAnswer": { "@type": "Answer", "text": "Most Birmingham businesses invest between £500 and £2,000 per month in PPC management fees, on top of their ad spend. Cornerstone Media offers transparent monthly retainers tailored to your budget and goals — there are no hidden fees and no long-term contracts." } },
    { "@type": "Question", "name": "How long until PPC delivers results in Birmingham?", "acceptedAnswer": { "@type": "Answer", "text": "Google Ads campaigns can drive clicks and leads from day one. We typically see meaningful optimisation gains within 2-4 weeks as bidding, ad copy and audience data mature. Most Birmingham clients reach a stable, profitable cost-per-acquisition within 60-90 days." } },
    { "@type": "Question", "name": "Do you require long-term contracts?", "acceptedAnswer": { "@type": "Answer", "text": "No. We work on rolling 30-day agreements. Our Birmingham clients stay because the results justify it, not because they are locked in." } },
    { "@type": "Question", "name": "Do you manage Google Ads and Microsoft Ads?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We manage paid search across Google Ads (Search, Shopping, Display, YouTube), Microsoft Advertising (Bing), and paid social on Facebook, Instagram and LinkedIn." } },
    { "@type": "Question", "name": "Will I own my Google Ads account?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — always. We build PPC campaigns inside your own Google Ads account so you retain full ownership of historical data, conversion tracking and audience lists if you ever decide to move on." } },
    { "@type": "Question", "name": "What industries do you serve with PPC in Birmingham?", "acceptedAnswer": { "@type": "Answer", "text": "We run paid search campaigns for Birmingham businesses across professional services, e-commerce, healthcare, construction, trades, hospitality, education and B2B technology." } }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cornerstone-media.co.uk/" },
    { "@type": "ListItem", "position": 2, "name": "PPC Birmingham", "item": "https://cornerstone-media.co.uk/ppc-birmingham" }
  ]
};

const PPC = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="PPC Agency Birmingham | Google Ads Management | Cornerstone Media"
      description="Birmingham PPC agency delivering profitable Google Ads campaigns. Transparent pricing, no long contracts, local experts. Book a free PPC audit today."
      canonical="https://cornerstone-media.co.uk/ppc-birmingham"
      schema={[ppcServiceSchema, ppcLocalBusinessSchema, ppcFAQSchema, breadcrumbSchema]}
    />
    <Navbar />
    <main>
      {/* Visible breadcrumb */}
      <div className="pt-36 pb-2">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>PPC Birmingham</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Negative top padding to absorb the layout's own pt-36 since we already added one */}
      <div className="-mt-36">
        <ServicePageLayout
          icon={MousePointerClick}
          title="PPC Agency in Birmingham"
          subtitle="Pay-Per-Click Advertising"
          description="Cornerstone Media is a specialist PPC agency in Birmingham helping local businesses generate high-quality leads and sales through expertly managed Google Ads campaigns. We combine data-driven bidding strategies with compelling ad creative to make sure every pound of your paid search Birmingham budget works harder."
          benefits={[
            "Certified Google Ads specialists with deep experience managing campaigns for Birmingham businesses across multiple industries",
            "Advanced conversion tracking setup including offline conversion imports so you know exactly which clicks become paying customers",
            "Granular keyword research focused on commercial intent terms that Birmingham customers actually search for",
            "Negative keyword management that eliminates wasted spend on irrelevant searches and low-quality traffic",
            "Dynamic ad copy testing with systematic A/B experiments across headlines, descriptions and extensions",
            "Competitor analysis and auction insights to identify gaps and opportunities in the Birmingham PPC landscape",
            "Remarketing campaigns that re-engage previous visitors and nurture them through the buying journey",
            "Transparent monthly reporting with clear metrics on spend, conversions, cost per acquisition and return on ad spend",
          ]}
          detailedSections={[
            {
              heading: "Google Ads Management for Birmingham Businesses",
              paragraphs: [
                "Google Ads is the single most powerful customer-acquisition channel for most Birmingham businesses. Done well, paid search puts your business at the top of Google for the exact moments your future customers are ready to buy. Done badly, it quietly drains thousands of pounds a month into clicks that never convert. As a specialist PPC agency Birmingham businesses trust, our job is to make sure your account sits firmly in the first camp.",
                "Every Google Ads account we manage is built around your commercial reality — average order value, profit margin, customer lifetime value and the geographies you can realistically serve. Those numbers shape bid strategy, keyword selection, ad copy and landing page choice. The result is a Google Ads agency Birmingham relationship that is measured in revenue, not impressions.",
                "We are platform-agnostic and use Search, Performance Max, Shopping, Display, YouTube and Demand Gen wherever they earn their place. Most accounts start with high-intent Search and Shopping, then expand into remarketing and brand defence once the data justifies it.",
              ],
            },
            {
              heading: "Paid Search Strategy & Landing Page Optimisation",
              paragraphs: [
                "Clicks are only the first half of the equation. A great paid search Birmingham campaign sends the right person to the right page with the right message — and then makes it effortless for them to enquire or buy. We audit and rebuild landing pages alongside the ads, focusing on page speed, mobile usability, clear value propositions, social proof and frictionless contact forms.",
                "Quality Score is the lever that quietly controls how much you pay per click. We optimise relentlessly across keyword-to-ad-to-landing-page relevance, expected click-through rate and landing page experience to push Quality Scores up and cost-per-clicks down — often by 30-50% within the first quarter.",
              ],
            },
            {
              heading: "Pricing & Transparency",
              paragraphs: [
                "Our PPC management fees are simple: a flat monthly retainer based on the complexity of your account, with absolutely no markup on your ad spend. You see exactly what Google charges, exactly what we charge, and exactly what each lead or sale costs. There are no setup fees hidden in the small print and no long-term contracts.",
                "Most Birmingham PPC clients invest between £500 and £2,000 per month in management fees on top of ad spend. We will tell you honestly during the free PPC audit whether your budget is realistic for the keywords and competition in your sector — and if it is not, we will tell you that too.",
              ],
            },
          ]}
          topics={[
            { title: "Google Search Ads", description: "High-intent text ads at the top of Google for the searches Birmingham customers make when they are ready to buy. Built around commercial-intent keywords, not vanity traffic." },
            { title: "Google Shopping Campaigns", description: "Product listing ads with images, prices and reviews — ideal for Birmingham e-commerce businesses wanting to drive online and in-store sales." },
            { title: "Display & Remarketing", description: "Visual banner ads across the Google Display Network and remarketing campaigns that bring previous visitors back to convert." },
            { title: "Landing Page Optimisation", description: "Conversion-focused landing pages built specifically for paid traffic. We test headlines, forms, CTAs and layouts continuously to lift conversion rates." },
            { title: "Conversion Tracking & Analytics", description: "Full GA4, Google Tag Manager and offline conversion imports so you can attribute revenue back to the exact keyword that earned it." },
            { title: "Microsoft Advertising (Bing Ads)", description: "Extend reach onto Microsoft's search network — often cheaper clicks and strong B2B conversion for Birmingham businesses." },
          ]}
          whyBirmingham={{
            heading: "Who We Work With — Birmingham & West Midlands Businesses",
            paragraphs: [
              "We run paid search campaigns for businesses based across Birmingham city centre, Solihull, Edgbaston, Digbeth, the Jewellery Quarter, Sutton Coldfield, Moseley, Harborne and the wider West Midlands. From single-location service businesses to multi-branch retailers, the common thread is owners who care about every pound they spend.",
              "Our typical clients are SMEs spending £1,000 to £20,000 per month on Google Ads who want a hands-on, accountable partner rather than a faceless national agency. You will know who is managing your account, you can pick up the phone, and you can meet in person when it helps.",
              "We deliberately keep our roster small. That means real senior attention on every account — not handed off to a junior the moment the contract is signed.",
            ],
          }}
          processSteps={[
            { title: "Free PPC Audit", description: "We analyse your existing campaigns (or competitor data if you are new to paid search), identify the biggest wins and quote a flat monthly fee." },
            { title: "Strategy & Build", description: "Detailed campaign structure with keyword mapping, audience targeting, conversion tracking and bespoke ad copy for your Birmingham market." },
            { title: "Launch & Monitor", description: "Daily bid management and active monitoring in the first 30 days while early data shapes the optimisation roadmap." },
            { title: "Optimise & Scale", description: "Ongoing testing of keywords, audiences, bids, ad copy and landing pages to compound ROAS month over month." },
          ]}
          toolsAndPlatforms={{
            heading: "Platforms & Tools We Use",
            tools: ["Google Ads", "Google Analytics 4", "Google Tag Manager", "Google Merchant Center", "Microsoft Advertising", "SEMrush", "SpyFu", "Unbounce", "Google Looker Studio", "Hotjar", "CallRail"],
          }}
          caseStudies={[
            { title: "Birmingham Legal Firm", result: "340% ROAS", description: "Restructured Google Ads account for a Birmingham solicitors firm, reducing cost per lead by 52% while increasing qualified enquiries by 180% within three months." },
            { title: "West Midlands E-commerce", result: "£45K Monthly Revenue", description: "Built and scaled Google Shopping campaigns for a Birmingham-based retailer, growing monthly revenue from £12K to £45K at 5.2x ROAS." },
            { title: "B2B Services Company", result: "67% Lower CPA", description: "Implemented offline conversion imports for a Birmingham B2B firm, enabling smart bidding that cut cost per acquisition by 67%." },
          ]}
          faqs={[
            { question: "How much does PPC management cost in Birmingham?", answer: "Most Birmingham businesses invest between £500 and £2,000 per month in PPC management fees, on top of ad spend. We work on flat monthly retainers with no markup on Google or Microsoft ad spend, no setup fees and no long-term contracts." },
            { question: "How long until PPC delivers results?", answer: "Paid search can drive clicks and leads from day one. Meaningful optimisation gains typically arrive within 2-4 weeks, and most Birmingham clients reach a stable, profitable cost-per-acquisition within 60-90 days." },
            { question: "Do you require long-term contracts?", answer: "No. We work on rolling 30-day agreements. Our clients stay because the numbers stack up, not because of contractual lock-in." },
            { question: "Do you manage Google Ads and Microsoft Ads?", answer: "Yes. We manage Google Ads (Search, Shopping, Performance Max, Display, YouTube), Microsoft Advertising (Bing) and paid social on Facebook, Instagram and LinkedIn." },
            { question: "Will I own my Google Ads account?", answer: "Always. We build campaigns inside your own Google Ads account, so historical data, conversion setup and audience lists remain yours if you ever move on." },
            { question: "What industries do you work with in Birmingham?", answer: "We work with professional services (legal, accounting, financial), e-commerce, healthcare, construction, trades, hospitality, education and B2B technology businesses across Birmingham and the wider West Midlands." },
          ]}
          relatedServices={[
            { name: "SEO Birmingham", path: "/seo-birmingham", description: "Complement paid search with long-term organic visibility from our SEO Birmingham team." },
            { name: "Social Media Marketing Birmingham", path: "/social-media-marketing-birmingham", description: "Extend beyond search with targeted Facebook, Instagram and LinkedIn campaigns." },
            { name: "Website Design Birmingham", path: "/website-design-birmingham", description: "Conversion-optimised websites that make sure your PPC traffic actually turns into leads." },
            { name: "Google Ads Management Birmingham", path: "/google-ads-management-birmingham", description: "Specialist Google Ads management with advanced bidding strategies and conversion tracking." },
            { name: "PPC Management Birmingham", path: "/ppc-management-birmingham", description: "Full-service PPC management across Google, Bing and paid social platforms." },
            { name: "Remarketing Ads Birmingham", path: "/remarketing-ads-birmingham", description: "Re-engage previous website visitors with targeted remarketing campaigns." },
          ]}
        />
      </div>

      {/* Inline CTA */}
      <section className="section-padding relative overflow-hidden bg-card">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="relative mx-auto max-w-3xl text-center px-6">
          <h2 className="mb-6 font-heading text-3xl font-extrabold text-foreground md:text-5xl">
            Book a <span className="gradient-text">Free PPC Audit</span>
          </h2>
          <p className="mb-10 font-body text-lg text-muted-foreground">
            A senior PPC specialist will review your Google Ads account (or your competitors' if you don't have one yet) and show you exactly where the biggest wins are. No obligation, no pressure, no sales pitch.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/contact" className="gradient-btn text-base">
              Book a Free PPC Audit
            </Link>
            <a href="tel:+447846798534" className="gradient-btn-outline text-base inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> 07846 798 534
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default PPC;
