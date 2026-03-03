import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const homepageFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What digital marketing services does Cornerstone Media offer in Birmingham?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cornerstone Media offers PPC advertising, SEO, social media marketing, website design, and website maintenance services to businesses in Birmingham and the West Midlands."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a digital marketing agency in Birmingham cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our pricing varies based on your goals and project scope. We offer a free strategy consultation to discuss your needs and provide a tailored quote. Call 07846 798 534 to get started."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose Cornerstone Media as your Birmingham marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We combine data-driven strategies with creative execution to deliver measurable growth. As a Birmingham-based agency, we understand the local market and provide personalised, results-focused service."
      }
    }
  ]
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Cornerstone Media | Digital Marketing Agency Birmingham | PPC, SEO & Web Design"
        description="Cornerstone Media is Birmingham's leading digital marketing agency. Expert PPC, SEO, social media, website design & maintenance. Get your free strategy call today."
        canonical="https://cornerstonemedialtd.com/"
        schema={homepageFAQSchema}
      />
      <Navbar />
      <main>
        <HeroSection />
        <div id="services">
          <ServicesOverview />
        </div>
        <StatsSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
