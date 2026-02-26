import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";

const SEO = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <ServicePageLayout
      icon={Search}
      title="Search Engine Optimisation"
      subtitle="SEO Services"
      description="Dominate search results with a comprehensive SEO strategy that drives organic traffic, builds authority, and delivers sustainable long-term growth."
      benefits={[
        "Comprehensive technical SEO audits and implementation",
        "Keyword research and content strategy tailored to your industry",
        "High-quality link building from authoritative domains",
        "Local SEO optimisation for location-based businesses",
        "Regular reporting on rankings, traffic, and conversions",
        "Core Web Vitals and page speed optimisation",
      ]}
      topics={[
        { title: "Technical SEO", description: "In-depth site audits covering crawlability, indexation, schema markup, site architecture, and Core Web Vitals to ensure search engines can find and understand your content." },
        { title: "On-Page Optimisation", description: "Strategic optimisation of title tags, meta descriptions, headings, and content to align with search intent and target keywords." },
        { title: "Content Strategy", description: "Data-driven content planning and creation that targets high-value keywords, answers user queries, and establishes topical authority." },
        { title: "Link Building", description: "White-hat outreach and digital PR to earn authoritative backlinks that strengthen your domain authority and search rankings." },
      ]}
      processSteps={[
        { title: "Audit", description: "Comprehensive analysis of your current SEO health." },
        { title: "Plan", description: "Prioritised roadmap of optimisations and content." },
        { title: "Implement", description: "Technical fixes, content creation, and link acquisition." },
        { title: "Grow", description: "Ongoing optimisation as rankings and traffic climb." },
      ]}
    />
    <Footer />
  </div>
);

export default SEO;
