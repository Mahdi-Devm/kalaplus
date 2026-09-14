"use client";

import { GetProductsForQuery } from "@/core/assets/types/product/GetProductsForAdminQuery";
import { ProductType } from "@/core/assets/types/product/ProductType";
import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { Skeleton } from "@/core/components/shadcn/ui/skeleton/skeleton";
import { getImageUrl } from "@/core/utils/getImageUrl";
import { useQuery } from "@apollo/client/react";
import Link from "next/link";
import { FiArrowLeft, FiArrowUpLeft } from "react-icons/fi";
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

function LatestProductCard({ product }: { product: ProductType }) {
  const price = Number(product.price);
  const discount = Number(product.discountPercent);
  const finalPrice = getFinalPrice(price, discount);

  return (
    <Link href={`/products/${product.slug}`} className="group block h-full">
      <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-background transition-all duration-300 hover:border-primary/30 hover:shadow-xl">
        <div className="relative aspect-[0.88/1] overflow-hidden bg-muted/20">
          <div className="pointer-events-none absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:size-56 group-hover:bg-primary/10" />

          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.07]">
            <ImgNormalCustom
              src={getImageUrl(product.mainImage)}
              alt={product.title}
              fill
              className="object-contain p-5"
            />
          </div>

          <div className="absolute inset-x-2 bottom-2 z-30 translate-y-[calc(100%+8px)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
            <div className="rounded-xl border border-white/10 bg-background/95 p-3 shadow-2xl backdrop-blur-xl">
              <h3 className="line-clamp-2 text-xs font-bold leading-5">
                {product.title}
              </h3>

              <div className="mt-2 flex items-center justify-between gap-2">
                <div>
                  {discount > 0 && (
                    <div className="text-[9px] text-muted-foreground line-through">
                      {formatPrice(price)}
                    </div>
                  )}

                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-black">
                      {formatPrice(finalPrice)}
                    </span>

                    <span className="text-[8px] text-muted-foreground">
                      تومان
                    </span>
                  </div>
                </div>

                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <FiArrowUpLeft className="size-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function LatestProductSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/70">
      <Skeleton className="aspect-[0.88/1] w-full" />

      <div className="space-y-3 p-3.5">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-10 w-full" />

        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="size-9 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export function LatestProductsSection() {
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
    <section className="my-12 overflow-hidden">
      {/* Header */}
      <div className="mb-7 flex items-end justify-between gap-4">
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-2xl font-black tracking-tight sm:text-2xl">
              جدیدترین محصولات
            </h2>

            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              تازه‌ترین محصولات فروشگاه
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

      {/* Products */}
      {loading ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <LatestProductSkeleton key={index} />
          ))}
        </div>
      ) : products.length > 0 ? (
        <Swiper
          spaceBetween={12}
          slidesPerView={1.25}
          breakpoints={{
            480: {
              slidesPerView: 1.7,
              spaceBetween: 14,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 18,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 18,
            },
          }}
          className="!overflow-visible"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="!h-auto">
              <LatestProductCard product={product} />
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

      {/* Mobile all */}
      <div className="mt-5 sm:hidden">
        <Button asChild variant="outline" className="w-full rounded-xl">
          <Link href="/products">
            مشاهده همه محصولات
            <FiArrowLeft className="mr-2 size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
