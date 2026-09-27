import { ProductType } from "@/core/assets/types/product/ProductType";

export const PRICE_BOUNDS = { min: 0, max: 8_000_000, step: 10_000 };

export function getDiscountedPrice(
  product: Pick<ProductType, "price" | "discountPercent">,
) {
  if (!product.discountPercent) return product.price;
  return Math.round(
    Number(product.price) -
      (Number(product.price) * Number(product.discountPercent)) / 100,
  );
}

// Best-effort Persian color name -> swatch color.
// Falls back to a neutral grey (with a label) for names not in the map.
export const COLOR_HEX_MAP: Record<string, string> = {
  مشکی: "#111827",
  سفید: "#ffffff",
  قرمز: "#dc2626",
  آبی: "#2563eb",
  سبز: "#16a34a",
  زرد: "#eab308",
  نارنجی: "#f97316",
  بنفش: "#7c3aed",
  صورتی: "#ec4899",
  طوسی: "#9ca3af",
  خاکستری: "#6b7280",
  قهوه‌ای: "#78350f",
  کرم: "#f5e6ca",
  جیگری: "#7f1d1d",
  یشمی: "#14b8a6",
};

export function getColorHex(name: string) {
  return COLOR_HEX_MAP[name] ?? "#d1d5db";
}
