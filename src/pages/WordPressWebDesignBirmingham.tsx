import { Palette } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const WordPressWebDesignBirmingham = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="WordPress Web Design Birmingham | Custom WordPress Sites | Cornerstone Media"
      description="WordPress web design agency in Birmingham. Custom WordPress websites built for speed, SEO, and easy content management. Professional WordPress development for Birmingham businesses."
      canonical="https://cornerstone-media.co.uk/wordpress-web-design-birmingham"
    />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={Palette}
        title="WordPress Web Design Birmingham"
        subtitle="Custom WordPress Development"
        description="Cornerstone Media designs and builds custom WordPress websites for Birmingham businesses. We create bespoke WordPress sites that are fast, secure, SEO-optimised, and easy to manage — giving you a professional online presence with the flexibility to update content independently whenever you need to."
        benefits={[
          "Custom WordPress theme development — no off-the-shelf templates — ensuring your website is unique to your Birmingham business and brand",
          "Intuitive content management with custom post types, page builders, and admin interfaces tailored to your specific content needs",
          "WooCommerce integration for Birmingham e-commerce businesses needing full online store functionality with secure payment processing",
          "Speed-optimised WordPress development with caching, image optimisation, and clean code for sub-2-second load times",
          "SEO-friendly WordPress architecture with proper heading structures, schema markup, and technical SEO best practices built in",
          "Ongoing WordPress maintenance including security patches, plugin updates, backups, and performance monitoring",
        ]}
        detailedSections={[
          {
            heading: "Why WordPress Is the Right Choice for Birmingham Businesses",
            paragraphs: [
              "WordPress powers over 43% of all websites on the internet, making it the world's most popular content management system. Its popularity is well-deserved: WordPress combines powerful flexibility with user-friendly content management, a vast ecosystem of plugins and integrations, and a strong community of developers constantly improving the platform. For Birmingham businesses, WordPress offers the perfect balance of professional capability and day-to-day usability.",
              "Unlike website builders that restrict your options, WordPress gives you complete control over your site's design, functionality, and content. Whether you need a simple brochure website, a complex e-commerce store, a membership portal, or a content-rich blog, WordPress can be customised to deliver exactly what your business requires. And because you own the platform, you are never locked into a proprietary system or subscription model.",
              "At Cornerstone Media, we build WordPress websites from scratch. We do not use pre-made themes or page builder plugins that add bloat and slow down your site. Every WordPress website we create is custom-developed to your exact specifications, ensuring maximum performance, security, and a design that perfectly represents your Birmingham business.",
            ],
          },
        ]}
        topics={[
          { title: "Custom Theme Development", description: "Bespoke WordPress themes designed from scratch to match your brand identity, with custom layouts, typography, and interactive elements unique to your business." },
          { title: "WooCommerce Stores", description: "Full e-commerce functionality with product management, secure payment gateways, shipping calculations, and inventory tracking for Birmingham online retailers." },
          { title: "Plugin & Integration Development", description: "Custom plugin development and third-party integrations connecting your WordPress site with CRM systems, booking tools, payment processors, and marketing platforms." },
          { title: "WordPress Migration", description: "Seamless migration from other platforms to WordPress, preserving SEO equity, URL structures, and content while upgrading to a more powerful content management system." },
        ]}
        whyBirmingham={{
          heading: "Birmingham's Trusted WordPress Agency",
          paragraphs: [
            "Birmingham businesses need websites that work as hard as they do. Our WordPress development team understands the local market and builds websites that are designed to convert Birmingham customers — whether you are a professional services firm in Colmore Row, a retailer in the Bullring, or a tradesperson serving communities across the West Midlands.",
            "As a local WordPress agency, we provide face-to-face collaboration, hands-on training, and ongoing support. When you need changes or have questions about your WordPress site, you are speaking to a real person in Birmingham who knows your business and your website inside out.",
          ],
        }}
        processSteps={[
          { title: "Discovery & Scope", description: "We define your requirements, content structure, functionality needs, and design preferences through collaborative workshops." },
          { title: "Design & Prototype", description: "We create custom design mockups in Figma, iterate based on your feedback, and finalise the visual direction before development." },
          { title: "WordPress Build", description: "We develop your custom WordPress theme with responsive layouts, optimised performance, and intuitive content management." },
          { title: "Launch & Train", description: "We deploy your website, provide comprehensive CMS training, and offer ongoing maintenance and support packages." },
        ]}
        faqs={[
          { question: "How much does a WordPress website cost in Birmingham?", answer: "Custom WordPress websites typically start from a few thousand pounds for brochure sites, with e-commerce and complex functionality costing more. We provide detailed quotes after understanding your specific requirements during an initial consultation." },
          { question: "Can I update my WordPress website myself?", answer: "Absolutely. One of WordPress's greatest strengths is its user-friendly admin interface. We build intuitive content management areas and provide training so you can update text, images, blog posts, and pages independently." },
          { question: "Is WordPress secure?", answer: "WordPress is secure when properly maintained. We implement security best practices including firewalls, login protection, file permissions, and regular updates. Our maintenance packages include ongoing security monitoring and patching." },
          { question: "Do you build WordPress sites with page builders?", answer: "No. We custom-develop WordPress themes using clean code rather than relying on heavy page builder plugins. This results in faster load times, better SEO performance, and more reliable long-term maintenance." },
        ]}
        relatedServices={[
          { name: "Website Design Birmingham", path: "/website-design-birmingham", description: "Our main web design service covering all technologies and approaches for Birmingham businesses." },
          { name: "E-commerce Website Design Birmingham", path: "/ecommerce-website-design-birmingham", description: "Online store design and development using WooCommerce and other e-commerce platforms." },
          { name: "Small Business Web Design Birmingham", path: "/small-business-web-design-birmingham", description: "Affordable professional website design packages tailored for small businesses and startups." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default WordPressWebDesignBirmingham;
