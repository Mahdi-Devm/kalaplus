import SwiperFrequentProductsSection from "../../ui/product/frequent-productsSection/SwiperFrequentProductsSection";
import TopProductDetail from "../../ui/product/TopProductDetail";

export function FrequentProductsSection() {
  return (
    <div className="my-10 overflow-hidden">
      <TopProductDetail
        description="   انتخاب‌هایی که بیشتر از همه دیده می‌شوند"
        title="  پرتکرارترین کالاها"
      />

      <SwiperFrequentProductsSection />
    </div>
  );
}
