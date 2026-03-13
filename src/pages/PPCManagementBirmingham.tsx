import { MousePointerClick } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const PPCManagementBirmingham = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="PPC Management Birmingham | Paid Search & Social | Cornerstone Media"
      description="Professional PPC management in Birmingham covering Google Ads, Microsoft Ads, and paid social. Data-driven campaign management that delivers leads and sales for your business."
      canonical="https://cornerstone-media.co.uk/ppc-management-birmingham"
    />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={MousePointerClick}
        title="PPC Management Birmingham"
        subtitle="Multi-Platform Paid Advertising"
        description="Cornerstone Media delivers comprehensive PPC management for Birmingham businesses across Google Ads, Microsoft Advertising, and paid social platforms. Our multi-platform approach ensures your advertising budget reaches the right audience at every stage of the buying journey, maximising leads and sales while minimising wasted spend."
        benefits={[
          "Cross-platform campaign management coordinating Google Ads, Microsoft Ads, and paid social for unified performance",
          "Budget allocation strategy distributing spend across platforms based on performance data and audience behaviour",
          "Unified conversion tracking across all platforms with single-dashboard reporting for clear performance visibility",
          "Audience strategy development including first-party data activation, lookalike modelling, and custom audience building",
          "Creative testing programmes with systematic A/B experiments across ad formats, copy, and visual creative",
          "Proactive campaign management with daily monitoring, weekly optimisations, and monthly strategic reviews",
        ]}
        detailedSections={[
          {
            heading: "What Comprehensive PPC Management Includes",
            paragraphs: [
              "Effective PPC management goes far beyond setting up ads and hoping for the best. It requires continuous analysis, strategic thinking, and hands-on optimisation across multiple platforms and campaign types. At Cornerstone Media, our PPC management service covers every aspect of paid advertising — from initial strategy development and campaign creation to daily optimisation and performance reporting.",
              "For Birmingham businesses, multi-platform PPC management is particularly valuable because your customers use multiple channels throughout their buying journey. A potential customer might first discover your business through a Facebook ad, then search for your services on Google, and finally convert after seeing a remarketing display ad. Our integrated approach ensures your brand is visible and consistent across all these touchpoints.",
              "We manage every platform with the same level of attention and expertise. Google Ads remains the cornerstone of most PPC strategies, but Microsoft Advertising often delivers lower cost per click and strong B2B performance. Paid social platforms like Facebook, Instagram, and LinkedIn offer unmatched targeting precision for awareness and consideration campaigns. Together, they create a comprehensive advertising ecosystem that captures demand at every stage.",
            ],
          },
          {
            heading: "Our Multi-Platform PPC Strategy",
            paragraphs: [
              "We begin by mapping your customer journey to identify which platforms and campaign types will deliver the strongest results at each stage. Bottom-of-funnel search campaigns capture existing demand from people actively looking for your services. Mid-funnel social and display campaigns nurture interest and build consideration. Top-of-funnel awareness campaigns introduce your brand to new audiences who match your ideal customer profile.",
              "Budget allocation is data-driven, not arbitrary. We analyse historical performance data, industry benchmarks, and your specific cost-per-acquisition targets to distribute budget across platforms in the way that maximises overall return. As campaigns mature and generate more data, we continuously rebalance spend toward the best-performing channels and audiences.",
              "Reporting unifies all platforms into a single, clear performance dashboard. You see total spend, total conversions, blended cost per acquisition, and return on ad spend across your entire paid advertising portfolio — not fragmented platform-by-platform reports that make it difficult to understand overall performance.",
            ],
          },
        ]}
        topics={[
          { title: "Google Ads Management", description: "Search, Shopping, Display, YouTube, and Performance Max campaigns managed by certified Google Ads specialists with deep Birmingham market knowledge." },
          { title: "Microsoft Advertising", description: "Bing and Yahoo search campaigns that capture incremental traffic at lower cost per click, particularly effective for B2B and older demographics." },
          { title: "Paid Social Management", description: "Campaign management across Facebook, Instagram, LinkedIn, and TikTok with platform-specific creative and advanced audience targeting." },
          { title: "Cross-Platform Analytics", description: "Unified tracking and attribution across all paid channels with custom dashboards showing blended performance metrics." },
        ]}
        processSteps={[
          { title: "Strategy & Planning", description: "We map your customer journey and develop a multi-platform PPC strategy with clear goals, budgets, and KPIs." },
          { title: "Campaign Launch", description: "We build campaigns across all chosen platforms with proper tracking, targeting, and creative assets." },
          { title: "Active Management", description: "Daily monitoring, bid adjustments, negative keywords, audience refinements, and creative testing across all platforms." },
          { title: "Report & Strategise", description: "Monthly unified reports with performance analysis and strategic recommendations for continued growth." },
        ]}
        faqs={[
          { question: "Which PPC platforms should my Birmingham business use?", answer: "Most businesses benefit from Google Ads as a foundation, with additional platforms added based on your audience and goals. B2B businesses often see strong results from LinkedIn, while B2C companies benefit from Facebook and Instagram advertising." },
          { question: "How do you track results across multiple platforms?", answer: "We implement comprehensive conversion tracking with Google Analytics 4 as the central hub, supplemented by platform-specific pixels and offline conversion imports where applicable. This gives a unified view of performance." },
          { question: "What is a typical PPC management fee?", answer: "Our management fees are based on the complexity and scope of your campaigns, not a percentage of ad spend. We provide transparent pricing during our initial consultation." },
          { question: "How quickly can you launch PPC campaigns?", answer: "We can typically launch initial Google Ads campaigns within 1-2 weeks of engagement. More complex multi-platform setups may take 2-3 weeks to ensure proper tracking and creative development." },
        ]}
        relatedServices={[
          { name: "PPC Birmingham", path: "/ppc-birmingham", description: "Our main PPC service page covering strategy, campaign types, and results for Birmingham businesses." },
          { name: "Google Ads Management Birmingham", path: "/google-ads-management-birmingham", description: "Specialist Google Ads management with certified account managers for Search, Shopping, and Display campaigns." },
          { name: "Remarketing Ads Birmingham", path: "/remarketing-ads-birmingham", description: "Dedicated remarketing campaigns to re-engage previous website visitors and drive them back to convert." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default PPCManagementBirmingham;
