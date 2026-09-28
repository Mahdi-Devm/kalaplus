"use client";

import { useProducts } from "../../../lib/useProducts";
import SwiperFrequentProductsSection from "../../ui/product/frequent-productsSection/SwiperFrequentProductsSection";
import ProductsSkeleton from "../../ui/product/skeleton/ProductsSkeleton";
import TopProductDetail from "../../ui/product/TopProductDetail";

export function FrequentProductsSection() {
  const { loading, data } = useProducts();

  if (loading || !data) {
    return <ProductsSkeleton />;
  }

  return (
    <div className="my-10 overflow-hidden">
      <TopProductDetail
        description="   انتخاب‌هایی که بیشتر از همه دیده می‌شوند"
        title="  پرتکرارترین کالاها"
      />

      <SwiperFrequentProductsSection data={data} />
    </div>
  );
}
