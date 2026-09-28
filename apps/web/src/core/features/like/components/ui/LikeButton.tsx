"use client";

import { LikeButtonProps } from "@/core/features/like/assets/@types/LikeButtonProps";
import { useLike } from "@/core/features/like/lib/useLike";
import { cn } from "@/core/utils/shadcn/utils";
import { FiHeart } from "react-icons/fi";

/**
 * Reusable optimistic like toggle used on product cards, sliders and the
 * product page. State comes from the shared like store, so every mounted
 * LikeButton for the same product stays in sync automatically.
 */
export function LikeButton({
  product,
  className,
  iconClassName,
  ariaLabel = "افزودن به علاقه‌مندی‌ها",
}: LikeButtonProps) {
  const { liked, toggleLike, pending } = useLike(product);

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-pressed={liked}
      disabled={pending}
      onClick={(event) => {
        // Cards are wrapped in product links; keep the click local.
        event.preventDefault();
        event.stopPropagation();
        void toggleLike();
      }}
      className={cn(
        "grid place-items-center rounded-full transition-all",
        "disabled:pointer-events-none disabled:opacity-60",
        className,
      )}
    >
      <FiHeart
        className={cn(
          "size-4 transition-colors",
          liked && "fill-destructive text-destructive",
          iconClassName,
        )}
      />
    </button>
  );
}
