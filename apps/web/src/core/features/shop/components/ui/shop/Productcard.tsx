"use client";

import { ProductType } from "@/core/assets/types/product/ProductType";
import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";
import { P, Span } from "@/core/components/custom/ui/typography/Typography";
import { LikeButton } from "@/core/features/like/components/ui/LikeButton";
import { getImageUrl } from "@/core/utils/getImageUrl";
import { cn } from "@/core/utils/shadcn/utils";
import Link from "next/link";
import { FiImage } from "react-icons/fi";
import { formatToman } from "../../../utils/formatToman";

export function ProductCard({
  product,
  className,
}: {
  /** Products come from paginated lists, so the full entity (with id) is available. */
  product: ProductType;
  className?: string;
}) {
  const { title, price, discountPercent, mainImage } = product;

  const image = mainImage;

  const numericPrice = Number(price);
  const numericDiscount = Number(discountPercent);

  const originalPrice =
    numericDiscount > 0 ? numericPrice / (1 - numericDiscount / 100) : null;

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-xl border border-border bg-card p-3 transition-shadow hover:shadow-md",
        className,
      )}
    >
      <LikeButton
        product={{
          id: product.id,
          title: product.title,
          slug: product.slug,
          price: product.price,
          discountPercent: product.discountPercent,
          stock: product.stock,
          mainImage: product.mainImage,
          category: product.category,
        }}
        className="absolute right-2 top-2 z-20 size-8 border border-border/50 bg-background/90 text-muted-foreground shadow-sm backdrop-blur hover:border-destructive/20 hover:bg-destructive/10 hover:text-destructive"
      />

      <Link
        href={`/shop/${product.slug}`}
        className="relative mb-3 aspect-square overflow-hidden rounded-lg bg-foreground-box"
      >
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
      </Link>

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
