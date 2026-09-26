"use client";
import { useProducts } from "@/core/features/pages/lib/useProducts";

import { useState } from "react";

import ProductsSkeleton from "@/core/features/pages/components/ui/product/skeleton/ProductsSkeleton";
import { DEFAULT_SHOP_FILTERS } from "../filter/Shopfilters";
import ModalFilterMobileSize from "../modal/ModalFilterMobileSize";
import ListProductShopPage from "./ListProductShopPage";
function ShopProducts({
  page,
  limit,
  search,
  filter_price,
  filter_categoryId,
  sortBy,
}: {
  page: number;
  limit: number;
  search?: string;
  filter_price?: string;
  sortBy?: string;
  filter_categoryId?: string;
}) {
  const { loading, data } = useProducts({
    page,
    limit,
    search,
    filter_price,
    sortBy,
    filter_categoryId,
  });

  const products = data?.products?.data ?? [];

  const [filters, setFilters] = useState(DEFAULT_SHOP_FILTERS);
  if (loading) {
    return <ProductsSkeleton />;
  }
  return (
    <div>
      <ListProductShopPage
        filters={filters}
        products={products}
        setFilters={setFilters}
      />

      <ModalFilterMobileSize filters={filters} setFilters={setFilters} />
    </div>
  );
}

export default ShopProducts;
