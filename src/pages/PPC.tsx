import { MousePointerClick } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const ppcSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "PPC Advertising",
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
  "description": "Expert PPC advertising and Google Ads management for Birmingham businesses. Maximise ROI with targeted pay-per-click campaigns."
};

const ppcFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does PPC management cost in Birmingham?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PPC management fees vary based on ad spend and campaign complexity. Cornerstone Media offers tailored packages starting from competitive monthly retainers. Contact us for a free audit and custom quote."
      }
    },
    {
      "@type": "Question",
      "name": "How long before I see results from PPC advertising?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PPC campaigns can generate traffic and leads from day one. However, optimisation typically takes 2-4 weeks to refine targeting, bidding, and ad copy for maximum ROI."
      }
    },
    {
      "@type": "Question",
      "name": "Do you manage Google Ads and Microsoft Ads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we manage campaigns across Google Ads, Microsoft Advertising (Bing), and paid social platforms including Facebook, Instagram, and LinkedIn."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do you serve with PPC in Birmingham?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with a wide range of Birmingham industries including professional services, e-commerce, healthcare, construction, hospitality, and B2B technology."
      }
    }
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
      title="PPC Birmingham | PPC Agency & Google Ads Management | Cornerstone Media"
      description="PPC Birmingham agency managing Google Ads, Microsoft Ads & paid social with measurable ROI. Free PPC audit for Birmingham businesses. Call 07846 798 534."
      canonical="https://cornerstone-media.co.uk/ppc-birmingham"
      schema={[ppcSchema, ppcFAQSchema, breadcrumbSchema]}
    />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={MousePointerClick}
        title="PPC Agency Birmingham"
        subtitle="Pay-Per-Click Advertising"
        description="Cornerstone Media is a specialist PPC agency in Birmingham helping local businesses generate high-quality leads and sales through expertly managed Google Ads campaigns. We combine data-driven bidding strategies with compelling ad creative to ensure every pound of your advertising budget works harder."
        benefits={[
          "Certified Google Ads specialists with deep experience managing campaigns for Birmingham businesses across multiple industries",
          "Advanced conversion tracking setup including offline conversion imports so you know exactly which clicks become paying customers",
          "Granular keyword research focused on commercial intent terms that Birmingham customers actually search for",
          "Negative keyword management that eliminates wasted spend on irrelevant searches and low-quality traffic",
          "Dynamic ad copy testing with systematic A/B experiments across headlines, descriptions, and extensions",
          "Competitor analysis and auction insights to identify gaps and opportunities in the Birmingham PPC landscape",
          "Remarketing campaigns that re-engage previous visitors and nurture them through the buying journey",
          "Transparent monthly reporting with clear metrics on spend, conversions, cost per acquisition, and return on ad spend",
        ]}
        detailedSections={[
          {
            heading: "What Is PPC Advertising and Why Does It Matter for Birmingham Businesses?",
            paragraphs: [
              "Pay-per-click advertising is one of the fastest and most measurable ways to generate new customers for your Birmingham business. Unlike organic search which takes months to build momentum, PPC campaigns on Google Ads can start driving qualified traffic to your website from the moment they go live. You only pay when someone clicks on your ad, meaning every penny of your budget goes towards reaching people actively searching for your products or services.",
              "For businesses operating in Birmingham's competitive marketplace, PPC advertising offers a crucial advantage: the ability to appear at the top of Google search results for high-value keywords immediately. Whether you're a solicitor in the Jewellery Quarter, a restaurant in Brindleyplace, or a tradesperson serving Edgbaston and Solihull, PPC allows you to target customers at the exact moment they're looking for what you offer.",
              "At Cornerstone Media, our PPC Birmingham specialists go beyond basic campaign setup. We build comprehensive advertising strategies that encompass keyword research, audience segmentation, ad creative development, landing page optimisation, and continuous performance analysis. Our goal is not just clicks — it's conversions, revenue, and measurable business growth.",
            ],
          },
          {
            heading: "Our PPC Strategy for Birmingham Businesses",
            paragraphs: [
              "Every successful PPC campaign begins with understanding your business objectives, target audience, and competitive landscape. We start with an in-depth discovery session where we learn about your ideal customers, your profit margins, and the lifetime value of a client. This commercial understanding shapes every aspect of the campaign — from bid strategy and keyword selection to ad messaging and landing page design.",
              "Our keyword research process goes far beyond surface-level terms. We use a combination of Google Keyword Planner, search term analysis, and competitor intelligence tools to uncover the exact phrases Birmingham customers use when they're ready to buy. We map these keywords to specific campaign structures that align with different stages of the buying journey, ensuring we capture demand at every level of intent.",
              "Campaign structure is critical to PPC success. We organise your account into tightly themed ad groups with closely matched keywords, ensuring maximum relevance between search queries, ad copy, and landing pages. This structure directly improves your Quality Score — Google's measure of ad relevance — which leads to lower costs per click and better ad positions.",
            ],
          },
        ]}
        topics={[
          { title: "Google Search Ads", description: "Targeted text ads appearing at the top of Google search results when Birmingham customers search for your products or services. We optimise for commercial intent keywords that drive conversions, not just clicks." },
          { title: "Google Shopping Campaigns", description: "Product listing ads with images, prices, and reviews that appear prominently in Google Shopping results. Ideal for Birmingham e-commerce businesses looking to drive online and in-store sales." },
          { title: "Display & Remarketing", description: "Visual banner ads shown across the Google Display Network to build brand awareness, and remarketing campaigns that re-engage visitors who left your website without converting." },
          { title: "Landing Page Optimisation", description: "Custom landing pages designed to convert PPC traffic into enquiries and sales. We test headlines, forms, CTAs, and page layouts to continuously improve conversion rates." },
          { title: "Conversion Tracking & Analytics", description: "Full tracking implementation including Google Analytics 4, Google Tag Manager, and offline conversion imports. Know exactly which keywords and ads generate revenue." },
          { title: "Microsoft Advertising (Bing Ads)", description: "Extend your reach beyond Google with campaigns on Microsoft's search network, often delivering lower cost per click and strong conversion rates for B2B audiences." },
        ]}
        whyBirmingham={{
          heading: "Why Birmingham Businesses Choose Cornerstone Media for PPC",
          paragraphs: [
            "Birmingham is the UK's second-largest city with a thriving business ecosystem spanning professional services, manufacturing, retail, hospitality, and technology. The local market is competitive, and businesses need a PPC agency that understands the nuances of advertising in the West Midlands — from geo-targeting specific neighbourhoods to understanding seasonal demand patterns unique to the region.",
            "As a Birmingham-based PPC agency, Cornerstone Media has hands-on experience managing campaigns for local businesses across Edgbaston, Solihull, Sutton Coldfield, Moseley, and the city centre. We understand which areas convert best, how to structure location targeting for maximum efficiency, and how to write ad copy that resonates with Birmingham audiences.",
            "Our clients benefit from local accountability. You can meet our team face-to-face, discuss strategy over coffee, and know that we're genuinely invested in your success. We're not a faceless London agency managing your account on autopilot — we're your dedicated PPC partner in Birmingham.",
          ],
        }}
        processSteps={[
          { title: "Audit & Discovery", description: "We analyse your existing campaigns, website, competitors, and business goals to identify the biggest opportunities for growth." },
          { title: "Strategy & Build", description: "We create a detailed PPC strategy with keyword mapping, audience targeting, ad copy, and campaign structure tailored to your Birmingham market." },
          { title: "Launch & Monitor", description: "We launch your campaigns with careful bid management and monitor performance daily, making real-time adjustments to maximise results." },
          { title: "Optimise & Scale", description: "We continuously test and refine every element — keywords, bids, ads, audiences — to improve ROAS and scale profitable campaigns." },
        ]}
        toolsAndPlatforms={{
          heading: "Platforms & Tools We Use",
          tools: ["Google Ads", "Google Analytics 4", "Google Tag Manager", "Google Merchant Center", "Microsoft Advertising", "SEMrush", "SpyFu", "Unbounce", "Google Looker Studio", "Hotjar", "CallRail"],
        }}
        caseStudies={[
          { title: "Birmingham Legal Firm", result: "340% ROAS", description: "Restructured Google Ads account for a Birmingham solicitors firm, reducing cost per lead by 52% while increasing qualified enquiries by 180% within three months." },
          { title: "West Midlands E-commerce", result: "£45K Monthly Revenue", description: "Built and scaled Google Shopping campaigns for a Birmingham-based retailer, growing monthly revenue from £12K to £45K with a 5.2x return on ad spend." },
          { title: "B2B Services Company", result: "67% Lower CPA", description: "Implemented conversion tracking and offline imports for a Birmingham B2B firm, enabling smart bidding that reduced cost per acquisition by 67%." },
        ]}
        faqs={[
          { question: "How much does PPC management cost in Birmingham?", answer: "Our PPC management fees are tailored to your ad spend and campaign complexity. We offer competitive monthly retainers that scale with your business. Contact us for a free PPC audit and custom quote — there's no obligation." },
          { question: "How long before I see results from PPC advertising?", answer: "PPC can generate traffic and leads from day one. However, the real value comes from ongoing optimisation. We typically see significant performance improvements within the first 2-4 weeks as we refine targeting, bidding, and ad copy based on real data." },
          { question: "Do you manage Google Ads and Microsoft Ads?", answer: "Yes, we manage campaigns across Google Ads (including Search, Shopping, Display, and YouTube), Microsoft Advertising (Bing), and paid social platforms including Facebook, Instagram, and LinkedIn." },
          { question: "What industries do you serve with PPC in Birmingham?", answer: "We work with a diverse range of Birmingham businesses including professional services (legal, accounting, financial), e-commerce, healthcare, construction, trades, hospitality, education, and B2B technology companies." },
          { question: "Can PPC work alongside my SEO strategy?", answer: "Absolutely. PPC and SEO are complementary strategies. PPC delivers immediate visibility while SEO builds long-term organic presence. Our SEO Birmingham team works alongside our PPC specialists to create integrated search strategies." },
          { question: "Will I be locked into a long-term contract?", answer: "No. We believe in earning your business every month through results. We offer flexible rolling agreements with no long-term lock-in. Our clients stay because of performance, not contracts." },
        ]}
        relatedServices={[
          { name: "SEO Birmingham", path: "/seo-birmingham", description: "Complement your PPC campaigns with organic search optimisation. Our SEO Birmingham services build long-term visibility while PPC delivers immediate results." },
          { name: "Social Media Marketing Birmingham", path: "/social-media-marketing-birmingham", description: "Extend your reach beyond search with targeted paid social campaigns on Facebook, Instagram, and LinkedIn for Birmingham audiences." },
          { name: "Website Design Birmingham", path: "/website-design-birmingham", description: "Ensure your PPC traffic converts with a professionally designed, conversion-optimised website built for Birmingham businesses." },
          { name: "Google Ads Management Birmingham", path: "/google-ads-management-birmingham", description: "Expert Google Ads account management with advanced bidding strategies and conversion tracking for Birmingham businesses." },
          { name: "PPC Management Birmingham", path: "/ppc-management-birmingham", description: "Full-service PPC management across Google, Bing, and paid social platforms for Birmingham companies." },
          { name: "Remarketing Ads Birmingham", path: "/remarketing-ads-birmingham", description: "Re-engage previous website visitors with targeted remarketing campaigns that bring them back to convert." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default PPC;
