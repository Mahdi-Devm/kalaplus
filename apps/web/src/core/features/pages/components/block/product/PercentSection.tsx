"use client";

import { ProductType } from "@/core/assets/types/product/ProductType";
import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";
import { Span } from "@/core/components/custom/ui/typography/Typography";
import { Badge } from "@/core/components/shadcn/ui/badge/badge";
import { Card, CardContent } from "@/core/components/shadcn/ui/card/card";
import { getImageUrl } from "@/core/utils/getImageUrl";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useProducts } from "../../../lib/useProducts";
import { CountdownTimer } from "../../ui/product/CountdownTimer";
import ProductsSkeleton from "../../ui/product/skeleton/ProductsSkeleton";

/* -------------------------------------------------------------------------- */
/*                                  Constants                                 */
/* -------------------------------------------------------------------------- */

const DISCOUNT_THRESHOLD = 1;
const CARD_SLICE = 12;

/* -------------------------------------------------------------------------- */
/*                                  Helpers                                   */
/* -------------------------------------------------------------------------- */

function getFinalPrice(price: number, discount: number) {
  return discount > 0 ? Math.round(price - (price * discount) / 100) : price;
}

function filterDiscounted(products: (ProductType | null)[]) {
  return products
    .filter(
      (product): product is ProductType =>
        !!product && Number(product.discountPercent) >= DISCOUNT_THRESHOLD,
    )
    .slice(0, CARD_SLICE);
}

function formatPrice(value: number) {
  return Math.round(value).toLocaleString("en-US");
}

/* -------------------------------------------------------------------------- */
/*                              Product Card                                  */
/* -------------------------------------------------------------------------- */

function ProductDiscountCard({ product }: { product: ProductType }) {
  const price = Number(product.price);
  const discount = Number(product.discountPercent);
  const finalPrice = getFinalPrice(price, discount);

  return (
    <article className="group h-full">
      <Card
        className="
          h-full overflow-hidden
          rounded-2xl
          border-border/50
          bg-background
          shadow-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:border-primary/20
          hover:shadow-xl
        "
      >
        <Link
          href={`/product/${product.slug}`}
          className="flex h-full flex-col"
          aria-label={product.title}
        >
          {/* Product Image */}
          <div className="relative p-2">
            <div
              className="
                relative aspect-square
                overflow-hidden rounded-xl
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
                  (max-width: 1024px) 22vw,
                  18vw
                "
                className="
                  object-contain p-3
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />

              {/* Discount Badge */}
              <Badge
                variant="destructive"
                className="
                  absolute right-2 top-2
                  rounded-xl
                  px-2 py-1
                  text-[10px]
                  font-bold
                  shadow-md
                "
              >
                {discount}٪ تخفیف
              </Badge>
            </div>
          </div>

          {/* Product Content */}
          <CardContent className="flex flex-1 flex-col px-3 pb-3 pt-1">
            <Span
              className="
                line-clamp-2
                min-h-10
                text-xs
                font-medium
                leading-5
                transition-colors
                group-hover:text-primary
              "
            >
              {product.title}
            </Span>

            <div className="mt-auto pt-3">
              {/* Old Price */}
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

              {/* Final Price */}
              <div className="mt-1 flex items-center justify-between gap-2">
                <Span dir="ltr" className="text-sm font-black tracking-tight">
                  {formatPrice(finalPrice)}

                  <span className="ms-1 text-[9px] font-normal text-muted-foreground">
                    تومان
                  </span>
                </Span>

                <span
                  className="
                    grid size-8 shrink-0 place-items-center
                    rounded-xl
                    bg-primary/10
                    text-primary
                    transition-all duration-300
                    group-hover:bg-primary
                    group-hover:text-primary-foreground
                  "
                >
                  <FiShoppingCart className="size-4" />
                </span>
              </div>
            </div>
          </CardContent>
        </Link>
      </Card>
    </article>
  );
}

export default function PercentSection() {
  const { loading, data } = useProducts();

  const deadline = useMemo(() => Date.now() + 24 * 60 * 60 * 1000, []);
  const products = useMemo(
    () => filterDiscounted(data?.products?.data ?? []),
    [data],
  );
  if (loading) {
    return <ProductsSkeleton />;
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[2rem]
        border border-border/50
        bg-background
        shadow-sm
      "
    >
      {/* ------------------------------------------------------------------ */}
      {/* Background                                                         */}
      {/* ------------------------------------------------------------------ */}

      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/common/img/percent-section/image.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-10"
        />

        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Content                                                            */}
      {/* ------------------------------------------------------------------ */}

      <div className="relative z-10 p-3 sm:p-4 lg:p-5">
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* ================================================================ */}
          {/* Discount Banner                                                   */}
          {/* ================================================================ */}

          <aside
            className="
              relative
              min-h-[210px]
              shrink-0
              overflow-hidden
              rounded-[1.75rem]
              bg-primary
              p-5
              text-primary-foreground
              lg:w-48
              xl:w-56
            "
          >
            {/* Decorative Circle */}
            <div
              className="
                pointer-events-none
                absolute
                -right-12
                -top-12
                size-32
                rounded-full
                bg-white/10
              "
            />

            {/* Decorative Circle */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-16
                -left-10
                size-40
                rounded-full
                bg-white/10
              "
            />

            {/* Decorative Percentage */}
            <div
              className="
                pointer-events-none
                absolute
                right-2
                top-20
                rotate-12
                text-7xl
                font-black
                text-white/10
              "
            >
              %
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex h-full flex-col justify-between gap-6">
              <div>
                <span
                  className="
                    inline-flex
                    rounded-full
                    bg-white/15
                    px-2.5
                    py-1
                    text-[10px]
                    font-medium
                    backdrop-blur-sm
                  "
                >
                  پیشنهاد ویژه
                </span>

                <h2
                  className="
                    mt-4
                    text-xl
                    font-black
                    leading-8
                  "
                >
                  تخفیف‌های
                  <br />
                  <span className="text-3xl">ویژه</span>
                </h2>

                <p
                  className="
                    mt-1
                    max-w-[150px]
                    text-[11px]
                    leading-5
                    text-primary-foreground/70
                  "
                >
                  محصولات منتخب را با قیمت بهتر خرید کنید.
                </p>
              </div>

              {/* Countdown */}
              <CountdownTimer deadline={deadline} />
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={2}
              spaceBetween={10}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={700}
              breakpoints={{
                380: {
                  slidesPerView: 2.2,
                  spaceBetween: 10,
                },

                640: {
                  slidesPerView: 3,
                  spaceBetween: 12,
                },

                768: {
                  slidesPerView: 3.3,
                  spaceBetween: 12,
                },

                1024: {
                  slidesPerView: 4,
                  spaceBetween: 14,
                },

                1280: {
                  slidesPerView: 4.5,
                  spaceBetween: 14,
                },
              }}
              className="!pb-1"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id} className="!h-auto">
                  <ProductDiscountCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
