"use client";

import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";
import { P, Span } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { useLike } from "@/core/features/like/lib/useLike";
import { formatToman } from "@/core/features/shop/utils/formatToman";
import { getImageUrl } from "@/core/utils/getImageUrl";
import Link from "next/link";
import { FiTrash2 } from "react-icons/fi";
import { LikeProduct } from "../../assets/@types/like/LikeType";

/**
 * A liked product row inside the Header favorites dropdown. Removal goes
 * through the shared useLike toggle, so card hearts and the badge in the
 * Header stay synchronized automatically.
 */
function FavoriteItem({
  like,
}: {
  like: { id: string; product: LikeProduct };
}) {
  const { product } = like;
  const { liked, toggleLike, pending } = useLike(product);

  const price = Number(product.price);
  const discount = Number(product.discountPercent);
  const finalPrice =
    discount > 0 ? Math.round(price - (price * discount) / 100) : price;

  return (
    <li className="group/item flex items-center gap-3 border-b border-border/60 py-3 last:border-b-0">
      <Link
        href={`/shop/${product.slug}`}
        className="flex min-w-0 flex-1 items-center gap-3"
      >
        <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-lg bg-foreground-box">
          <ImgNormalCustom
            width={48}
            height={48}
            src={getImageUrl(product.mainImage)}
            alt={product.title}
            className="size-full object-contain"
          />
        </span>

        <span className="min-w-0 flex-1">
          <P className="line-clamp-1 text-right text-sm font-medium">
            {product.title}
          </P>

          <Span dir="ltr" className="block text-xs text-muted-foreground">
            {formatToman(finalPrice)} تومان
          </Span>
        </span>
      </Link>

      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        aria-label="حذف از علاقه‌مندی‌ها"
        disabled={pending}
        onClick={() => {
          if (liked) {
            void toggleLike();
          }
        }}
        className="shrink-0 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
      >
        <FiTrash2 className="size-4" />
      </Button>
    </li>
  );
}

export default FavoriteItem;
