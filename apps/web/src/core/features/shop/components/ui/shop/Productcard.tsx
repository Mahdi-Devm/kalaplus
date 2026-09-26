"use client";

import { ProductFormType } from "@/core/assets/types/product/ProductType";
import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";
import { P, Span } from "@/core/components/custom/ui/typography/Typography";
import { getImageUrl } from "@/core/utils/getImageUrl";
import { cn } from "@/core/utils/shadcn/utils";
import { FiImage } from "react-icons/fi";

export function ProductCard({
  product,
  className,
}: {
  product: ProductFormType;
  className?: string;
}) {
  const { title, price, discountPercent, mainImage } = product;

  const image = mainImage;

  const numericPrice = Number(price);
  const numericDiscount = Number(discountPercent);

  const originalPrice =
    numericDiscount > 0 ? numericPrice / (1 - numericDiscount / 100) : null;

  const formatToman = (value: number) =>
    new Intl.NumberFormat("fa-IR").format(Math.round(value));

  return (
    <div
      className={cn(
        "flex flex-col rounded-xl border border-border bg-card p-3 transition-shadow hover:shadow-md",
        className,
      )}
    >
      <div className="relative mb-3 aspect-square overflow-hidden rounded-lg bg-foreground-box">
        {image ? (
          <div className="flex h-full w-full items-center justify-center p-6">
            <ImgNormalCustom
              width={300}
              height={300}
              src={getImageUrl(image)}
              alt={title}
              className="h-full w-full object-contain"
            />
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <FiImage className="h-10 w-10 text-foreground-box/60" />
          </div>
        )}
      </div>

      <P className="mb-2 line-clamp-1 text-right text-sm font-medium">
        {title}
      </P>

      <div className="mb-3 flex items-baseline gap-2">
        <Span className="font-bold text-foreground">
          {formatToman(numericPrice)} تومان
        </Span>

        {originalPrice && (
          <Span className="text-xs text-muted-foreground line-through">
            {formatToman(originalPrice)}
          </Span>
        )}
      </div>

      <div className="mt-auto flex items-center gap-2">
        <span className="shrink-0 text-xs text-muted-foreground">
          {numericDiscount}/۱۰۰
        </span>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${numericDiscount}%` }}
          />
        </div>
      </div>
    </div>
  );
}
