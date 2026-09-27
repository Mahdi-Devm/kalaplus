"use client";
import { useProducts } from "@/core/features/pages/lib/useProducts";

import { useState } from "react";

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
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);

  return (
    <div>
      <ListProductShopPage
        filters={filters}
        products={products}
        setFilters={setFilters}
        setFilterModalOpen={setFilterModalOpen}
        isFilterModalOpen={isFilterModalOpen}
        loading={loading}
      />

      <ModalFilterMobileSize
        filters={filters}
        setFilters={setFilters}
        setFilterModalOpen={setFilterModalOpen}
        isFilterModalOpen={isFilterModalOpen}
      />
    </div>
  );
}

export default ShopProducts;
