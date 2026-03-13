import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const homepageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What digital marketing services does Cornerstone Media offer in Birmingham?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cornerstone Media offers PPC advertising, SEO, social media marketing, website design, content writing, and website maintenance services to businesses in Birmingham and the West Midlands."
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
  },
  {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    "name": "Cornerstone Media",
    "description": "Digital marketing agency in Birmingham specialising in PPC, SEO, social media marketing, website design, and website maintenance.",
    "url": "https://cornerstone-media.co.uk",
    "telephone": "+447846798534",
    "email": "info@cornerstone-media.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Birmingham",
      "addressRegion": "West Midlands",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.4862,
      "longitude": -1.8904
    },
    "areaServed": [
      { "@type": "City", "name": "Birmingham" },
      { "@type": "AdministrativeArea", "name": "West Midlands" }
    ],
    "knowsAbout": ["PPC Advertising", "SEO", "Social Media Marketing", "Website Design", "Content Writing", "Website Maintenance"],
    "priceRange": "££",
    "sameAs": []
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Digital Marketing Birmingham | Cornerstone Media"
        description="Cornerstone Media is Birmingham's leading digital marketing agency. Expert PPC, SEO, social media marketing, website design & maintenance. Get your free strategy call today."
        canonical="https://cornerstone-media.co.uk/"
        schema={homepageSchema}
      />
      <Navbar />
      <main role="main">
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