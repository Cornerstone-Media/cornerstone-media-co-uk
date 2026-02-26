import { MousePointerClick } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const PPC = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="PPC Agency Birmingham | Google Ads Management | Cornerstone Media"
      description="Expert PPC management in Birmingham. Maximise ROI with targeted Google Ads campaigns, conversion tracking, and data-driven optimisation. Free audit available."
      canonical="https://cornerstonemedia.co.uk/ppc"
    />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={MousePointerClick}
        title="PPC Advertising Birmingham"
        subtitle="Pay-Per-Click Management"
        description="Maximise your advertising budget with expertly managed PPC campaigns that deliver measurable results for Birmingham businesses across Google Ads, Bing, and social platforms."
        benefits={[
          "Targeted campaigns that reach your ideal Birmingham customers at the right moment",
          "Advanced conversion tracking and attribution modelling",
          "Continuous A/B testing of ad copy, creatives, and landing pages",
          "ROI-focused optimisation to maximise every pound spent",
          "Transparent reporting with real-time performance dashboards",
          "Expert bid management and budget allocation strategies",
        ]}
        topics={[
          { title: "Google Ads Management", description: "Search, display, shopping, and video campaigns managed by certified Google Ads specialists for maximum visibility and conversions in Birmingham and beyond." },
          { title: "Conversion Tracking", description: "Comprehensive tracking implementation to measure every touchpoint in the customer journey and attribute revenue accurately." },
          { title: "ROI Optimisation", description: "Data-driven bid strategies and budget allocation to ensure every campaign delivers the highest possible return on ad spend." },
          { title: "Landing Page Testing", description: "Systematic A/B testing of landing pages to improve conversion rates and reduce cost per acquisition." },
        ]}
        processSteps={[
          { title: "Audit", description: "We review your existing campaigns and identify opportunities." },
          { title: "Strategy", description: "We build a tailored PPC strategy aligned with your goals." },
          { title: "Launch", description: "We launch optimised campaigns with precise targeting." },
          { title: "Optimise", description: "We continuously refine to improve ROAS and scale." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default PPC;
