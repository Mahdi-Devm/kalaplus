import { ProductType } from "@/core/assets/types/product/ProductType";

const DISCOUNT_THRESHOLD = 1;
const CARD_SLICE = 12;

export function filterDiscounted(products: (ProductType | null)[]) {
  return products
    .filter(
      (product): product is ProductType =>
        !!product && Number(product.discountPercent) >= DISCOUNT_THRESHOLD,
    )
    .slice(0, CARD_SLICE);
}
