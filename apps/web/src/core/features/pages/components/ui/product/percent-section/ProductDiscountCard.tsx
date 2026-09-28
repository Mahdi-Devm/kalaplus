import { ProductType } from "@/core/assets/types/product/ProductType";
import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";
import { Span } from "@/core/components/custom/ui/typography/Typography";
import { Badge } from "@/core/components/shadcn/ui/badge/badge";
import { Card, CardContent } from "@/core/components/shadcn/ui/card/card";
import { formatPrice } from "@/core/features/pages/utils/formatPrice";
import { getFinalPrice } from "@/core/features/pages/utils/getFinalPrice";
import { LikeButton } from "@/core/features/like/components/ui/LikeButton";
import { getImageUrl } from "@/core/utils/getImageUrl";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

function ProductDiscountCard({ product }: { product: ProductType }) {
  const price = Number(product.price);
  const discount = Number(product.discountPercent);
  const finalPrice = getFinalPrice(price, discount);

  return (
    <article className="group h-full">
      <Card
        className="
          relative h-full overflow-hidden
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
        <LikeButton
          product={product}
          className="absolute left-2 top-2 z-20 size-8 border border-border/50 bg-background/90 text-muted-foreground shadow-sm backdrop-blur transition-all hover:border-destructive/20 hover:bg-destructive/10 hover:text-destructive"
        />

        <Link
          href={`/shop/${product.slug}`}
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
                className="
                  object-contain p-3
                  transition-transform duration-500
                  group-hover:scale-105
                  bg-foreground-box
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

export default ProductDiscountCard;
