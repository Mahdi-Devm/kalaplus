"use client";

import { GetProductsForQuery } from "@/core/assets/types/product/GetProductsForAdminQuery";
import { ProductType } from "@/core/assets/types/product/ProductType";
import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";
import { Span } from "@/core/components/custom/ui/typography/Typography";
import { Badge } from "@/core/components/shadcn/ui/badge/badge";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { Card, CardContent } from "@/core/components/shadcn/ui/card/card";
import { Skeleton } from "@/core/components/shadcn/ui/skeleton/skeleton";
import { getImageUrl } from "@/core/utils/getImageUrl";
import { useQuery } from "@apollo/client/react";
import Link from "next/link";
import { useMemo } from "react";
import {
  FiArrowLeft,
  FiHeart,
  FiShoppingCart,
  FiTrendingUp,
} from "react-icons/fi";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { GET_PRODUCTS_FOR_USER } from "../../../gql-shcema/ProductSchema.gql";

/* -------------------------------------------------------------------------- */
/*                                  Constants                                 */
/* -------------------------------------------------------------------------- */

const QUERY_LIMIT = 12;

/* -------------------------------------------------------------------------- */
/*                                  Helpers                                   */
/* -------------------------------------------------------------------------- */

function formatPrice(value: number) {
  return Math.round(value).toLocaleString("en-US");
}

function getFinalPrice(price: number, discount: number) {
  return discount > 0 ? Math.round(price - (price * discount) / 100) : price;
}

/* -------------------------------------------------------------------------- */
/*                              Product Card                                  */
/* -------------------------------------------------------------------------- */

function PopularProductCard({
  product,
  index,
}: {
  product: ProductType;
  index: number;
}) {
  const price = Number(product.price);
  const discount = Number(product.discountPercent);
  const finalPrice = getFinalPrice(price, discount);

  const rank = String(index + 1).padStart(2, "0");

  return (
    <Card
      className="
        group
        relative
        h-full
        overflow-hidden
        rounded-2xl
        border-border/60
        bg-background
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/20
        hover:shadow-xl
      "
    >
      {/* ------------------------------------------------------------------ */}
      {/* Rank                                                               */}
      {/* ------------------------------------------------------------------ */}

      <div
        className="
          pointer-events-none
          absolute
          left-3
          top-3
          z-20
          text-3xl
          font-black
          leading-none
          tracking-tighter
          text-muted-foreground/15
          transition-colors
          group-hover:text-primary/15
        "
      >
        {rank}
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Favorite                                                           */}
      {/* ------------------------------------------------------------------ */}

      <button
        type="button"
        aria-label="افزودن به علاقه‌مندی‌ها"
        className="
          absolute
          right-3
          top-3
          z-20
          grid
          size-8
          place-items-center
          rounded-full
          border
          border-border/50
          bg-background/90
          text-muted-foreground
          shadow-sm
          backdrop-blur
          transition-all
          hover:border-destructive/20
          hover:bg-destructive/10
          hover:text-destructive
        "
      >
        <FiHeart className="size-4" />
      </button>

      <Link
        href={`/product/${product.slug}`}
        className="flex h-full flex-col"
        aria-label={product.title}
      >
        {/* ---------------------------------------------------------------- */}
        {/* Image                                                             */}
        {/* ---------------------------------------------------------------- */}

        <div className="relative p-3">
          <div
            className="
              relative
              aspect-square
              overflow-hidden
              rounded-2xl
              bg-muted/30
            "
          >
            <ImgNormalCustom
              src={getImageUrl(product.mainImage)}
              alt={product.title}
              fill
              sizes="
                (max-width: 640px) 44vw,
                (max-width: 768px) 30vw,
                (max-width: 1024px) 23vw,
                18vw
              "
              className="
                object-contain
                p-5
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />

            {/* Popular Badge */}
            <Badge
              className="
                absolute
                bottom-2
                left-2
                rounded-lg
                border-0
                bg-background/90
                px-2
                py-1
                text-[9px]
                font-medium
                text-foreground
                shadow-sm
                backdrop-blur
              "
            >
              <FiTrendingUp className="me-1 size-3 text-primary" />
              محبوب
            </Badge>

            {/* Discount */}
            {discount > 0 && (
              <Badge
                variant="destructive"
                className="
                  absolute
                  bottom-2
                  right-2
                  rounded-lg
                  px-2
                  py-1
                  text-[9px]
                  font-bold
                "
              >
                {discount}٪
              </Badge>
            )}
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Content                                                           */}
        {/* ---------------------------------------------------------------- */}

        <CardContent className="flex flex-1 flex-col px-3 pb-4 pt-1">
          {/* Title */}
          <Span
            className="
              line-clamp-2
              min-h-10
              text-xs
              font-semibold
              leading-5
              transition-colors
              group-hover:text-primary
            "
          >
            {product.title}
          </Span>

          {/* Category */}
          {product.category?.title && (
            <Span className="mt-1 block text-[10px] text-muted-foreground">
              {product.category.title}
            </Span>
          )}

          {/* Price */}
          <div className="mt-auto pt-3">
            {discount > 0 && (
              <Span
                dir="ltr"
                className="
                  block
                  text-[10px]
                  text-muted-foreground
                  line-through
                "
              >
                {formatPrice(price)} تومان
              </Span>
            )}

            <div className="mt-1 flex items-center justify-between gap-2">
              <Span dir="ltr" className="text-sm font-black tracking-tight">
                {formatPrice(finalPrice)}

                <span className="ms-1 text-[9px] font-normal text-muted-foreground">
                  تومان
                </span>
              </Span>

              <span
                className="
                  grid
                  size-8
                  shrink-0
                  place-items-center
                  rounded-xl
                  bg-primary
                  text-primary-foreground
                  shadow-sm
                  transition-all
                  duration-300
                  group-hover:scale-105
                "
              >
                <FiShoppingCart className="size-4" />
              </span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Skeleton                                    */
/* -------------------------------------------------------------------------- */

function PopularProductsSkeleton() {
  return (
    <section>
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="size-10 rounded-xl" />

          <div className="space-y-2">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-3 w-56" />
          </div>
        </div>

        <Skeleton className="h-9 w-24 rounded-xl" />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Card key={index} className="overflow-hidden rounded-2xl">
            <CardContent className="space-y-3 p-3">
              <Skeleton className="aspect-square rounded-xl" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-3 w-2/5" />
              <Skeleton className="h-5 w-3/5" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                           Popular Products                                 */
/* -------------------------------------------------------------------------- */

export default function PopularProductsSection() {
  const { loading, error, data } = useQuery<GetProductsForQuery>(
    GET_PRODUCTS_FOR_USER,
    {
      variables: {
        page: 1,
        limit: QUERY_LIMIT,
      },
    },
  );

  const products = useMemo(() => {
    return (data?.products?.data ?? [])
      .filter((product): product is ProductType => !!product)
      .slice(0, QUERY_LIMIT);
  }, [data]);

  if (error) {
    return null;
  }

  if (loading) {
    return <PopularProductsSkeleton />;
  }

  if (!products.length) {
    return null;
  }

  return (
    <section className="relative overflow-hidden">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div className="flex items-center gap-3">
          <div>
            <h2 className="text-lg font-black sm:text-xl">
              محبوب‌ترین محصولات
            </h2>

            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              انتخاب محبوب کاربران
            </p>
          </div>
        </div>
        <Button
          asChild
          variant="ghost"
          className="group hidden rounded-xl sm:flex"
        >
          <Link href="/products">
            مشاهده همه
            <FiArrowLeft className="mr-2 size-4 transition-transform group-hover:-translate-x-1" />
          </Link>
        </Button>
      </div>

      {/* ================================================================== */}
      {/* Products                                                            */}
      {/* ================================================================== */}

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
            480: {
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
          className="!overflow-visible !pb-2"
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id} className="!h-auto">
              <PopularProductCard product={product} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Fade */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            top-0
            z-10
            hidden
            w-12
            bg-gradient-to-r
            from-background
            to-transparent
            xl:block
          "
        />
      </div>
    </section>
  );
}
