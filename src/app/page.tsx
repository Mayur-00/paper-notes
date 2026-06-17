
import Navbar from "@/components/landingPage/Navbar";
import Hero from "@/components/landingPage/Hero";
import Features from "@/components/landingPage/Features";
import Testimonials from "@/components/landingPage/Testimonials";
import Pricing from "@/components/landingPage/Pricing";
import Cta from "@/components/landingPage/Cta";
import Footer from "@/components/landingPage/Footer";

export default function LandingPage() {
  return (
    <div className="relative text-foreground bg-background min-h-screen w-full">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Cta />
      <Footer />
    </div>
  );
}
