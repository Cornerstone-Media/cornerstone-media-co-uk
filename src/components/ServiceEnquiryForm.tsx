import { useState, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const RECAPTCHA_SITE_KEY = "6LePhXwsAAAAANQ4EUTzL2mYWpLI4B6jSX2vhrUM";

const serviceOptions = [
  "SEO",
  "PPC / Google Ads",
  "Social Media Marketing",
  "Website Design",
  "Content Writing",
  "Website Maintenance",
  "Other",
];

interface ServiceEnquiryFormProps {
  serviceName?: string;
  heading?: string;
}

const ServiceEnquiryForm = ({
  serviceName = "General Enquiry",
  heading = "Get Your Free Consultation",
}: ServiceEnquiryFormProps) => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [gdprConsent, setGdprConsent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: serviceName,
    message: "",
  });

  useEffect(() => {
    // Load reCAPTCHA if not already loaded
    if (!(window as any).grecaptcha) {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const getRecaptchaToken = useCallback((): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!(window as any).grecaptcha) return reject("reCAPTCHA not loaded");
      (window as any).grecaptcha.ready(() => {
        (window as any).grecaptcha
          .execute(RECAPTCHA_SITE_KEY, { action: "service_enquiry" })
          .then(resolve)
          .catch(reject);
      });
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gdprConsent) {
      toast({ title: "Please accept the privacy policy", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const recaptchaToken = await getRecaptchaToken();
      const sourcePage = window.location.pathname;
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: { ...formData, recaptchaToken, source_page: sourcePage },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      // GA4 dataLayer event
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "form_submission",
        form_type: "enquiry",
        service_page: sourcePage,
        form_location: "service_page_body",
      });

      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      toast({ title: "Something went wrong", description: err?.message || "Please try again or call us directly.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="enquiry-form" className="section-padding bg-card/50">
        <div className="mx-auto max-w-2xl text-center">
          <CheckCircle className="mx-auto mb-4 h-12 w-12 text-accent" />
          <h2 className="mb-4 font-heading text-2xl font-bold text-foreground">Thank you!</h2>
          <p className="font-body text-muted-foreground">We'll be in touch within 1 business day.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="enquiry-form" className="section-padding bg-card/50">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h2 className="mb-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
            {heading}
          </h2>
          <p className="font-body text-muted-foreground">
            No obligation. No pushy sales calls. Just expert advice.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card space-y-5 p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="eq-name" className="font-heading text-sm font-medium text-foreground">Full Name *</label>
              <Input id="eq-name" name="name" value={formData.name} onChange={handleChange} required maxLength={100} placeholder="Your full name" className="border-border bg-muted/30" autoComplete="name" />
            </div>
            <div className="space-y-2">
              <label htmlFor="eq-company" className="font-heading text-sm font-medium text-foreground">Business Name</label>
              <Input id="eq-company" name="company" value={formData.company} onChange={handleChange} maxLength={100} placeholder="Your business name" className="border-border bg-muted/30" autoComplete="organization" />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="eq-phone" className="font-heading text-sm font-medium text-foreground">Phone Number *</label>
              <Input id="eq-phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required maxLength={20} placeholder="Your phone number" className="border-border bg-muted/30" autoComplete="tel" />
            </div>
            <div className="space-y-2">
              <label htmlFor="eq-email" className="font-heading text-sm font-medium text-foreground">Email Address *</label>
              <Input id="eq-email" name="email" type="email" value={formData.email} onChange={handleChange} required maxLength={255} placeholder="you@example.com" className="border-border bg-muted/30" autoComplete="email" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="eq-service" className="font-heading text-sm font-medium text-foreground">Service of Interest *</label>
            <select
              id="eq-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="flex h-10 w-full rounded-md border border-border bg-muted/30 px-3 py-2 font-body text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {serviceOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="eq-message" className="font-heading text-sm font-medium text-foreground">Tell us about your project</label>
            <Textarea id="eq-message" name="message" value={formData.message} onChange={handleChange} maxLength={1000} rows={4} placeholder="Briefly describe your project and goals..." className="border-border bg-muted/30" />
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={gdprConsent}
              onChange={(e) => setGdprConsent(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-border accent-secondary"
              required
            />
            <span className="font-body text-xs text-muted-foreground leading-relaxed">
              I agree to Cornerstone Media's{" "}
              <a href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</a>{" "}
              and consent to being contacted about my enquiry.
            </span>
          </label>

          <Button type="submit" disabled={submitting} className="gradient-btn w-full border-0 text-base">
            {submitting ? "Sending..." : <>Send My Enquiry <Send className="ml-2 h-4 w-4" /></>}
          </Button>

          <p className="text-center font-body text-xs text-muted-foreground">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-secondary">Privacy Policy</a> and{" "}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-secondary">Terms of Service</a> apply.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ServiceEnquiryForm;
