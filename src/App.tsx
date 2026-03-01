import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ppc" element={<PPC />} />
          <Route path="/services" element={<Services />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/content-writing" element={<ContentWriting />} />
          <Route path="/website-design" element={<WebsiteDesign />} />
          <Route path="/website-maintenance" element={<WebsiteMaintenance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
