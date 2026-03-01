import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Thank You | Cornerstone Media"
        description="Thanks for getting in touch with Cornerstone Media. We'll respond within 24 hours."
        canonical="https://cornerstonemedia.co.uk/thank-you"
      />
      <Navbar />

      <main className="section-padding flex min-h-[70vh] items-center pt-48">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-secondary/15"
          >
            <CheckCircle className="h-12 w-12 text-secondary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 font-heading text-4xl font-extrabold text-foreground md:text-5xl"
          >
            Thank <span className="gradient-text">You!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4 font-body text-lg text-muted-foreground"
          >
            Your message has been received. One of our team will be in touch within{" "}
            <span className="font-semibold text-foreground">24 hours</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-10 font-body text-muted-foreground"
          >
            Need something sooner? Call us on{" "}
            <a href="tel:07846798534" className="font-semibold text-secondary hover:underline">
              07846 798 534
            </a>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link to="/" className="gradient-btn border-0">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Homepage
            </Link>
            <a href="tel:07846798534" className="gradient-btn-outline">
              <Phone className="mr-2 h-4 w-4" />
              Call Us Now
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
