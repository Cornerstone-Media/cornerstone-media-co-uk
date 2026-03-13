import { MousePointerClick } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const GoogleAdsManagementBirmingham = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Google Ads Management Birmingham | Certified PPC Experts | Cornerstone Media"
      description="Expert Google Ads management for Birmingham businesses. Certified Google Ads specialists managing Search, Shopping, Display, and YouTube campaigns. Free account audit available."
      canonical="https://cornerstonemedialtd.com/google-ads-management-birmingham"
    />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={MousePointerClick}
        title="Google Ads Management Birmingham"
        subtitle="Certified Google Ads Specialists"
        description="Cornerstone Media provides expert Google Ads management for Birmingham businesses. Our certified specialists build, optimise, and scale campaigns across Search, Shopping, Display, and YouTube to drive qualified leads, increase sales, and deliver measurable return on your advertising investment."
        benefits={[
          "Google Ads certified account managers with proven experience managing campaigns for Birmingham businesses across diverse industries",
          "Full-funnel campaign architecture covering Search, Shopping, Display, Performance Max, and YouTube ad formats",
          "Advanced Smart Bidding implementation using Target CPA, Target ROAS, and Maximise Conversions to automate performance",
          "Comprehensive keyword research targeting commercial-intent terms that Birmingham customers search when ready to buy",
          "Ad copy development with systematic A/B testing of headlines, descriptions, and extensions for continuous improvement",
          "Monthly performance reviews with transparent reporting on spend, conversions, CPA, ROAS, and campaign recommendations",
        ]}
        detailedSections={[
          {
            heading: "Why Choose a Birmingham-Based Google Ads Agency?",
            paragraphs: [
              "Google Ads is one of the most powerful tools available for generating immediate business growth in Birmingham's competitive marketplace. However, the platform's complexity means that poorly managed campaigns can burn through budgets quickly with little to show for it. Working with a certified Google Ads agency in Birmingham ensures your campaigns are structured, optimised, and managed by specialists who understand both the platform and your local market.",
              "At Cornerstone Media, every Google Ads campaign we manage starts with a deep understanding of your business objectives. We do not use cookie-cutter approaches. Whether you are a Birmingham solicitor needing more case enquiries, an e-commerce business targeting the West Midlands, or a B2B company generating leads for your sales team, we tailor every aspect of your campaigns to your specific goals and audience.",
              "Our Google Ads management goes beyond daily optimisation. We take a strategic approach that encompasses landing page recommendations, conversion tracking setup, audience segmentation, and ongoing competitor monitoring. The result is campaigns that consistently improve over time, delivering stronger returns month after month.",
            ],
          },
          {
            heading: "Our Google Ads Campaign Types",
            paragraphs: [
              "Google Search campaigns capture high-intent demand by showing your ads when customers search for your products or services. We build tightly themed ad groups with precise keyword matching, compelling ad copy, and optimised landing pages to maximise your Quality Score and minimise your cost per click.",
              "For e-commerce businesses in Birmingham, Google Shopping campaigns showcase your products with images, prices, and reviews directly in search results. We optimise product feeds, manage bidding at the product level, and structure campaigns to maximise return on ad spend across your entire catalogue.",
              "Display and YouTube campaigns build brand awareness and support remarketing efforts. We create visually engaging ad creative and use Google's powerful audience targeting to reach potential customers based on their interests, behaviours, and previous interactions with your website.",
            ],
          },
        ]}
        topics={[
          { title: "Search Campaigns", description: "Text ads shown at the top of Google search results for specific keyword queries. Ideal for capturing demand and generating leads from people actively searching for your services in Birmingham." },
          { title: "Shopping Campaigns", description: "Product listing ads with images, prices, and reviews for Birmingham e-commerce businesses. We optimise feeds and bidding to maximise product visibility and sales." },
          { title: "Display Advertising", description: "Visual banner ads across millions of websites in Google's Display Network for brand awareness, audience targeting, and remarketing to previous visitors." },
          { title: "Performance Max", description: "Google's AI-driven campaign type accessing all Google inventory including Search, Display, YouTube, Gmail, and Maps from a single campaign with automated optimisation." },
        ]}
        processSteps={[
          { title: "Account Audit", description: "We review your existing Google Ads account (or research your market if starting fresh) to identify opportunities and set benchmarks." },
          { title: "Campaign Build", description: "We structure campaigns with precise keyword targeting, compelling ad copy, proper tracking, and optimised landing pages." },
          { title: "Daily Management", description: "We monitor performance daily, adjust bids, add negative keywords, test new ad variations, and optimise toward your goals." },
          { title: "Strategic Review", description: "Monthly performance reviews covering spend, conversions, CPA, ROAS, and strategic recommendations for continued growth." },
        ]}
        faqs={[
          { question: "How much should I spend on Google Ads in Birmingham?", answer: "Ad spend depends on your industry, competition, and growth targets. We recommend a minimum budget that allows for meaningful data collection and optimisation. During our free audit, we estimate the budget needed to achieve your specific goals." },
          { question: "What is a good Google Ads conversion rate?", answer: "Average conversion rates vary significantly by industry. For Birmingham service businesses, 3-8% is typical for Search campaigns. Our optimisation work typically pushes conversion rates well above industry averages." },
          { question: "Do you charge a flat fee or percentage of ad spend?", answer: "We offer transparent monthly management fees based on campaign complexity and scope. We do not take a percentage of your ad spend — your entire budget goes directly to Google." },
          { question: "Can I see how my campaigns are performing?", answer: "Absolutely. You receive monthly performance reports, and we also set up real-time dashboards so you can check results anytime. Full transparency is fundamental to how we work." },
        ]}
        relatedServices={[
          { name: "PPC Birmingham", path: "/ppc-birmingham", description: "Our comprehensive PPC services covering Google Ads, Microsoft Ads, and paid social advertising for Birmingham businesses." },
          { name: "PPC Management Birmingham", path: "/ppc-management-birmingham", description: "Full-service PPC management across multiple platforms and campaign types." },
          { name: "Remarketing Ads Birmingham", path: "/remarketing-ads-birmingham", description: "Re-engage website visitors with targeted remarketing campaigns across Google's Display Network and YouTube." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default GoogleAdsManagementBirmingham;
