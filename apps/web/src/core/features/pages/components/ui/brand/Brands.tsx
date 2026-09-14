"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { brands } from "../../../assets/mock/brands/brands";

function Brands() {
  return (
    <div className="w-full ">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={24}
        loop
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand} className="flex items-center justify-center">
            <div className="flex h-24 w-full items-center justify-center">
              <Image
                src={brand}
                alt={brand}
                width={160}
                height={100}
                className="h-auto max-h-20 w-auto object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Brands;
