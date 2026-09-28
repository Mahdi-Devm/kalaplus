"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PopularProductCard from "./PopularProductCard";

import { useProducts } from "@/core/features/pages/lib/useProducts";
import ProductsSkeleton from "../skeleton/ProductsSkeleton";
function SiwperPopularProductsSection() {
  const { loading, data } = useProducts();
  if (loading) {
    return <ProductsSkeleton />;
  }
  const products = data?.products?.data ?? [];

  if (!products.length) {
    return null;
  }
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={10}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={700}
        breakpoints={{
          380: {
            slidesPerView: 2.2,
            spaceBetween: 12,
          },

          640: {
            slidesPerView: 3,
            spaceBetween: 14,
          },

          768: {
            slidesPerView: 3.5,
            spaceBetween: 14,
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 16,
          },

          1280: {
            slidesPerView: 5,
            spaceBetween: 16,
          },
        }}
        className="overflow-visible!"
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.id}>
            <PopularProductCard product={product} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SiwperPopularProductsSection;
