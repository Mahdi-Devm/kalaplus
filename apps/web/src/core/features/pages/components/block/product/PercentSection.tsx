"use client";

import { useProducts } from "@/core/features/pages/lib/useProducts";
import AsidePercentSection from "../../ui/product/percent-section/AsidePercentSection";
import SwiperPercentSection from "../../ui/product/percent-section/SwiperPercentSection";
import ProductsSkeleton from "../../ui/product/skeleton/ProductsSkeleton";

export default function PercentSection() {
  const { loading, data } = useProducts();

  if (loading || !data) {
    return <ProductsSkeleton />;
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-border/50 bg-primary ">
      <div className="relative z-10 p-3 sm:p-4 lg:p-5">
        <div className="flex flex-col gap-4 lg:flex-row">
          <AsidePercentSection />
          <SwiperPercentSection data={data} />
        </div>
      </div>
    </div>
  );
}
