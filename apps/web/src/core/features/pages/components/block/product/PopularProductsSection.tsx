import SiwperPopularProductsSection from "../../ui/product/popular-productsSection/SiwperPopularProductsSection";
import TopProductDetail from "../../ui/product/TopProductDetail";

export default function PopularProductsSection() {
  return (
    <div className="relative overflow-hidden">
      <TopProductDetail
        description="انتخاب محبوب کاربران"
        title="محبوب‌ترین محصولات"
      />

      <SiwperPopularProductsSection />
    </div>
  );
}
