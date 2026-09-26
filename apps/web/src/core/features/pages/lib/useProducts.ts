"use client";

import { GetProductsForQuery } from "@/core/assets/types/product/GetProductsForAdminQuery";
import { GET_PRODUCTS_FOR_USER } from "@/core/features/pages/gql-shcema/ProductSchema.gql";
import { useQuery } from "@apollo/client/react";

interface UseProductsParams {
  page?: number;
  limit?: number;
  search?: string;
  filter_price?: string;
  sortBy?: string;
  filter_categoryId?: string;
}

export function useProducts({
  page = 1,
  limit = 12,
  search,
  filter_price,
  filter_categoryId,
  sortBy,
}: UseProductsParams = {}) {
  return useQuery<GetProductsForQuery>(GET_PRODUCTS_FOR_USER, {
    variables: {
      page,
      limit,
      search,
      filter_price,
      filter_categoryId,
      sortBy: sortBy ? [sortBy] : undefined,
    },
    fetchPolicy: "network-only",
  });
}
