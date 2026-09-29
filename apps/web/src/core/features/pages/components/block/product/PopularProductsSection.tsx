"use client";
import { useProducts } from "../../../lib/useProducts";
import SiwperPopularProductsSection from "../../ui/product/popular-productsSection/SiwperPopularProductsSection";
import ProductsSkeleton from "../../ui/product/skeleton/ProductsSkeleton";
import TopProductDetail from "../../ui/product/TopProductDetail";

export default function PopularProductsSection() {
  const { loading, data } = useProducts();
  if (loading || !data) {
    return <ProductsSkeleton />;
  }
  return (
    <div className="relative overflow-hidden">
      <TopProductDetail
        description="انتخاب محبوب کاربران"
        title="محبوب‌ترین محصولات"
      />

      <SiwperPopularProductsSection data={data} />
    </div>
  );
}
