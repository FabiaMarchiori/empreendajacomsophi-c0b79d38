import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import BlackNovemberOffer from "@/components/sections/BlackNovemberOffer";
import PainSection from "@/components/sections/PainSection";
import ModulesSection from "@/components/sections/ModulesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <div className="min-h-screen bg-background">
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <BlackNovemberOffer />
      <PainSection />
      <ModulesSection />
      <TestimonialsSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
    <WhatsAppFloat />
  </div>
);

export default Index;
