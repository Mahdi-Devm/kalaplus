import { ProductType } from "@/core/assets/@types/product/ProductType";
import { GetProductsForQuery } from "@/core/assets/types/product/GetProductsForAdminQuery";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductDiscountCard from "./ProductDiscountCard";

function SwiperPercentSection({ data }: { data: GetProductsForQuery }) {
  const products = data?.products?.data ?? [];
  return (
    <div className="min-w-0 flex-1">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={10}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={700}
        breakpoints={{
          380: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },

          640: {
            slidesPerView: 3,
            spaceBetween: 12,
          },

          768: {
            slidesPerView: 3.3,
            spaceBetween: 12,
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 14,
          },

          1280: {
            slidesPerView: 4.5,
            spaceBetween: 14,
          },
        }}
      >
        {products.map((product: ProductType) => (
          <SwiperSlide key={product.id}>
            <ProductDiscountCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperPercentSection;
