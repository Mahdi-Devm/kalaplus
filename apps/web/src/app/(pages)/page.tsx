import SectionLayout from "@/core/components/custom/ui/wrapper/SectionLayout";
import AuthComponents from "@/core/features/auth/components/block/AuthComponents";
import CategorySlider from "@/core/features/pages/components/block/category/CategorySlider";
import StoriesSection from "@/core/features/pages/components/block/home/StoriesSection";
import HeroSectionImg from "@/core/features/pages/components/block/section-img/HeroSectionImg";
import ThumbnailCategory from "@/core/features/pages/components/ui/category/ThumbnailCategory";

function page() {
  return (
    <SectionLayout>
      <AuthComponents />
      <StoriesSection />
      <HeroSectionImg />
      <CategorySlider />
      <ThumbnailCategory />
    </SectionLayout>
  );
}

export default page;
