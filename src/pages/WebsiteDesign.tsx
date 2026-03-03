import { Palette } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const WebsiteDesign = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Website Design Birmingham | Web Design & Development | Cornerstone Media"
      description="Professional website design in Birmingham. Conversion-focused, mobile-responsive websites built for speed and SEO. Get a free quote from Cornerstone Media."
      canonical="https://cornerstonemedialtd.com/website-design"
    />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={Palette}
        title="Website Design Birmingham"
        subtitle="Web Design & Development"
        description="Beautiful, conversion-focused websites for Birmingham businesses — built with cutting-edge technology that delivers exceptional user experiences and drives real results."
        benefits={[
          "Conversion-focused design that turns visitors into customers",
          "Fully responsive layouts optimised for all devices",
          "Lightning-fast performance and Core Web Vitals optimisation",
          "Intuitive UX/UI design based on user research and best practices",
          "SEO-friendly architecture built in from the ground up",
          "Custom animations and interactive elements that engage users",
        ]}
        topics={[
          { title: "Conversion-Focused Design", description: "Every element is strategically placed to guide visitors towards your goals, whether that's generating leads, making sales, or booking appointments." },
          { title: "UX/UI Design", description: "User-centred design process that creates intuitive, accessible interfaces your customers will love to use." },
          { title: "Mobile Optimisation", description: "Responsive design that delivers a flawless experience across smartphones, tablets, and desktops with mobile-first principles." },
          { title: "Performance & Speed", description: "Optimised code, image compression, and modern hosting to ensure your site loads in under two seconds on any device." },
        ]}
        processSteps={[
          { title: "Discovery", description: "We understand your brand, audience, and objectives." },
          { title: "Design", description: "We create wireframes and high-fidelity mockups." },
          { title: "Develop", description: "We build your site with clean, performant code." },
          { title: "Launch", description: "We deploy, test, and hand over your new website." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default WebsiteDesign;
