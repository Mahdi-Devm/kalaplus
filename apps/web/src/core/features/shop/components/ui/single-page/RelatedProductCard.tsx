"use client";

import { P, Span } from "@/core/components/custom/ui/typography/Typography";
import { cn } from "@/core/utils/shadcn/utils";
import { useState } from "react";
import { FiImage } from "react-icons/fi";
import {
  formatToman,
  getDiscountedPrice,
  Product,
} from "../../../assets/mock/shopData";

function RelatedProductCard({ product }: { product: Product }) {
  const [broken, setBroken] = useState(false);
  const discountedPrice = getDiscountedPrice(product);
  const hasDiscount = product.discountPercent > 0;
  const inStock = product.stock > 0;

  return (
    <a
      href={`/shop/${product.slug}`}
      className="flex flex-col rounded-xl border border-border bg-card p-3 transition-shadow hover:shadow-md"
    >
      <div className="relative mb-3 aspect-square overflow-hidden rounded-lg bg-muted">
        {!product.mainImage || broken ? (
          <div className="flex h-full w-full items-center justify-center">
            <FiImage className="h-10 w-10 text-muted-foreground/40" />
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.mainImage}
            alt={product.title}
            className="h-full w-full object-cover"
            onError={() => setBroken(true)}
          />
        )}
        {!inStock && (
          <span className="absolute end-2 top-2 rounded-full bg-destructive/90 px-2 py-0.5 text-[11px] font-medium text-destructive-foreground">
            ناموجود
          </span>
        )}
      </div>

      <P className="mb-2 line-clamp-1 text-right text-sm font-medium">
        {product.title}
      </P>

      <div className="flex items-baseline gap-2">
        <Span className="font-bold text-foreground">
          {formatToman(discountedPrice)} تومان
        </Span>
        {hasDiscount && (
          <Span className="text-xs text-muted-foreground line-through">
            {formatToman(product.price)}
          </Span>
        )}
      </div>
    </a>
  );
}

interface RelatedProductsProps {
  products: Product[];
  className?: string;
}

export function RelatedProducts({ products, className }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <div className={cn(className)}>
      <h3 className="mb-4 text-lg font-semibold">محصولات مرتبط</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <RelatedProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
