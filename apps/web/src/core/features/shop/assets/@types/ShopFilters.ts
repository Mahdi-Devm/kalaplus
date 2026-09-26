export interface ShopFiltersState {
  priceRange: [number, number];
  colors: string[];
}

export interface ShopFiltersProps {
  value: ShopFiltersState;
  onChange: (value: ShopFiltersState) => void;
  className?: string;
}
