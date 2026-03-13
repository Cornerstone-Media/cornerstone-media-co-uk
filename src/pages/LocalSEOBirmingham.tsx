import { MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Local SEO",
  "provider": { "@type": "ProfessionalService", "name": "Cornerstone Media", "url": "https://cornerstone-media.co.uk", "address": { "@type": "PostalAddress", "addressLocality": "Birmingham", "addressRegion": "West Midlands", "addressCountry": "GB" } },
  "areaServed": { "@type": "City", "name": "Birmingham" },
  "description": "Local SEO services for Birmingham businesses. Google Business Profile optimisation, local citations, map pack rankings, and geo-targeted content strategies."
};

const LocalSEOBirmingham = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Local SEO Birmingham | Google Maps & Local Search | Cornerstone Media"
      description="Local SEO services in Birmingham. Dominate Google Maps, local search results, and the map pack. Google Business Profile optimisation, citations, and local content strategy."
      canonical="https://cornerstonemedialtd.com/local-seo-birmingham"
      schema={schema}
    />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={MapPin}
        title="Local SEO Birmingham"
        subtitle="Local Search Optimisation"
        description="Cornerstone Media's local SEO services help Birmingham businesses dominate Google Maps, the local map pack, and location-based search results. We ensure your business appears prominently when nearby customers search for your products or services, driving footfall, phone calls, and local enquiries."
        benefits={[
          "Google Business Profile setup, optimisation, and ongoing management to maximise visibility in Google Maps and local search",
          "Consistent NAP (Name, Address, Phone) citation building across authoritative local directories and industry-specific platforms",
          "Geo-targeted content creation with Birmingham neighbourhood and area-specific landing pages to capture hyper-local search traffic",
          "Local link building from Birmingham-based publications, community organisations, and relevant regional websites",
          "Review generation and reputation management strategies to build social proof and improve local ranking signals",
          "Local competitor analysis identifying gaps and opportunities in your Birmingham market's search landscape",
        ]}
        detailedSections={[
          {
            heading: "Why Local SEO Matters for Birmingham Businesses",
            paragraphs: [
              "When someone in Birmingham searches for a product or service near them, Google displays a completely different set of results compared to a standard organic search. The local pack — those three business listings with a map that appear at the top of search results — captures the majority of clicks for local intent queries. If your Birmingham business is not appearing in this local pack, you are losing customers to competitors who are.",
              "Local SEO is the process of optimising your online presence to rank in these location-based searches. It involves a distinct set of ranking factors including your Google Business Profile completeness, the consistency of your business information across the web, the quantity and quality of customer reviews, and the relevance of your website content to local search queries. Each of these factors requires specific expertise to optimise effectively.",
              "At Cornerstone Media, our local SEO specialists understand the Birmingham market intimately. We know which local directories carry authority, how to structure location-specific content for areas like Edgbaston, Moseley, Harborne, and the city centre, and how to leverage local partnerships for link building. This hyperlocal knowledge is something that national SEO agencies simply cannot offer.",
            ],
          },
          {
            heading: "Our Local SEO Strategy for Birmingham",
            paragraphs: [
              "Our local SEO process starts with a comprehensive audit of your current local presence. We analyse your Google Business Profile, existing citations, review profile, website content, and competitor landscape to identify exactly where you stand and what needs to improve. This audit forms the foundation of a prioritised action plan designed to move you into the local pack for your target keywords.",
              "Google Business Profile optimisation is the cornerstone of local SEO. We ensure every element of your profile is fully completed and optimised — from your business categories and service areas to your photos, posts, and Q&A section. We also implement a consistent posting schedule to signal to Google that your business is active and engaged with its local community.",
              "Citation building involves listing your business on relevant local and industry directories with perfectly consistent information. Inconsistencies in your business name, address, or phone number across different websites confuse Google and harm your local rankings. We audit your existing citations, correct any inconsistencies, and build new citations on platforms that matter for Birmingham businesses.",
            ],
          },
        ]}
        topics={[
          { title: "Google Business Profile Management", description: "Complete setup and ongoing optimisation of your Google Business Profile including categories, attributes, photos, posts, Q&A, and product/service listings to maximise your visibility in Maps and local search." },
          { title: "Local Citation Building", description: "Strategic listing of your business across authoritative directories including Yell, Thomson Local, Bing Places, Apple Maps, and industry-specific platforms with consistent NAP information." },
          { title: "Local Content Strategy", description: "Creation of location-specific landing pages targeting Birmingham neighbourhoods and surrounding areas, blog content addressing local topics, and locally relevant service pages." },
          { title: "Review Management", description: "Implementation of review generation workflows, monitoring and responding to customer reviews, and building a strong review profile that enhances both rankings and customer trust." },
        ]}
        whyBirmingham={{
          heading: "Local SEO Expertise Rooted in Birmingham",
          paragraphs: [
            "Birmingham's local search landscape is uniquely competitive. With thousands of businesses competing for visibility across diverse sectors — from hospitality in Brindleyplace to professional services in Colmore Row — ranking locally requires more than generic SEO tactics. It demands specific knowledge of Birmingham's commercial geography and search behaviour.",
            "Our team lives and works in Birmingham. We understand which areas drive the most valuable local searches, how to target multiple service areas effectively, and how seasonal events like the Frankfurt Christmas Market or Birmingham Pride create search demand spikes. This local intelligence informs every aspect of our local SEO strategies.",
          ],
        }}
        processSteps={[
          { title: "Local Audit", description: "We analyse your Google Business Profile, citations, reviews, and competitors to establish your current local search position." },
          { title: "Optimise & Build", description: "We optimise your GBP, correct citation inconsistencies, and build new listings on authoritative platforms." },
          { title: "Content & Links", description: "We create locally relevant content and build links from Birmingham-based sources to strengthen local authority." },
          { title: "Monitor & Grow", description: "We track local rankings, review growth, and search visibility, continuously refining the strategy." },
        ]}
        faqs={[
          { question: "How long does local SEO take to show results?", answer: "Most Birmingham businesses see improvements in local rankings within 4-8 weeks, with significant visibility gains in the Google Map Pack within 3-6 months depending on competition levels." },
          { question: "Do I need a physical address for local SEO?", answer: "A physical address helps for Google Maps visibility, but service-area businesses without a storefront can still rank well locally by defining service areas in their Google Business Profile." },
          { question: "How important are reviews for local SEO?", answer: "Extremely important. Reviews are a top-three local ranking factor. Both the quantity and quality of your Google reviews directly influence your position in the local pack." },
          { question: "Can you help with multiple locations?", answer: "Yes. We manage local SEO for businesses with multiple locations across Birmingham and the West Midlands, each with its own optimised Google Business Profile and location-specific content." },
        ]}
        relatedServices={[
          { name: "SEO Birmingham", path: "/seo-birmingham", description: "Comprehensive SEO services combining local, technical, and organic search strategies for maximum visibility." },
          { name: "Technical SEO Birmingham", path: "/technical-seo-birmingham", description: "Fix the technical foundations of your website to support stronger local and organic rankings." },
          { name: "SEO Audit Birmingham", path: "/seo-audit-birmingham", description: "Full SEO audit identifying every opportunity to improve your search visibility in Birmingham." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default LocalSEOBirmingham;
