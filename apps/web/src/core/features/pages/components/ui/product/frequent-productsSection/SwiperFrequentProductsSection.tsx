"use client";

import { GetProductsForQuery } from "@/core/assets/@types/product/GetProductsForAdminQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import FrequentProductCard from "./FrequentProductCard";

function SwiperFrequentProductsSection({
  data,
}: {
  data: GetProductsForQuery;
}) {
  const products = data?.products?.data ?? [];
  return (
    <Swiper
      spaceBetween={12}
      slidesPerView={1.15}
      breakpoints={{
        380: {
          slidesPerView: 2.2,
          spaceBetween: 14,
        },
        640: {
          slidesPerView: 2.3,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
      className="overflow-visible!"
    >
      {products.map((product, index) => (
        <SwiperSlide key={product.id} className="h-auto!">
          <FrequentProductCard product={product} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperFrequentProductsSection;
