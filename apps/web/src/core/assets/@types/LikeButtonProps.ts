import type { LikeTarget } from "@/core/features/like/lib/useLike";

export interface LikeButtonProps {
  /** Product used for the like mutation and optimistic store entry. */
  product: LikeTarget;
  className?: string;
  iconClassName?: string;
  ariaLabel?: string;
}
