"use client";

import SearchInput from "@/core/components/custom/ui/search-input/SearchInput";
import { useUpdateQuery } from "@/core/hooks/useUpdataQuery";
import { cn } from "@/core/utils/shadcn/utils";
import {
  ShopFiltersProps,
  ShopFiltersState,
} from "../../../assets/@types/ShopFilters";
import { PRICE_BOUNDS } from "../../../assets/mock/shopData";
import { PriceRangeSlider } from "../shop/PriceRangeSlider";
import { CategoryShopFilter } from "./CategoryShopFilter";
import FilterCard from "./FilterCard";

export function ShopFilters({ value, onChange, className }: ShopFiltersProps) {
  const updateQuery = useUpdateQuery();

  const handlePriceChange = (priceRange: [number, number]) => {
    onChange({
      ...value,
      priceRange,
    });

    const [min, max] = priceRange;

    updateQuery("filter_price", `$gte:${min},$lte:${max}`);
  };

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <FilterCard title="جستجو">
        <SearchInput />
      </FilterCard>

      <FilterCard title="فیلتر براساس قیمت">
        <PriceRangeSlider
          min={PRICE_BOUNDS.min}
          max={PRICE_BOUNDS.max}
          step={PRICE_BOUNDS.step}
          value={value.priceRange}
          onChange={handlePriceChange}
        />
      </FilterCard>

      <FilterCard title="دسته‌بندی">
        <CategoryShopFilter />
      </FilterCard>
    </div>
  );
}

export const DEFAULT_SHOP_FILTERS: ShopFiltersState = {
  priceRange: [PRICE_BOUNDS.min, PRICE_BOUNDS.max],
  colors: [],
};
