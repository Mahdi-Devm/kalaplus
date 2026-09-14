import SectionLayout from "@/core/components/custom/ui/wrapper/SectionLayout";
import AuthComponents from "@/core/features/auth/components/block/AuthComponents";
import CategorySlider from "@/core/features/pages/components/block/category/CategorySlider";
import StoriesSection from "@/core/features/pages/components/block/home/StoriesSection";
import { FrequentProductsSection } from "@/core/features/pages/components/block/product/FrequentProductsSection";
import PercentSection from "@/core/features/pages/components/block/product/PercentSection";
import PopularProductsSection from "@/core/features/pages/components/block/product/PopularProductsSection";
import SliderImgPP from "@/core/features/pages/components/block/product/SliderImgPP";
import HeroSectionImg from "@/core/features/pages/components/block/section-img/HeroSectionImg";
import Brands from "@/core/features/pages/components/ui/brand/Brands";
import ThumbnailCategory from "@/core/features/pages/components/ui/category/ThumbnailCategory";
import Essay from "@/core/features/pages/components/ui/essay/Essay";
import AboutThumbnail from "@/core/features/pages/components/ui/poster/AboutThumbnail";

function page() {
  return (
    <SectionLayout>
      <AuthComponents />
      <StoriesSection />
      <HeroSectionImg />
      <CategorySlider />
      <PercentSection />
      <ThumbnailCategory />
      <PopularProductsSection />
      <SliderImgPP />
      <FrequentProductsSection />
      <AboutThumbnail />
      <Essay />
      <Brands />
    </SectionLayout>
  );
}

export default page;
