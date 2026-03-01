import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const RECAPTCHA_SITE_KEY = "6LePhXwsAAAAANQ4EUTzL2mYWpLI4B6jSX2vhrUM";

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const getRecaptchaToken = useCallback((): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!(window as any).grecaptcha) return reject("reCAPTCHA not loaded");
      (window as any).grecaptcha.ready(() => {
        (window as any).grecaptcha
          .execute(RECAPTCHA_SITE_KEY, { action: "contact_submit" })
          .then(resolve)
          .catch(reject);
      });
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const recaptchaToken = await getRecaptchaToken();
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: { ...formData, recaptchaToken },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      navigate("/thank-you");
    } catch (err: any) {
      console.error(err);
      toast({ title: "Something went wrong", description: err?.message || "Please try again or call us directly.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Cornerstone Media | Digital Marketing Agency Birmingham"
        description="Get in touch with Cornerstone Media, Birmingham's digital marketing experts. Call 07846 798 534 or fill in our form for a free strategy consultation."
        canonical="https://cornerstonemedia.co.uk/contact"
      />
      <Navbar />

      <main>
        <section className="section-padding pt-48">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16 text-center"
            >
              <h1 className="mb-6 font-heading text-4xl font-extrabold text-foreground md:text-6xl">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="mx-auto max-w-2xl font-body text-lg text-muted-foreground">
                Ready to take your digital marketing to the next level? Fill in the form below or call us on{" "}
                <a href="tel:07846798534" className="text-secondary hover:underline">07846 798 534</a>
                {" "}and we'll get back to you within 24 hours.
              </p>
            </motion.div>

            <div className="grid gap-12 lg:grid-cols-5">
              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="flex flex-col gap-8 lg:col-span-2"
              >
                {[
                  { icon: Phone, label: "Phone", value: "07846 798 534", href: "tel:07846798534" },
                  { icon: Mail, label: "Email", value: "info@cornerstonemedialtd.com", href: "mailto:info@cornerstonemedialtd.com" },
                  { icon: MapPin, label: "Location", value: "Birmingham, West Midlands", href: undefined },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="glass-card flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/15">
                      <Icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold text-muted-foreground">{label}</p>
                      {href ? (
                        <a href={href} className="font-body text-foreground hover:text-secondary transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="font-body text-foreground">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card space-y-6 p-8 lg:col-span-3"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="font-heading text-sm font-medium text-foreground">Name *</label>
                    <Input name="name" value={formData.name} onChange={handleChange} required maxLength={100} placeholder="Your name" className="border-border bg-muted/30" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-heading text-sm font-medium text-foreground">Email *</label>
                    <Input name="email" type="email" value={formData.email} onChange={handleChange} required maxLength={255} placeholder="you@example.com" className="border-border bg-muted/30" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="font-heading text-sm font-medium text-foreground">Phone</label>
                    <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} maxLength={20} placeholder="Your phone number" className="border-border bg-muted/30" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-heading text-sm font-medium text-foreground">Company</label>
                    <Input name="company" value={formData.company} onChange={handleChange} maxLength={100} placeholder="Your company" className="border-border bg-muted/30" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-heading text-sm font-medium text-foreground">Message *</label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} required maxLength={1000} rows={5} placeholder="Tell us about your project and goals..." className="border-border bg-muted/30" />
                </div>

                <Button type="submit" disabled={submitting} className="gradient-btn w-full border-0 text-base">
                  {submitting ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
                </Button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
