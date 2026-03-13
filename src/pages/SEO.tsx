import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const seoServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Search Engine Optimisation",
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
  "areaServed": {
    "@type": "City",
    "name": "Birmingham"
  },
  "description": "Professional SEO services for Birmingham businesses. Technical SEO, content strategy, local SEO, and link building to drive organic traffic and rankings."
};

const seoFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does SEO take to work in Birmingham?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO is a long-term strategy. Most Birmingham businesses see initial ranking improvements within 3-6 months, with significant traffic growth by months 6-12. Competitive keywords may take longer."
      }
    },
    {
      "@type": "Question",
      "name": "How much does SEO cost in Birmingham?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO investment varies based on competition, current site health, and goals. Cornerstone Media offers tailored SEO packages for Birmingham businesses. Contact us for a free SEO audit."
      }
    },
    {
      "@type": "Question",
      "name": "Do you guarantee first page rankings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No ethical SEO agency can guarantee specific rankings as Google's algorithm considers over 200 factors. We focus on sustainable, white-hat strategies that build lasting organic visibility."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between local SEO and national SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Local SEO focuses on ranking for location-specific searches like 'SEO Birmingham' and optimising Google Business Profile. National SEO targets broader, non-geographic keywords with higher competition."
      }
    }
  ]
};

const SEO = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="SEO Birmingham | SEO Agency Birmingham | Cornerstone Media"
      description="Birmingham SEO agency that drives organic traffic and rankings. Technical SEO, local SEO, content strategy, and link building. Free SEO audit — call 07846 798 534."
      canonical="https://cornerstone-media.co.uk/seo-birmingham"
      schema={seoFAQSchema}
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seoServiceSchema) }} />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={Search}
        title="SEO Agency Birmingham"
        subtitle="Search Engine Optimisation"
        description="Cornerstone Media is a results-driven SEO agency in Birmingham dedicated to helping local businesses achieve sustainable organic growth. We combine technical excellence with strategic content creation and authoritative link building to drive rankings, traffic, and revenue for Birmingham businesses of all sizes."
        benefits={[
          "Comprehensive technical SEO audits that identify and fix crawlability, indexation, and performance issues holding your site back",
          "In-depth keyword research focused on terms that Birmingham customers use when they're ready to buy or enquire",
          "Content strategy and creation that establishes your business as a trusted authority in your industry",
          "White-hat link building from relevant, authoritative websites that strengthen your domain authority",
          "Local SEO optimisation including Google Business Profile management, local citations, and geo-targeted content",
          "Core Web Vitals optimisation to improve page speed, visual stability, and user experience metrics",
          "Regular ranking reports and traffic analysis with clear attribution of SEO's contribution to your bottom line",
          "Schema markup implementation to enhance your search listings with rich snippets, reviews, and structured data",
        ]}
        detailedSections={[
          {
            heading: "What Is SEO and Why Is It Essential for Birmingham Businesses?",
            paragraphs: [
              "Search engine optimisation is the practice of improving your website's visibility in Google's organic search results. When potential customers in Birmingham search for products or services you offer, SEO determines whether they find your website or your competitors'. Unlike paid advertising, organic traffic is free at the point of click and compounds over time — making SEO one of the highest-ROI marketing channels available.",
              "Birmingham's business landscape is increasingly competitive. With over 43,000 registered businesses in the city, standing out in search results requires more than just having a website. Google's algorithm evaluates hundreds of factors when deciding which pages to rank, including technical health, content quality, backlink authority, and user experience. A strategic SEO approach addresses all of these factors systematically.",
              "At Cornerstone Media, our SEO Birmingham team takes a data-first approach. We don't rely on guesswork or outdated tactics. Every recommendation is backed by thorough analysis of your current performance, competitive landscape, and market opportunity. We focus on driving measurable business outcomes — not vanity metrics like keyword counts or arbitrary traffic numbers.",
            ],
          },
          {
            heading: "Our Approach to SEO in Birmingham",
            paragraphs: [
              "Effective SEO requires a structured, methodical approach. We begin every engagement with a comprehensive technical audit that examines your website from Google's perspective. This includes crawlability analysis, indexation review, site architecture assessment, page speed testing, mobile usability checks, and structured data validation. We identify every technical barrier preventing your site from achieving its ranking potential.",
              "Content is the foundation of organic visibility. Our content strategy process starts with intent-driven keyword research — understanding not just what Birmingham customers search for, but why they search for it. We map keywords to specific pages, identify content gaps versus your competitors, and create a prioritised editorial calendar that systematically builds topical authority in your space.",
              "Link building remains one of the most important ranking factors. Our outreach team builds relationships with relevant publishers, industry blogs, and local Birmingham media to earn high-quality backlinks that signal authority to Google. Every link is earned through genuine value — we never engage in link schemes, paid links, or other black-hat practices that risk penalties.",
            ],
          },
        ]}
        topics={[
          { title: "Technical SEO Audits", description: "Deep-dive analysis of your website's technical foundation including crawlability, indexation, site architecture, Core Web Vitals, structured data, and internal linking. We fix the issues that prevent Google from properly understanding and ranking your content." },
          { title: "On-Page SEO Optimisation", description: "Strategic optimisation of title tags, meta descriptions, heading structures, content quality, internal links, and image alt text. Every page is optimised for its target keyword while maintaining natural, engaging copy that converts visitors." },
          { title: "Local SEO Birmingham", description: "Complete local search optimisation including Google Business Profile setup and management, local citation building, review generation strategy, geo-targeted content creation, and local link acquisition to dominate Birmingham search results." },
          { title: "Content Strategy & Creation", description: "Research-driven content strategies that target every stage of the buyer journey. We create authoritative blog posts, service pages, location pages, and resource content that attracts organic traffic and establishes topical authority." },
          { title: "Link Building & Digital PR", description: "White-hat outreach campaigns to earn editorial backlinks from relevant, authoritative websites. We use digital PR, guest posting, resource link building, and local partnerships to strengthen your domain authority." },
          { title: "SEO Reporting & Analytics", description: "Monthly performance reports tracking keyword rankings, organic traffic, conversion rates, and revenue attribution. We use Google Analytics 4, Google Search Console, and third-party tools to provide complete visibility." },
        ]}
        whyBirmingham={{
          heading: "Why Birmingham Businesses Need a Local SEO Partner",
          paragraphs: [
            "Ranking in Birmingham's local search results requires an agency that understands the city's unique commercial geography. From the bustling Bullring and Grand Central shopping areas to the professional services clusters in Colmore Row and Brindleyplace, each area of Birmingham has distinct search patterns and competitive dynamics. Our local knowledge informs every aspect of our SEO strategy.",
            "Local SEO is particularly important for Birmingham businesses that serve customers within a defined geographic area. When someone searches for 'solicitors near me' or 'restaurant in Birmingham', Google uses a completely different ranking algorithm that prioritises proximity, relevance, and prominence. Our local SEO strategies are specifically designed to maximise your visibility in these high-converting local searches.",
            "As a Birmingham-based SEO agency, we understand the regional market. We know which local directories and citations matter, which Birmingham publications accept guest content, and how to structure location-based content that resonates with West Midlands audiences. This local expertise is something national agencies simply cannot replicate.",
          ],
        }}
        processSteps={[
          { title: "Audit & Research", description: "Comprehensive technical audit, keyword research, competitor analysis, and content gap assessment to build a data-driven SEO strategy." },
          { title: "Fix & Optimise", description: "Resolve technical issues, optimise existing pages, improve site architecture, and implement structured data markup." },
          { title: "Create & Build", description: "Develop new content targeting priority keywords and execute link building campaigns to grow domain authority." },
          { title: "Monitor & Grow", description: "Track rankings and traffic, analyse performance data, and continuously refine the strategy to compound organic growth." },
        ]}
        toolsAndPlatforms={{
          heading: "SEO Tools & Platforms We Use",
          tools: ["Google Search Console", "Google Analytics 4", "Ahrefs", "SEMrush", "Screaming Frog", "Surfer SEO", "Google PageSpeed Insights", "Schema.org Validator", "Google Business Profile", "BrightLocal", "Majestic", "Google Looker Studio"],
        }}
        caseStudies={[
          { title: "Birmingham Professional Services", result: "312% Organic Traffic Growth", description: "Implemented a comprehensive SEO strategy for a Birmingham-based consultancy, growing organic traffic by 312% in 12 months and achieving first-page rankings for 15 target keywords." },
          { title: "West Midlands E-commerce Store", result: "Top 3 for 25+ Keywords", description: "Technical SEO overhaul and content strategy for a Birmingham retailer, resolving indexation issues and building topical authority that secured top-3 positions for over 25 commercial keywords." },
          { title: "Local Service Business", result: "4x Organic Leads", description: "Local SEO campaign for a Birmingham tradesperson including Google Business Profile optimisation and local content creation, quadrupling organic leads within six months." },
        ]}
        faqs={[
          { question: "How long does SEO take to work in Birmingham?", answer: "SEO is a long-term investment. Most Birmingham businesses see initial ranking improvements within 3-6 months, with significant traffic and revenue growth by months 6-12. The timeline depends on your current site health, competition level, and the aggressiveness of the strategy." },
          { question: "How much does SEO cost in Birmingham?", answer: "SEO investment varies based on your industry's competition, current site health, and growth goals. We offer tailored packages for Birmingham businesses of all sizes. Contact us for a free SEO audit to understand the opportunity and investment required." },
          { question: "Do you guarantee first page rankings?", answer: "No ethical SEO agency can guarantee specific rankings because Google's algorithm considers over 200 factors, many outside any agency's control. What we do guarantee is a transparent, strategic approach using proven methodologies that consistently deliver organic growth." },
          { question: "What is the difference between local SEO and national SEO?", answer: "Local SEO focuses on ranking for location-specific searches like 'SEO Birmingham' and optimising your Google Business Profile for the map pack. National SEO targets broader, non-geographic keywords. Most Birmingham businesses benefit from a combined approach." },
          { question: "Can I do SEO alongside PPC advertising?", answer: "Absolutely — and we recommend it. Our PPC Birmingham campaigns deliver immediate visibility while SEO builds sustainable organic traffic over time. Together, they dominate search results and provide both short-term and long-term growth." },
          { question: "How do you report on SEO performance?", answer: "We provide detailed monthly reports covering keyword rankings, organic traffic trends, conversion data, technical health scores, and link building progress. Reports are presented in plain language with clear recommendations for the month ahead." },
        ]}
        relatedServices={[
          { name: "PPC Birmingham", path: "/ppc-birmingham", description: "Combine organic search with paid advertising for maximum search visibility. Our PPC Birmingham campaigns deliver immediate traffic while SEO builds long-term presence." },
          { name: "Content Writing Birmingham", path: "/content-writing", description: "High-quality, SEO-optimised content creation that supports your organic search strategy and establishes your brand as an industry authority." },
          { name: "Website Design Birmingham", path: "/website-design-birmingham", description: "A well-designed website is the foundation of effective SEO. Our website design Birmingham team builds fast, accessible sites optimised for search engines." },
          { name: "Local SEO Birmingham", path: "/local-seo-birmingham", description: "Dominate Birmingham's local search results and Google Maps with our specialist local SEO services." },
          { name: "Technical SEO Birmingham", path: "/technical-seo-birmingham", description: "Fix crawlability, indexation, and performance issues that prevent your website from ranking." },
          { name: "SEO Audit Birmingham", path: "/seo-audit-birmingham", description: "Comprehensive SEO audit identifying every opportunity to improve your search visibility in Birmingham." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default SEO;
