"use client";
import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";
import { H3, Span } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { Card, CardContent } from "@/core/components/shadcn/ui/card/card";
import { GetAllCategories } from "@/core/features/panel/assets/@types/category/GetAllCategories";
import { GET_ALL_CATEGORY } from "@/core/gql-shcema/actionCategoryShema.gql";
import { getImageUrl } from "@/core/utils/getImageUrl";
import { useQuery } from "@apollo/client/react";
import { FiChevronLeft } from "react-icons/fi";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
function CategorySlider() {
  const { loading, data } = useQuery<GetAllCategories>(GET_ALL_CATEGORY);
  const categories = data?.categories || [];
  return (
    <Card>
      <CardContent className="flex items-center gap-10 ">
        <div>
          <H3 className="text-center mb-2">
            دسته بندی <br></br>محصولات
          </H3>
          <Button>
            مشاهده همه <FiChevronLeft />
          </Button>
        </div>
        <div className="w-5/6">
          <Swiper
            slidesPerView={2}
            spaceBetween={12}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
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
                <div className="flex flex-col items-center p-3 bg-muted rounded-lg shadow hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group">
                  <ImgNormalCustom
                    src={getImageUrl(category.image)}
                    alt={category.title}
                    width={120}
                    height={120}
                    className="w-20  h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />

                  <Span className="mt-2 text-xs font-medium text-center group-hover:text-white transition-colors duration-300">
                    {category.title}
                  </Span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </CardContent>
    </Card>
  );
}

export default CategorySlider;
