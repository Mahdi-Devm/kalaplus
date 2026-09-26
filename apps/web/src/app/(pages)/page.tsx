import { Suspense } from "react";

import SectionLayout from "@/core/components/custom/ui/wrapper/SectionLayout";

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
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "کالا پلاس | خرید آنلاین محصولات",
  description:
    "کالا پلاس؛ فروشگاه آنلاین برای خرید انواع محصولات با بهترین قیمت و تخفیف‌های ویژه.",
};
export default function Page() {
  return (
    <SectionLayout>
      <StoriesSection />
      <HeroSectionImg />

      <CategorySlider />

      <Suspense>
        <PercentSection />
      </Suspense>
      <ThumbnailCategory />

      <Suspense>
        <PopularProductsSection />
      </Suspense>

      <SliderImgPP />

      <Suspense>
        <FrequentProductsSection />
      </Suspense>

      <AboutThumbnail />
      <Essay />
      <Brands />
    </SectionLayout>
  );
}
