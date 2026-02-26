import { Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const WebsiteMaintenance = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Website Maintenance Birmingham | Ongoing Support & Care | Cornerstone Media"
      description="Professional website maintenance in Birmingham. Security updates, backups, performance monitoring & content updates. Keep your site secure and fast."
      canonical="https://cornerstonemedia.co.uk/website-maintenance"
    />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={Wrench}
        title="Website Maintenance Birmingham"
        subtitle="Ongoing Support & Care"
        description="Keep your website secure, fast, and up-to-date with our comprehensive maintenance plans for Birmingham businesses. We handle the technical details so you can focus on growing."
        benefits={[
          "Regular security updates and vulnerability patching",
          "Automated and manual backups with quick restoration",
          "24/7 uptime monitoring with instant alerts",
          "Performance optimisation and speed improvements",
          "Content updates and minor design changes included",
          "Monthly reporting on site health and performance",
        ]}
        topics={[
          { title: "Security Updates", description: "Proactive security patching, firewall management, and malware scanning to protect your website and customer data from threats." },
          { title: "Backups & Recovery", description: "Automated daily backups stored securely off-site, with rapid restoration capability to minimise any potential downtime." },
          { title: "Performance Monitoring", description: "Continuous monitoring of site speed, uptime, and Core Web Vitals with proactive optimisation to maintain peak performance." },
          { title: "Content & Updates", description: "Regular content updates, plugin management, and minor design adjustments to keep your website fresh and current." },
        ]}
        processSteps={[
          { title: "Onboard", description: "We audit your current site and set up monitoring." },
          { title: "Secure", description: "We implement security measures and backup systems." },
          { title: "Monitor", description: "We continuously track performance and uptime." },
          { title: "Report", description: "We deliver monthly reports on site health." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default WebsiteMaintenance;
