import CarCardsGrid from "@/components/pages/home/CarCardsGrid";
import HeroSection from "@/components/pages/home/HeroSection";
// import ProductSlider from "@/components/pages/home/ProductSlider";

export default function HomePage() {

  return (
    <>
      <HeroSection />
      {/* <ProductSlider/> */}
      <CarCardsGrid/>
    </>
  );
}
