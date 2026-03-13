import { MousePointerClick } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const RemarketingAdsBirmingham = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Remarketing Ads Birmingham | Retargeting Campaigns | Cornerstone Media"
      description="Remarketing and retargeting ad services in Birmingham. Re-engage website visitors with targeted display, video, and social ads that bring them back to convert."
      canonical="https://cornerstonemedialtd.com/remarketing-ads-birmingham"
    />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={MousePointerClick}
        title="Remarketing Ads Birmingham"
        subtitle="Retargeting & Remarketing Campaigns"
        description="Most website visitors leave without converting on their first visit. Cornerstone Media's remarketing services help Birmingham businesses re-engage those visitors with targeted ads across Google's Display Network, YouTube, Facebook, and Instagram — bringing them back to your website when they are ready to take action."
        benefits={[
          "Dynamic remarketing showing personalised ads featuring the exact products or services visitors viewed on your website",
          "Audience segmentation based on visitor behaviour — targeting people who visited specific pages, spent significant time, or abandoned carts",
          "Cross-platform retargeting across Google Display, YouTube, Facebook, and Instagram for maximum re-engagement opportunities",
          "Frequency capping and ad scheduling to prevent ad fatigue and ensure your remarketing budget is spent efficiently",
          "Sequential messaging strategies that guide previous visitors through a structured journey from awareness to conversion",
          "Privacy-compliant implementation following GDPR and cookie consent requirements for Birmingham businesses",
        ]}
        detailedSections={[
          {
            heading: "Why Remarketing Is Essential for Birmingham Businesses",
            paragraphs: [
              "Research consistently shows that only 2-4% of website visitors convert on their first visit. The remaining 96-98% leave your site — potentially to a competitor — without making an enquiry, booking, or purchase. For Birmingham businesses investing in SEO, PPC, and social media to drive traffic, this means the vast majority of their marketing spend generates a visit but not a conversion.",
              "Remarketing solves this problem by keeping your business visible to people who have already shown interest. When a potential customer visits your website and leaves, remarketing ads follow them across the web — appearing on news sites, social media feeds, and YouTube — reminding them of your business and encouraging them to return. These visitors are already familiar with your brand and significantly more likely to convert than cold audiences.",
              "At Cornerstone Media, we build sophisticated remarketing strategies for Birmingham businesses that go beyond simply showing the same ad repeatedly. We segment audiences based on their behaviour, create tailored messaging for each segment, and use frequency controls to maintain engagement without causing annoyance. The result is remarketing that feels helpful rather than intrusive, and that delivers measurable increases in conversion rates.",
            ],
          },
          {
            heading: "How Our Remarketing Campaigns Work",
            paragraphs: [
              "We begin by implementing tracking pixels across your website — Google Ads remarketing tag, Meta Pixel, and any other platform-specific tags needed for your campaign. These pixels build audience lists based on visitor behaviour, allowing us to create highly targeted segments such as homepage visitors, service page viewers, cart abandoners, or blog readers.",
              "Each audience segment receives customised ad creative and messaging. Someone who viewed a specific service page sees ads highlighting that service with a strong call-to-action. Someone who abandoned a shopping cart sees a reminder of the items they left behind, potentially with an incentive to complete the purchase. This personalisation dramatically improves click-through and conversion rates.",
              "We manage campaign delivery across Google's Display Network (reaching over 90% of internet users), YouTube pre-roll and in-feed ads, and paid social remarketing on Facebook and Instagram. Multi-platform delivery ensures your brand stays top-of-mind regardless of where your audience spends their time online.",
            ],
          },
        ]}
        topics={[
          { title: "Google Display Remarketing", description: "Visual banner ads served across millions of websites in Google's Display Network to previous visitors, keeping your Birmingham business top-of-mind during their browsing." },
          { title: "Dynamic Product Remarketing", description: "Personalised ads automatically showing the exact products visitors viewed on your website, with real-time pricing and availability — ideal for e-commerce businesses." },
          { title: "Social Media Retargeting", description: "Re-engagement campaigns on Facebook and Instagram using custom audiences built from website visitor data, with platform-native ad formats." },
          { title: "YouTube Remarketing", description: "Video ads served to previous website visitors on YouTube, combining the power of video storytelling with the precision of behavioural targeting." },
        ]}
        processSteps={[
          { title: "Tracking Setup", description: "We implement remarketing pixels across your website and configure audience lists based on visitor behaviour patterns." },
          { title: "Audience Strategy", description: "We segment visitors into meaningful groups and develop tailored messaging strategies for each audience segment." },
          { title: "Creative & Launch", description: "We design compelling ad creative in multiple formats and launch campaigns across selected platforms with proper controls." },
          { title: "Optimise & Report", description: "We monitor frequency, engagement, and conversion rates, continuously refining targeting and creative for best results." },
        ]}
        faqs={[
          { question: "Is remarketing the same as retargeting?", answer: "The terms are often used interchangeably. Technically, remarketing usually refers to Google's display network advertising to past visitors, while retargeting is broader and includes social media platforms. We cover both under our remarketing services." },
          { question: "How much does remarketing cost?", answer: "Remarketing typically has lower cost per click than standard PPC because you are targeting warmer audiences. Budgets depend on your website traffic volume and campaign goals. We recommend starting with a modest budget and scaling based on results." },
          { question: "Won't remarketing ads annoy my potential customers?", answer: "Not when managed correctly. We implement frequency caps to limit how often someone sees your ads, use burn pixels to stop showing ads after conversion, and rotate creative to prevent fatigue. Our approach ensures remarketing feels helpful, not intrusive." },
          { question: "How long should I remarket to visitors?", answer: "The optimal remarketing window depends on your sales cycle. For impulse purchases, 7-14 days is effective. For considered purchases like professional services, 30-90 days allows time for research and comparison. We set appropriate windows for each audience segment." },
        ]}
        relatedServices={[
          { name: "PPC Birmingham", path: "/ppc-birmingham", description: "Our full PPC service covering search, shopping, display, and remarketing campaigns for Birmingham businesses." },
          { name: "Google Ads Management Birmingham", path: "/google-ads-management-birmingham", description: "Expert Google Ads management including remarketing campaign setup and optimisation." },
          { name: "Facebook Ads Birmingham", path: "/facebook-ads-birmingham", description: "Social media retargeting on Facebook and Instagram with custom audiences and dynamic creative." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default RemarketingAdsBirmingham;
