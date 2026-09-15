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
import {
  FiArrowLeft,
  FiArrowUpLeft,
  FiShoppingBag,
  FiTrendingUp,
} from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { GET_PRODUCTS_FOR_USER } from "../../../gql-shcema/ProductSchema.gql";

const QUERY_LIMIT = 12;

function formatPrice(value: number) {
  return value.toLocaleString("en-US");
}

function getFinalPrice(price: number, discount: number) {
  return discount ? price - (price * discount) / 100 : price;
}

function FrequentProductCard({
  product,
  index,
}: {
  product: ProductType;
  index: number;
}) {
  const price = Number(product.price);
  const discount = Number(product.discountPercent);
  const finalPrice = getFinalPrice(price, discount);

  return (
    <Link href={`/products/${product.slug}`} className="group block h-full">
      <Card className="relative h-full overflow-hidden rounded-2xl border-border/70 bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
        <CardContent className="p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter text-muted-foreground/30 transition-colors group-hover:text-primary/30">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="h-5 w-px bg-border" />

              <Badge
                variant="outline"
                className="rounded-md px-2 py-1 text-[9px] font-bold"
              >
                <FiTrendingUp className="ml-1 size-3 text-primary" />
                پرتکرار
              </Badge>
            </div>

            <span className="flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
              <FiArrowUpLeft className="size-3.5" />
            </span>
          </div>

          <div className="relative mb-4 overflow-hidden rounded-xl bg-muted/30">
            <div className="aspect-[1.25/1]">
              <ImgNormalCustom
                src={getImageUrl(product.mainImage)}
                alt={product.title}
                fill
                className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {discount > 0 && (
              <Badge
                variant="destructive"
                className="absolute bottom-2 right-2 rounded-md px-2 py-1 text-[9px] font-bold shadow-sm"
              >
                {discount}٪
              </Badge>
            )}
          </div>

          {/* Product info */}
          <div>
            {product.category && (
              <Span className="mb-1 block text-[10px] text-muted-foreground">
                {product.category.title}
              </Span>
            )}

            <h3 className="line-clamp-2 min-h-10 text-sm font-bold leading-5 transition-colors group-hover:text-primary">
              {product.title}
            </h3>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-end justify-between gap-2">
            <div>
              {discount > 0 && (
                <div className="mb-0.5 text-[10px] text-muted-foreground line-through">
                  {formatPrice(price)}
                </div>
              )}

              <div className="flex items-baseline gap-1">
                <span className="text-base font-black">
                  {formatPrice(finalPrice)}
                </span>

                <span className="text-[9px] text-muted-foreground">تومان</span>
              </div>
            </div>

            <div className="flex size-9 items-center justify-center rounded-xl bg-muted transition-all group-hover:bg-primary group-hover:text-primary-foreground">
              <FiShoppingBag className="size-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function FrequentProductSkeleton() {
  return (
    <Card className="overflow-hidden rounded-2xl">
      <CardContent className="p-4">
        <div className="mb-3 flex justify-between">
          <Skeleton className="h-7 w-12" />
          <Skeleton className="size-8 rounded-full" />
        </div>

        <Skeleton className="aspect-[1.25/1] w-full rounded-xl" />

        <div className="mt-4 space-y-2">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-10 w-full" />
        </div>

        <div className="mt-4 flex justify-between">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="size-9 rounded-xl" />
        </div>
      </CardContent>
    </Card>
  );
}

export function FrequentProductsSection() {
  const { data, loading } = useQuery<GetProductsForQuery>(
    GET_PRODUCTS_FOR_USER,
    {
      variables: {
        page: 1,
        limit: QUERY_LIMIT,
      },
    },
  );

  const products = (data?.products?.data ?? []).filter(
    (product): product is ProductType => Boolean(product),
  );

  return (
    <section className="my-10 overflow-hidden">
      {/* Header */}
      <div className="mb-6 flex items-end justify-between gap-4">
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-lg font-black sm:text-xl">
              پرتکرارترین کالاها
            </h2>

            <p className="mt-1 text-xs text-muted-foreground sm:text-sm hidden sm:flex">
              انتخاب‌هایی که بیشتر از همه دیده می‌شوند
            </p>
          </div>
        </div>

        <Button asChild variant="ghost" className="group rounded-xl ">
          <Link href="/products" className="text-sm">
            مشاهده همه
            <FiArrowLeft className="mr-2 size-4 transition-transform group-hover:-translate-x-1" />
          </Link>
        </Button>
      </div>

      {/* Products */}
      {loading ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <FrequentProductSkeleton key={index} />
          ))}
        </div>
      ) : products.length > 0 ? (
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
          className="!overflow-visible"
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id} className="!h-auto">
              <FrequentProductCard product={product} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="rounded-2xl border border-dashed border-border py-16 text-center">
          <p className="text-sm text-muted-foreground">
            محصولی برای نمایش وجود ندارد.
          </p>
        </div>
      )}
    </section>
  );
}
