"use client";

import { ProductType } from "@/core/assets/types/product/ProductType";
import { H2, P, Span } from "@/core/components/custom/ui/typography/Typography";
import { cn } from "@/core/utils/shadcn/utils";
import { useState } from "react";
import ActionBtnProductInfo from "./ActionBtnProductInfo";
import ProductDetail from "./ProductDetail";

export function ProductInfo({
  product,
  className,
}: {
  product: ProductType;
  className?: string;
}) {
  const {
    title,
    shortDescription,
    discountPercent,
    price,
    stock,
    colors,
    sizes,
    materials,
    category,
  } = product;

  const [quantity, setQuantity] = useState(1);

  const inStock = Number(stock) > 0;

  const decreaseQuantity = () => {
    setQuantity((q) => Math.max(1, q - 1));
  };

  const increaseQuantity = () => {
    setQuantity((q) => Math.min(Number(stock) || 1, q + 1));
  };

  return (
    <div className={cn("flex flex-col gap-5", className)}>
      <div>
        <Span className="text-sm text-muted-foreground">{category.title}</Span>

        <H2 className="pb-0 pt-1 text-right text-2xl sm:text-3xl">{title}</H2>
      </div>

      <P className="text-muted-foreground">{shortDescription}</P>

      <ProductDetail
        price={price}
        discountPercent={discountPercent}
        stock={stock}
        colors={colors}
        sizes={sizes}
        materials={materials}
      />

      <ActionBtnProductInfo
        quantity={quantity}
        inStock={inStock}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
      />
    </div>
  );
}
