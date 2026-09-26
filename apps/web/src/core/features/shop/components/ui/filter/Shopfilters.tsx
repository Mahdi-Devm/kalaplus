"use client";

import SearchInput from "@/core/components/custom/ui/search-input/SearchInput";
import { Span } from "@/core/components/custom/ui/typography/Typography";
import { cn } from "@/core/utils/shadcn/utils";
import {
  ShopFiltersProps,
  ShopFiltersState,
} from "../../../assets/@types/ShopFilters";
import {
  BRAND_OPTIONS,
  COLOR_OPTIONS,
  PRICE_BOUNDS,
} from "../../../assets/mock/shopData";
import { PriceRangeSlider } from "../PriceRangeSlider";
import FilterCard from "./FilterCard";

export function ShopFilters({ value, onChange, className }: ShopFiltersProps) {
  const toggleInArray = (arr: string[], id: string) =>
    arr.includes(id) ? arr.filter((c) => c !== id) : [...arr, id];

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <FilterCard title="فیلتر براساس قیمت :">
        <SearchInput />
      </FilterCard>
      <FilterCard title="فیلتر براساس قیمت :">
        <PriceRangeSlider
          min={PRICE_BOUNDS.min}
          max={PRICE_BOUNDS.max}
          step={PRICE_BOUNDS.step}
          value={value.priceRange}
          onChange={(priceRange) => onChange({ ...value, priceRange })}
        />
      </FilterCard>

      <FilterCard title="فیلتر براساس رنگ :">
        <div className="grid grid-cols-3 gap-3">
          {COLOR_OPTIONS.map((color) => {
            const active = value.colors.includes(color.id);
            return (
              <button
                key={color.id}
                type="button"
                onClick={() =>
                  onChange({
                    ...value,
                    colors: toggleInArray(value.colors, color.id),
                  })
                }
                className="flex items-center gap-2"
              >
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full ring-1 ring-border transition-all",
                    active && "ring-2 ring-offset-2 ring-primary",
                  )}
                  style={{ backgroundColor: color.hex }}
                />
                <Span className="text-sm text-muted-foreground">
                  {color.label}
                </Span>
              </button>
            );
          })}
        </div>
      </FilterCard>

      <FilterCard title="فیلتر بر اساس برند:">
        <div className="grid grid-cols-3 gap-3">
          {BRAND_OPTIONS.map((brand) => {
            const active = value.brands.includes(brand.id);
            return (
              <button
                key={brand.id}
                type="button"
                onClick={() =>
                  onChange({
                    ...value,
                    brands: toggleInArray(value.brands, brand.id),
                  })
                }
                className={cn(
                  "flex flex-col items-center justify-center gap-1 rounded-lg border p-3 transition-colors",
                  active
                    ? "border-primary bg-accent/20"
                    : "border-border bg-secondary/40 hover:bg-secondary",
                )}
              >
                <Span className="text-sm font-medium">{brand.label}</Span>
              </button>
            );
          })}
        </div>
      </FilterCard>
    </div>
  );
}

export const DEFAULT_SHOP_FILTERS: ShopFiltersState = {
  priceRange: [PRICE_BOUNDS.min, PRICE_BOUNDS.max],
  colors: [],
  brands: [],
};
