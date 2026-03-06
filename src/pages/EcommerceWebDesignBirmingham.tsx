import { Palette } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const EcommerceWebDesignBirmingham = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="E-commerce Website Design Birmingham | Online Store Development | Cornerstone Media"
      description="E-commerce website design in Birmingham. Custom online stores with secure checkout, payment integration, and conversion-optimised design. WooCommerce and Shopify specialists."
      canonical="https://cornerstonemedialtd.com/ecommerce-website-design-birmingham"
    />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={Palette}
        title="E-commerce Website Design Birmingham"
        subtitle="Online Store Design & Development"
        description="Cornerstone Media designs and develops high-converting e-commerce websites for Birmingham businesses. We build custom online stores with intuitive product navigation, secure checkout processes, and conversion-optimised design — helping you sell more products to more customers across Birmingham, the UK, and beyond."
        benefits={[
          "Conversion-optimised product pages with professional photography integration, detailed descriptions, reviews, and clear add-to-cart functionality",
          "Secure checkout processes with multiple payment gateways including Stripe, PayPal, Apple Pay, and Google Pay for maximum customer convenience",
          "Mobile-first e-commerce design ensuring a seamless shopping experience on smartphones where the majority of online shopping now occurs",
          "Inventory management systems with real-time stock tracking, low-stock alerts, and automated product availability updates",
          "SEO-optimised product categories and pages with structured data markup for Google Shopping rich results and organic product rankings",
          "Analytics and conversion tracking with Google Analytics 4 e-commerce events, Facebook Pixel, and custom revenue reporting dashboards",
        ]}
        detailedSections={[
          {
            heading: "Why Birmingham Businesses Need a Professional E-commerce Website",
            paragraphs: [
              "Online retail in the UK continues to grow year on year, and Birmingham businesses that sell products need an e-commerce website that competes with the best in their market. A professionally designed online store does more than display products — it creates a shopping experience that builds trust, reduces friction, and guides customers smoothly from browsing to purchase.",
              "The difference between a high-performing e-commerce website and an underperforming one often comes down to design decisions that affect conversion rate. Page speed, mobile usability, product image quality, checkout simplicity, payment options, and trust signals all directly influence whether a visitor becomes a buyer. Even small improvements in conversion rate can dramatically increase revenue without requiring additional traffic.",
              "At Cornerstone Media, we build e-commerce websites with conversion at the centre of every design decision. We analyse your target customers' buying behaviour, study successful competitors, and apply proven e-commerce UX best practices to create online stores that maximise your revenue per visitor.",
            ],
          },
        ]}
        topics={[
          { title: "WooCommerce Development", description: "Custom WooCommerce stores built on WordPress with bespoke designs, product configurators, subscription billing, and seamless integration with your existing business systems." },
          { title: "Shopify Design", description: "Professional Shopify store design with custom themes, app integrations, and optimised checkout flows for Birmingham businesses wanting a hosted e-commerce solution." },
          { title: "Payment Gateway Integration", description: "Secure payment processing with Stripe, PayPal, Klarna, and other gateways. We implement PCI-compliant checkout flows that maximise payment completion rates." },
          { title: "Product Catalogue Management", description: "Intuitive product management systems with categories, filters, variants, bulk import/export, and SEO-friendly product URLs and descriptions." },
        ]}
        whyBirmingham={{
          heading: "E-commerce Website Design for Birmingham Retailers",
          paragraphs: [
            "Birmingham has a thriving retail sector, from independent boutiques in the Great Western Arcade to established brands in the Bullring. Many Birmingham retailers are expanding online and need e-commerce websites that capture the quality and personality of their physical stores in a digital format.",
            "Our team works with Birmingham retailers to understand their products, customers, and competitive landscape. We build online stores that complement your physical presence, support local delivery options, and enable click-and-collect services that bridge the gap between your online and offline channels.",
          ],
        }}
        processSteps={[
          { title: "Requirements Gathering", description: "We document your product catalogue, payment needs, shipping requirements, and integration needs to define the project scope." },
          { title: "UX & Design", description: "We design the shopping experience including product pages, category navigation, cart, and checkout with conversion optimisation." },
          { title: "Build & Integrate", description: "We develop your store, integrate payment gateways, set up shipping rules, and connect inventory management systems." },
          { title: "Launch & Optimise", description: "We launch your store, monitor initial performance, fix any issues, and provide training on product and order management." },
        ]}
        faqs={[
          { question: "How much does an e-commerce website cost?", answer: "E-commerce websites vary significantly based on product catalogue size, custom functionality, and design complexity. Typical projects for Birmingham businesses range from several thousand pounds for a standard store to significantly more for complex custom builds. We provide detailed quotes after understanding your requirements." },
          { question: "WooCommerce or Shopify — which is better?", answer: "Both are excellent platforms. WooCommerce offers more customisation flexibility and no monthly platform fees, making it ideal for businesses wanting full control. Shopify is simpler to manage with built-in hosting and support, suited to businesses wanting a more hands-off approach. We advise based on your specific needs." },
          { question: "Can you migrate my existing online store?", answer: "Yes. We handle e-commerce migrations from all major platforms, preserving your product data, customer accounts, order history, and SEO rankings throughout the transition." },
          { question: "Do you offer ongoing e-commerce support?", answer: "Yes. We offer maintenance packages that include security updates, product uploads, seasonal promotions setup, and performance monitoring for your Birmingham online store." },
        ]}
        relatedServices={[
          { name: "Website Design Birmingham", path: "/website-design-birmingham", description: "Our comprehensive web design services for all types of websites, not just e-commerce." },
          { name: "WordPress Web Design Birmingham", path: "/wordpress-web-design-birmingham", description: "Custom WordPress development including WooCommerce e-commerce stores for Birmingham businesses." },
          { name: "SEO Birmingham", path: "/seo-birmingham", description: "Drive organic traffic to your online store with SEO strategies tailored for e-commerce visibility." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default EcommerceWebDesignBirmingham;
