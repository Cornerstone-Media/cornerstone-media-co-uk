import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const SEO = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="SEO Agency Birmingham | Search Engine Optimisation | Cornerstone Media"
      description="Birmingham SEO services that drive organic traffic and rankings. Technical SEO, content strategy, and link building from Cornerstone Media. Free SEO audit."
      canonical="https://cornerstonemedia.co.uk/seo"
    />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={Search}
        title="SEO Services Birmingham"
        subtitle="Search Engine Optimisation"
        description="Dominate search results in Birmingham and beyond with a comprehensive SEO strategy that drives organic traffic, builds authority, and delivers sustainable long-term growth."
        benefits={[
          "Comprehensive technical SEO audits and implementation",
          "Keyword research and content strategy tailored to the Birmingham market",
          "High-quality link building from authoritative domains",
          "Local SEO optimisation for Birmingham and West Midlands businesses",
          "Regular reporting on rankings, traffic, and conversions",
          "Core Web Vitals and page speed optimisation",
        ]}
        topics={[
          { title: "Technical SEO", description: "In-depth site audits covering crawlability, indexation, schema markup, site architecture, and Core Web Vitals to ensure search engines can find and understand your content." },
          { title: "On-Page Optimisation", description: "Strategic optimisation of title tags, meta descriptions, headings, and content to align with search intent and target keywords." },
          { title: "Local SEO Birmingham", description: "Google Business Profile optimisation, local citations, and geo-targeted content to dominate local search results in Birmingham and the West Midlands." },
          { title: "Link Building", description: "White-hat outreach and digital PR to earn authoritative backlinks that strengthen your domain authority and search rankings." },
        ]}
        processSteps={[
          { title: "Audit", description: "Comprehensive analysis of your current SEO health." },
          { title: "Plan", description: "Prioritised roadmap of optimisations and content." },
          { title: "Implement", description: "Technical fixes, content creation, and link acquisition." },
          { title: "Grow", description: "Ongoing optimisation as rankings and traffic climb." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default SEO;
