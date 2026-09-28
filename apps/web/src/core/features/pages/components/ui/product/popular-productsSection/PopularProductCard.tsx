import { ProductType } from "@/core/assets/types/product/ProductType";
import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";
import { Span } from "@/core/components/custom/ui/typography/Typography";
import { Badge } from "@/core/components/shadcn/ui/badge/badge";
import { Card, CardContent } from "@/core/components/shadcn/ui/card/card";
import { formatPrice } from "@/core/features/pages/utils/formatPrice";
import { getFinalPrice } from "@/core/features/pages/utils/getFinalPrice";
import { getImageUrl } from "@/core/utils/getImageUrl";
import Link from "next/link";
import { FiHeart, FiShoppingCart, FiTrendingUp } from "react-icons/fi";

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
    <Card className="group relative h-full overflow-hidden rounded-2xl border-border/60 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl">
      <div className="pointer-events-none absolute left-3 top-3 z-20 text-3xl font-black leading-none tracking-tighter text-muted-foreground/15 transition-colors group-hover:text-primary/15">
        {rank}
      </div>

      <button
        type="button"
        aria-label="افزودن به علاقه‌مندی‌ها"
        className="absolute right-3 top-3 z-20 grid size-8 place-items-center rounded-full border border-border/50 bg-background/90 text-muted-foreground shadow-sm backdrop-blur transition-all hover:border-destructive/20 hover:bg-destructive/10 hover:text-destructive"
      >
        <FiHeart className="size-4" />
      </button>

      <Link
        href={`/product/${product.slug}`}
        className="flex h-full flex-col"
        aria-label={product.title}
      >
        <div className="relative p-3">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted/30">
            <ImgNormalCustom
              src={getImageUrl(product.mainImage)}
              alt={product.title}
              fill
              sizes="(max-width: 640px) 44vw, (max-width: 768px) 30vw, (max-width: 1024px) 23vw, 18vw"
              className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
            />

            <Badge className="absolute bottom-2 left-2 rounded-lg border-0 bg-background/90 px-2 py-1 text-[9px] font-medium text-foreground shadow-sm backdrop-blur">
              <FiTrendingUp className="me-1 size-3 text-primary" />
              محبوب
            </Badge>

            {discount > 0 && (
              <Badge
                variant="destructive"
                className="absolute bottom-2 right-2 rounded-lg px-2 py-1 text-[9px] font-bold"
              >
                {discount}٪
              </Badge>
            )}
          </div>
        </div>

        <CardContent className="flex flex-1 flex-col px-3 pb-4 pt-1">
          <Span className="line-clamp-2 min-h-10 text-xs font-semibold leading-5 transition-colors group-hover:text-primary">
            {product.title}
          </Span>

          {product.category?.title && (
            <Span className="mt-1 block text-[10px] text-muted-foreground">
              {product.category.title}
            </Span>
          )}

          <div className="mt-auto pt-3">
            {discount > 0 && (
              <Span
                dir="ltr"
                className="block text-[10px] text-muted-foreground line-through"
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

              <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-all duration-300 group-hover:scale-105">
                <FiShoppingCart className="size-4" />
              </span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

export default PopularProductCard;
