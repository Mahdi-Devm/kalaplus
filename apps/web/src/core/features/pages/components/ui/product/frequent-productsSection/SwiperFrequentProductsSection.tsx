"use client";

import { useProducts } from "@/core/features/pages/lib/useProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductsSkeleton from "../skeleton/ProductsSkeleton";
import FrequentProductCard from "./FrequentProductCard";

function SwiperFrequentProductsSection() {
  const { loading, data } = useProducts();

  if (loading) {
    return <ProductsSkeleton />;
  }
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
