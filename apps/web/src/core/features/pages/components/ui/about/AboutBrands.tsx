"use client";

import { H2, Span } from "@/core/components/custom/ui/typography/Typography";
import { Badge } from "@/core/components/shadcn/ui/badge/badge";
import { CiStar } from "react-icons/ci";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { brands } from "../../../assets/mock/about/brand";
function AboutBrands() {
  return (
    <div className="text-center space-y-8 mt-10">
      <div className="space-y-4">
        <Badge className="gap-2 bg-primary/10 text-primary border-0 mx-auto">
          <CiStar className="w-3 h-3" />
          برندهای ما
        </Badge>
        <H2 className="text-3xl sm:text-4xl font-bold">
          همکاری با بهترین <span className="text-primary">برندها</span>
        </H2>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={4000}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="pb-12!"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="bg-background rounded-xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border border-transparent hover:border-primary/20 group cursor-pointer">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                {brand.logo}
              </div>
              <Span className="font-bold text-base group-hover:text-primary transition-colors">
                {brand.name}
              </Span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default AboutBrands;
