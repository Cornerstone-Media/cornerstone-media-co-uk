import { PenLine } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const ContentWriting = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Content Writing Services Birmingham | SEO Copywriting | Cornerstone Media"
      description="Professional content writing services in Birmingham. SEO-optimised blog posts, website copy, and content strategy to boost your rankings and engage your audience."
      canonical="https://cornerstonemedia.co.uk/content-writing"
    />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={PenLine}
        title="Content Writing Birmingham"
        subtitle="Content Writing Services"
        description="Engage your Birmingham audience and climb Google rankings with expertly crafted, SEO-optimised content that drives traffic and converts visitors into customers."
        benefits={[
          "SEO-optimised blog posts and articles that rank on Google",
          "Compelling website copy that converts visitors into leads",
          "Consistent content calendars tailored to your industry",
          "Keyword research and topic clustering for maximum visibility",
          "Brand voice development for authentic, recognisable messaging",
          "Landing page copywriting designed for high conversion rates",
        ]}
        topics={[
          { title: "Blog & Article Writing", description: "Regularly published, keyword-rich blog posts and articles that establish your Birmingham business as an industry authority and drive organic traffic." },
          { title: "Website Copywriting", description: "Persuasive, conversion-focused copy for your homepage, service pages, and about page that communicates your value and compels action." },
          { title: "Content Strategy", description: "Data-driven content plans built around keyword research, competitor analysis, and audience insights to maximise your search visibility." },
          { title: "Email & Newsletter Copy", description: "Engaging email sequences and newsletters that nurture leads, retain customers, and drive repeat business for your Birmingham company." },
        ]}
        processSteps={[
          { title: "Research", description: "We analyse your audience, keywords, and competitors." },
          { title: "Plan", description: "We build a content calendar aligned with your goals." },
          { title: "Write", description: "We craft SEO-optimised, engaging content." },
          { title: "Optimise", description: "We refine based on performance data and rankings." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default ContentWriting;
