import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";
import MobileCTABar from "./components/MobileCTABar";
import ScrollCTA from "./components/ScrollCTA";
import { AuthProvider } from "./hooks/useAuth";
import Index from "./pages/Index";
import PPC from "./pages/PPC";
import SEO from "./pages/SEO";
import SocialMedia from "./pages/SocialMedia";
import ContentWriting from "./pages/ContentWriting";
import WebsiteDesign from "./pages/WebsiteDesign";
import WebsiteMaintenance from "./pages/WebsiteMaintenance";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import About from "./pages/About";
import MeetTheTeam from "./pages/MeetTheTeam";
import NotFound from "./pages/NotFound";
import OGImageGenerator from "./pages/OGImageGenerator";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Terms from "./pages/Terms";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

// Admin
import AdminLogin from "./pages/AdminLogin";
import AdminResetPassword from "./pages/AdminResetPassword";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPosts from "./pages/admin/AdminPosts";
import AdminPostEditor from "./pages/admin/AdminPostEditor";
import AdminCategories from "./pages/admin/AdminCategories";
import AdminTags from "./pages/admin/AdminTags";

// SEO Supporting Pages
import LocalSEOBirmingham from "./pages/LocalSEOBirmingham";
import TechnicalSEOBirmingham from "./pages/TechnicalSEOBirmingham";
import SEOAuditBirmingham from "./pages/SEOAuditBirmingham";

// PPC Supporting Pages
import GoogleAdsManagementBirmingham from "./pages/GoogleAdsManagementBirmingham";
import PPCManagementBirmingham from "./pages/PPCManagementBirmingham";
import RemarketingAdsBirmingham from "./pages/RemarketingAdsBirmingham";

// Social Media Supporting Pages
import FacebookAdsBirmingham from "./pages/FacebookAdsBirmingham";
import InstagramMarketingBirmingham from "./pages/InstagramMarketingBirmingham";
import LinkedInAdsBirmingham from "./pages/LinkedInAdsBirmingham";

// Website Design Supporting Pages
import WordPressWebDesignBirmingham from "./pages/WordPressWebDesignBirmingham";
import EcommerceWebDesignBirmingham from "./pages/EcommerceWebDesignBirmingham";
import SmallBusinessWebDesignBirmingham from "./pages/SmallBusinessWebDesignBirmingham";

// Location Pages
import DigitalMarketingSolihull from "./pages/DigitalMarketingSolihull";
import DigitalMarketingSuttonColdfield from "./pages/DigitalMarketingSuttonColdfield";
import DigitalMarketingWolverhampton from "./pages/DigitalMarketingWolverhampton";
import DigitalMarketingWalsall from "./pages/DigitalMarketingWalsall";
import DigitalMarketingDudley from "./pages/DigitalMarketingDudley";
import DigitalMarketingWestBromwich from "./pages/DigitalMarketingWestBromwich";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/meet-the-team" element={<MeetTheTeam />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />

            {/* Blog */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/terms" element={<Terms />} />

            {/* Service Pillar Pages */}
            <Route path="/ppc-birmingham" element={<PPC />} />
            <Route path="/seo-birmingham" element={<SEO />} />
            <Route path="/social-media-marketing-birmingham" element={<SocialMedia />} />
            <Route path="/website-design-birmingham" element={<WebsiteDesign />} />
            <Route path="/content-writing" element={<ContentWriting />} />
            <Route path="/website-maintenance" element={<WebsiteMaintenance />} />

            {/* SEO Supporting Pages */}
            <Route path="/local-seo-birmingham" element={<LocalSEOBirmingham />} />
            <Route path="/technical-seo-birmingham" element={<TechnicalSEOBirmingham />} />
            <Route path="/seo-audit-birmingham" element={<SEOAuditBirmingham />} />

            {/* PPC Supporting Pages */}
            <Route path="/google-ads-management-birmingham" element={<GoogleAdsManagementBirmingham />} />
            <Route path="/ppc-management-birmingham" element={<PPCManagementBirmingham />} />
            <Route path="/remarketing-ads-birmingham" element={<RemarketingAdsBirmingham />} />

            {/* Social Media Supporting Pages */}
            <Route path="/facebook-ads-birmingham" element={<FacebookAdsBirmingham />} />
            <Route path="/instagram-marketing-birmingham" element={<InstagramMarketingBirmingham />} />
            <Route path="/linkedin-ads-birmingham" element={<LinkedInAdsBirmingham />} />

            {/* Website Design Supporting Pages */}
            <Route path="/wordpress-web-design-birmingham" element={<WordPressWebDesignBirmingham />} />
            <Route path="/ecommerce-website-design-birmingham" element={<EcommerceWebDesignBirmingham />} />
            <Route path="/small-business-web-design-birmingham" element={<SmallBusinessWebDesignBirmingham />} />

            {/* Location Pages */}
            <Route path="/digital-marketing-solihull" element={<DigitalMarketingSolihull />} />
            <Route path="/digital-marketing-sutton-coldfield" element={<DigitalMarketingSuttonColdfield />} />
            <Route path="/digital-marketing-wolverhampton" element={<DigitalMarketingWolverhampton />} />
            <Route path="/digital-marketing-walsall" element={<DigitalMarketingWalsall />} />
            <Route path="/digital-marketing-dudley" element={<DigitalMarketingDudley />} />
            <Route path="/digital-marketing-west-bromwich" element={<DigitalMarketingWestBromwich />} />

            {/* Admin */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/reset-password" element={<AdminResetPassword />} />
            <Route element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/posts" element={<AdminPosts />} />
              <Route path="/admin/posts/:id" element={<AdminPostEditor />} />
              <Route path="/admin/categories" element={<AdminCategories />} />
              <Route path="/admin/tags" element={<AdminTags />} />
            </Route>

            {/* 301-style Redirects for old URLs */}
            <Route path="/ppc" element={<Navigate to="/ppc-birmingham" replace />} />
            <Route path="/seo" element={<Navigate to="/seo-birmingham" replace />} />
            <Route path="/social-media" element={<Navigate to="/social-media-marketing-birmingham" replace />} />
            <Route path="/website-design" element={<Navigate to="/website-design-birmingham" replace />} />

            {/* Utility */}
            <Route path="/og-generator" element={<OGImageGenerator />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <MobileCTABar />
          <ScrollCTA />
          <CookieConsent />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
