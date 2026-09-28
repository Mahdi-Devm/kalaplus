"use client";

import { P, Span } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/core/components/shadcn/ui/popover/popover";
import FavoriteItem from "@/core/features/like/components/ui/FavoriteItem";
import { useFavorites } from "@/core/features/like/lib/useLike";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";

function FavoritesPopover() {
  const { favorites, count, loading } = useFavorites();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-lg"
          aria-label="علاقه‌مندی‌ها"
        >
          <FiHeart className="size-4.75" />

          {count > 0 && (
            <span className="absolute right-0 top-0 flex size-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">
              {count > 99 ? "۹۹+" : count.toLocaleString("fa-IR")}
            </span>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end" sideOffset={8} className="w-80 p-4 bg-white">
        <div className="mb-2 flex items-center justify-between">
          <P className="text-sm font-semibold">علاقه‌مندی‌ها</P>

          <Span className="text-xs text-muted-foreground">
            {count.toLocaleString("fa-IR")} محصول
          </Span>
        </div>

        {loading ? (
          <div className="space-y-3 py-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex items-center gap-3 py-2">
                <span className="size-12 shrink-0 animate-pulse rounded-lg bg-muted" />
                <span className="flex-1 space-y-2">
                  <span className="block h-3.5 w-3/4 animate-pulse rounded bg-muted" />
                  <span className="block h-3 w-1/3 animate-pulse rounded bg-muted" />
                </span>
              </div>
            ))}
          </div>
        ) : favorites.length === 0 ? (
          <div className="flex flex-col items-center gap-2 py-8 text-center">
            <FiHeart className="size-8 text-muted-foreground/40" />

            <Span className="text-sm text-muted-foreground">
              هنوز محصولی لایک نکرده‌اید
            </Span>

            <Button asChild variant="outline" size="sm" className="mt-1">
              <Link href="/shop">مشاهده فروشگاه</Link>
            </Button>
          </div>
        ) : (
          <ul className="-mx-1 max-h-80 overflow-y-auto px-1">
            {favorites.map((like) => (
              <FavoriteItem key={like.id} like={like} />
            ))}
          </ul>
        )}
      </PopoverContent>
    </Popover>
  );
}

export default FavoritesPopover;
