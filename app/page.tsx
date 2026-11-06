import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { CategorySection } from "@/components/sections/CategorySection";
import { GallerySection } from "@/components/sections/GallerySection";
import { VisitUsSection } from "@/components/sections/VisitUsSection";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <WhyChooseUsSection />
        <CategorySection />
        <GallerySection />
        <VisitUsSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
