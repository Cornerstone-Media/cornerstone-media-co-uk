import { Palette } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const SmallBusinessWebDesignBirmingham = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Small Business Web Design Birmingham | Affordable Websites | Cornerstone Media"
      description="Affordable small business web design in Birmingham. Professional websites for startups, sole traders, and small businesses. Fast, SEO-friendly, and built to generate leads."
      canonical="https://cornerstonemedialtd.com/small-business-web-design-birmingham"
    />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={Palette}
        title="Small Business Web Design Birmingham"
        subtitle="Affordable Professional Websites"
        description="Cornerstone Media provides affordable, professional website design for small businesses in Birmingham. Whether you are a sole trader, startup, or growing SME, we create websites that look and perform like enterprise-level sites — at prices that respect your budget and deliver genuine return on investment."
        benefits={[
          "Affordable packages designed specifically for small businesses and startups in Birmingham without compromising on quality or performance",
          "Professional, modern designs that build instant credibility and differentiate your business from competitors using DIY website builders",
          "Fast turnaround with typical small business websites delivered within 3-4 weeks from initial brief to live launch",
          "Built-in SEO foundations including proper heading structures, meta tags, mobile responsiveness, and local SEO setup for Birmingham searches",
          "Simple content management allowing you to update text, images, and blog posts independently without technical knowledge",
          "Fixed-price quotes with no hidden costs — you know exactly what you are paying before the project begins",
        ]}
        detailedSections={[
          {
            heading: "Why Small Businesses in Birmingham Need a Professional Website",
            paragraphs: [
              "In today's digital-first world, your website is often the first interaction a potential customer has with your business. For small businesses in Birmingham, a professional website is not a luxury — it is a necessity. It establishes credibility, provides essential business information, generates leads around the clock, and gives you a competitive edge over businesses that rely solely on social media or directory listings.",
              "Many small business owners in Birmingham attempt to build their own websites using DIY platforms. While these tools have their place, the results often look unprofessional, load slowly, rank poorly in Google, and fail to convert visitors into customers. The cost of a poorly performing website is not just in the platform fees — it is in the lost customers and missed opportunities that a professional site would capture.",
              "At Cornerstone Media, we understand the unique challenges small businesses face. Budget is a real constraint, time is limited, and every pound invested needs to deliver a return. That is why we have created small business web design packages that deliver professional-quality websites at accessible prices, with clear timelines and transparent costs from day one.",
            ],
          },
          {
            heading: "What You Get With Our Small Business Web Design Service",
            paragraphs: [
              "Every small business website we build includes a professional custom design (not a template), mobile-responsive development, basic SEO setup, Google Analytics integration, contact form functionality, and SSL security certification. We also provide a content management system and training so you can keep your website up to date without paying for every small change.",
              "We work with you to understand your business, your customers, and your goals. Whether you are a Birmingham tradesperson who needs a site that generates phone calls, a consultant who wants to showcase expertise, or a retailer building an online presence, we tailor the design and content to match your specific situation.",
              "Our small business websites are built on the same professional foundations as our larger projects. We do not cut corners on speed, security, or SEO just because the budget is smaller. Your website will load fast, rank well in Google, and present your business in the best possible light to every visitor.",
            ],
          },
        ]}
        topics={[
          { title: "Startup Websites", description: "Clean, professional websites for new businesses establishing their online presence in Birmingham. Designed to build credibility and capture early customers." },
          { title: "Tradesperson Websites", description: "Lead-generating websites for Birmingham tradespeople including plumbers, electricians, builders, and decorators with clear service areas and strong calls-to-action." },
          { title: "Professional Services Sites", description: "Authority-building websites for consultants, accountants, solicitors, and other professional service providers in Birmingham's business community." },
          { title: "Local Business Websites", description: "Location-optimised websites for Birmingham shops, restaurants, salons, and other local businesses with integrated Google Maps and local SEO setup." },
        ]}
        whyBirmingham={{
          heading: "Supporting Birmingham's Small Business Community",
          paragraphs: [
            "Birmingham has one of the most vibrant small business communities in the UK. From the independent shops of Harborne and Kings Heath to the creative businesses of Digbeth and Jewellery Quarter, small businesses are the backbone of the city's economy. We are proud to help these businesses compete online with professional websites that punch above their weight.",
            "As a Birmingham-based agency, we understand the local market and the challenges small businesses face here. We offer flexible payment options, quick turnaround times, and ongoing support — because we know that small business owners need responsive partners who respect their time and budget.",
          ],
        }}
        processSteps={[
          { title: "Free Consultation", description: "We discuss your business, goals, and budget to determine the right website solution for your needs." },
          { title: "Content & Design", description: "We gather your content, create a professional design, and present it for your feedback and approval." },
          { title: "Build & Launch", description: "We develop and test your website, then launch it with analytics, SSL, and basic SEO configured." },
          { title: "Handover & Support", description: "We provide CMS training and offer affordable ongoing maintenance and support options." },
        ]}
        faqs={[
          { question: "How much does a small business website cost?", answer: "Our small business website packages start from competitive prices with clear, fixed-cost quotes. We offer different tiers based on the number of pages and functionality required. Contact us for a free consultation and quote." },
          { question: "How long does it take to build a small business website?", answer: "Most small business websites are completed within 3-4 weeks from receiving your content and design approval. Simple sites with minimal pages can sometimes be delivered faster." },
          { question: "Do I need to provide all the content?", answer: "We can work with whatever content you have. If you need help writing website copy, our content writing team can create professional, SEO-optimised text for your pages at an additional cost." },
          { question: "What happens after my website is built?", answer: "We provide CMS training so you can make basic updates yourself. We also offer affordable monthly maintenance packages covering security updates, backups, and content changes." },
        ]}
        relatedServices={[
          { name: "Website Design Birmingham", path: "/website-design-birmingham", description: "Our full web design service for businesses of all sizes requiring custom design and advanced functionality." },
          { name: "WordPress Web Design Birmingham", path: "/wordpress-web-design-birmingham", description: "Custom WordPress development for businesses wanting the flexibility and power of the WordPress platform." },
          { name: "SEO Birmingham", path: "/seo-birmingham", description: "Once your website is live, our SEO services help you rank in Google and attract organic traffic." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default SmallBusinessWebDesignBirmingham;
