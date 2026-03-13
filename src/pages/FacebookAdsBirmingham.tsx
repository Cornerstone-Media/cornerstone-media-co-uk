import { Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const FacebookAdsBirmingham = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Facebook Ads Birmingham | Facebook Advertising Agency | Cornerstone Media"
      description="Facebook advertising agency in Birmingham. Expert Meta Ads management with advanced targeting, creative development, and conversion optimisation for Birmingham businesses."
      canonical="https://cornerstone-media.co.uk/facebook-ads-birmingham"
    />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={Share2}
        title="Facebook Ads Birmingham"
        subtitle="Facebook & Meta Advertising"
        description="Cornerstone Media is a specialist Facebook advertising agency in Birmingham. We create high-performing Meta Ads campaigns that reach your ideal customers with precision targeting, compelling creative, and data-driven optimisation — driving leads, sales, and brand awareness for businesses across the West Midlands."
        benefits={[
          "Advanced audience targeting using demographics, interests, behaviours, custom audiences, and lookalike modelling to reach your ideal Birmingham customers",
          "Full-funnel campaign architecture from awareness campaigns introducing your brand to conversion campaigns driving direct sales and enquiries",
          "Professional ad creative development including static images, carousel ads, video content, and collection formats optimised for each placement",
          "Pixel-based tracking and conversion API implementation for accurate attribution even with iOS privacy restrictions",
          "A/B testing frameworks systematically testing audiences, creative, copy, and landing pages to improve performance over time",
          "Retargeting campaigns re-engaging website visitors, email subscribers, and social media engagers with personalised messaging",
        ]}
        detailedSections={[
          {
            heading: "Why Facebook Advertising Works for Birmingham Businesses",
            paragraphs: [
              "Facebook remains the most widely used social media platform in the UK, with over 44 million active users. For Birmingham businesses, this represents an enormous pool of potential customers who can be reached with unprecedented targeting precision. Unlike search advertising where you wait for people to come to you, Facebook ads proactively put your business in front of the right people based on who they are and what they care about.",
              "The power of Facebook advertising lies in its targeting capabilities. Meta's advertising platform allows you to target people based on location (down to specific Birmingham postcodes), age, gender, interests, online behaviours, job titles, life events, and much more. You can target people who have recently moved to Birmingham, business owners looking for marketing services, or parents searching for local activities — the specificity is remarkable.",
              "At Cornerstone Media, we leverage the full depth of Meta's advertising platform to create campaigns that resonate with Birmingham audiences. We combine precise targeting with compelling creative and strategic funnel design to move potential customers from first awareness to conversion. Our Birmingham-based team understands local audience preferences and creates ads that feel authentic and relevant.",
            ],
          },
        ]}
        topics={[
          { title: "Lead Generation Campaigns", description: "Facebook Lead Ads with integrated forms that capture contact details without leaving the platform, combined with CRM integration for immediate follow-up with Birmingham prospects." },
          { title: "E-commerce Sales Campaigns", description: "Dynamic product ads, catalogue campaigns, and conversion-optimised advertising for Birmingham online retailers using Facebook and Instagram Shopping features." },
          { title: "Brand Awareness", description: "Reach and frequency campaigns designed to introduce your Birmingham business to new audiences, build recognition, and establish your brand in the local market." },
          { title: "Retargeting & Custom Audiences", description: "Re-engagement campaigns targeting website visitors, email lists, and social media engagers with personalised ads that drive return visits and conversions." },
        ]}
        whyBirmingham={{
          heading: "Facebook Advertising Tailored to Birmingham",
          paragraphs: [
            "Birmingham's diverse population means different creative approaches resonate with different segments of the market. Our team creates ad campaigns that reflect the city's character — referencing local landmarks, events, and cultural touchpoints that make your advertising feel genuinely local rather than generic.",
            "We use geo-targeting to reach audiences in specific Birmingham areas and surrounding towns, ensuring your advertising budget is focused on the geographic regions most valuable to your business. Whether you serve the entire West Midlands or a specific neighbourhood, we configure targeting to match your service area precisely.",
          ],
        }}
        processSteps={[
          { title: "Audience Research", description: "We identify your ideal customer segments and build targeting strategies using demographics, interests, and behavioural data." },
          { title: "Creative Development", description: "We produce platform-optimised ad creative including images, video, carousels, and copy tailored to each audience and funnel stage." },
          { title: "Campaign Launch", description: "We structure and launch campaigns in Meta Ads Manager with proper pixel tracking, conversion events, and budget allocation." },
          { title: "Test & Optimise", description: "We run systematic A/B tests, analyse results, and continuously refine targeting, creative, and bidding for improved performance." },
        ]}
        faqs={[
          { question: "How much should I spend on Facebook Ads?", answer: "Effective Facebook Ads campaigns for Birmingham businesses can start from as little as £500 per month in ad spend. Optimal budgets depend on your goals, audience size, and industry competition. We recommend budgets during our initial strategy session." },
          { question: "Are Facebook Ads still effective after iOS privacy changes?", answer: "Yes. While iOS 14+ changes affected tracking precision, Meta has developed solutions including the Conversions API and aggregated event measurement. We implement these tools to maintain accurate attribution and campaign performance." },
          { question: "What types of businesses benefit from Facebook Ads?", answer: "Facebook Ads work for almost any business. B2C companies see excellent results from product advertising and lead generation. B2B businesses can target by job title and industry. Local Birmingham businesses benefit hugely from geo-targeted awareness campaigns." },
          { question: "Do you create the ad content?", answer: "Yes. Our team handles all creative production including graphic design, video editing, copywriting, and ad format selection. We create platform-native content designed to perform in the Facebook and Instagram feed environment." },
        ]}
        relatedServices={[
          { name: "Social Media Marketing Birmingham", path: "/social-media-marketing-birmingham", description: "Comprehensive social media strategy including organic content and paid advertising across all major platforms." },
          { name: "Instagram Marketing Birmingham", path: "/instagram-marketing-birmingham", description: "Instagram-specific marketing including Reels, Stories, and advertising managed through the same Meta Ads platform." },
          { name: "PPC Birmingham", path: "/ppc-birmingham", description: "Combine Facebook Ads with Google Ads for full-funnel advertising that captures demand across search and social." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default FacebookAdsBirmingham;
