import FeaturesSection from "@/components/landing/FeaturesSection";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import Navbar from "@/components/landing/Navbar";
import ProductsSection from "@/components/landing/ProductsSection";
import ReviewsSection from "@/components/landing/ReviewsSection";
import TrustSection from "@/components/landing/TrustSection";
import WhyChooseSection from "@/components/landing/WhyChooseSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-body overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TrustSection />
        <ProductsSection />
        <WhyChooseSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}
