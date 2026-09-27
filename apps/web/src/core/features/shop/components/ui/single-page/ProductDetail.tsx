import { Span } from "@/core/components/custom/ui/typography/Typography";
import { cn } from "@/core/utils/shadcn/utils";
import { getColorHex, getDiscountedPrice } from "../../../assets/mock/shopData";
import { formatToman } from "../../../utils/formatToman";

interface ProductDetailProps {
  price: string;
  discountPercent: string;
  stock: string;
  colors?: string[];
  sizes?: string[];
  materials?: string[];
}

function ProductDetail({
  price,
  discountPercent,
  stock,
  colors,
  sizes,
  materials,
}: ProductDetailProps) {
  const inStock = Number(stock) > 0;

  const discountedPrice = getDiscountedPrice({
    price,
    discountPercent,
  });

  const hasDiscount = Number(discountPercent) > 0;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold text-foreground">
          {formatToman(Number(discountedPrice))} تومان
        </span>

        {hasDiscount && (
          <>
            <span className="text-sm text-muted-foreground line-through">
              {formatToman(Number(price))} تومان
            </span>

            <span className="rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-medium text-destructive">
              {discountPercent}٪ تخفیف
            </span>
          </>
        )}
      </div>

      <span
        className={cn(
          "w-fit rounded-full px-3 py-1 text-xs font-medium",
          inStock
            ? "bg-primary/10 text-primary"
            : "bg-destructive/10 text-destructive",
        )}
      >
        {inStock ? `موجود در انبار (${stock} عدد)` : "ناموجود"}
      </span>

      {colors?.length ? (
        <div>
          <Span className="mb-2 block text-sm font-medium">رنگ</Span>

          <div className="flex flex-wrap gap-3">
            {colors.map((color) => (
              <div key={color} className="flex items-center gap-2">
                <span
                  className="h-7 w-7 rounded-full ring-1 ring-border"
                  style={{
                    backgroundColor: getColorHex(color),
                  }}
                />

                <Span className="text-sm text-muted-foreground">{color}</Span>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {sizes?.length ? (
        <div>
          <Span className="mb-2 block text-sm font-medium">سایز</Span>

          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <span
                key={size}
                className="min-w-11 rounded-lg border border-border px-3 py-1.5 text-sm text-muted-foreground"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {materials?.length ? (
        <div className="flex items-center gap-2">
          <Span className="text-sm font-medium">جنس:</Span>

          <Span className="text-sm text-muted-foreground">
            {materials.join("، ")}
          </Span>
        </div>
      ) : null}
    </div>
  );
}

export default ProductDetail;
