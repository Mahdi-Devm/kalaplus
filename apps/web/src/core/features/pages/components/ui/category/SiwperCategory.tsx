"use client";
import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";
import { Span } from "@/core/components/custom/ui/typography/Typography";
import { GetAllCategories } from "@/core/features/panel/assets/@types/category/GetAllCategories";
import { GET_ALL_CATEGORY } from "@/core/gql-shcema/actionCategoryShema.gql";
import { getImageUrl } from "@/core/utils/getImageUrl";
import { useQuery } from "@apollo/client/react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function SiwperCategory() {
  const { data } = useQuery<GetAllCategories>(GET_ALL_CATEGORY);
  const categories = data?.categories || [];

  return (
    <div className="w-full lg:w-5/6">
      <Swiper
        slidesPerView={2}
        spaceBetween={8}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          380: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          630: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 16,
          },
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="flex flex-col items-center rounded-lg bg-muted p-2 shadow transition-all duration-300 hover:bg-primary hover:text-white group cursor-pointer sm:p-3">
              <ImgNormalCustom
                src={getImageUrl(category.image)}
                alt={category.title}
                width={120}
                height={120}
                className="h-14 w-14 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
              />

              <Span className="mt-2 text-center text-[10px] font-medium transition-colors duration-300 group-hover:text-white sm:text-xs">
                {category.title}
              </Span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SiwperCategory;
