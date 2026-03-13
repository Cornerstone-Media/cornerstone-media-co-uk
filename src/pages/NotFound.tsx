import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex min-h-[70vh] items-center justify-center pt-28">
        <div className="text-center px-6">
          <h1 className="mb-4 font-heading text-6xl font-extrabold text-foreground">404</h1>
          <p className="mb-6 font-body text-xl text-muted-foreground">Oops! The page you're looking for doesn't exist.</p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/" className="gradient-btn text-base">
              Back to Homepage
            </Link>
            <Link to="/contact" className="gradient-btn-outline text-base">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
