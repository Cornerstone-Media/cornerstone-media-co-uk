import { Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const SocialMedia = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Social Media Marketing Birmingham | Facebook & Instagram Ads | Cornerstone Media"
      description="Strategic social media marketing in Birmingham. Paid campaigns on Facebook, Instagram, LinkedIn & TikTok. Build your brand and drive conversions."
      canonical="https://cornerstonemedialtd.com/social-media"
    />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={Share2}
        title="Social Media Marketing Birmingham"
        subtitle="Social Media Management"
        description="Build meaningful connections with your Birmingham audience and drive conversions through strategic social media campaigns across all major platforms."
        benefits={[
          "Strategic paid social campaigns on Facebook, Instagram, LinkedIn, and TikTok",
          "Engaging content creation tailored to each platform's audience",
          "Advanced audience targeting and lookalike modelling",
          "Comprehensive analytics and performance reporting",
          "Community management and brand reputation monitoring",
          "Influencer partnership strategy and management",
        ]}
        topics={[
          { title: "Paid Social Campaigns", description: "Precision-targeted advertising campaigns across Facebook, Instagram, LinkedIn, and TikTok designed to drive measurable conversions and brand awareness." },
          { title: "Content Strategy", description: "Platform-specific content calendars with engaging visuals, copy, and video content that resonates with your target audience." },
          { title: "Audience Targeting", description: "Advanced segmentation using demographics, interests, behaviours, and lookalike audiences to reach the people most likely to convert." },
          { title: "Analytics & Reporting", description: "Detailed performance dashboards tracking engagement, reach, conversions, and ROI across all social channels." },
        ]}
        processSteps={[
          { title: "Research", description: "We analyse your audience, competitors, and industry." },
          { title: "Create", description: "We develop compelling content and campaign strategies." },
          { title: "Engage", description: "We launch campaigns and manage community interactions." },
          { title: "Refine", description: "We optimise based on data to maximise results." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default SocialMedia;
