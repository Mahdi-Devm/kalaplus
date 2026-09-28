"use client";

import { ProductType } from "@/core/assets/types/product/ProductType";
import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";
import { H3, Span } from "@/core/components/custom/ui/typography/Typography";
import { Badge } from "@/core/components/shadcn/ui/badge/badge";
import { Card, CardContent } from "@/core/components/shadcn/ui/card/card";
import { getImageUrl } from "@/core/utils/getImageUrl";
import Link from "next/link";
import { FiArrowUpLeft, FiShoppingBag, FiTrendingUp } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";

import { useProducts } from "../../../lib/useProducts";
import { formatPrice } from "../../../utils/formatPrice";
import ProductsSkeleton from "../../ui/product/skeleton/ProductsSkeleton";
import TopProductDetail from "../../ui/product/TopProductDetail";

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
              <Span className="text-2xl group-hover:text-primary/30">
                {String(index + 1).padStart(2, "0")}
              </Span>

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

          <div>
            {product.category && (
              <Span className="mb-1 block text-[10px] text-muted-foreground">
                {product.category.title}
              </Span>
            )}

            <H3>{product.title}</H3>
          </div>

          <div className="mt-4 flex items-end justify-between gap-2">
            <div>
              {discount > 0 && (
                <div className="mb-0.5 text-[10px] text-muted-foreground line-through">
                  {formatPrice(price)}
                </div>
              )}

              <div className="flex items-baseline gap-1">
                <Span>{formatPrice(finalPrice)}</Span>

                <Span>تومان</Span>
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

export function FrequentProductsSection() {
  const { loading, data } = useProducts();

  if (loading) {
    return <ProductsSkeleton />;
  }
  const products = data?.products?.data ?? [];

  return (
    <div className="my-10 overflow-hidden">
      <TopProductDetail
        description="   انتخاب‌هایی که بیشتر از همه دیده می‌شوند"
        title="  پرتکرارترین کالاها"
      />

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
    </div>
  );
}
