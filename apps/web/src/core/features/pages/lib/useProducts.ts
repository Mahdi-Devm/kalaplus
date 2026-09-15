"use client";

import { GetProductsForQuery } from "@/core/assets/types/product/GetProductsForAdminQuery";
import { GET_PRODUCTS_FOR_USER } from "@/core/features/pages/gql-shcema/ProductSchema.gql";
import { useQuery } from "@apollo/client/react";

export function useProducts() {
  return useQuery<GetProductsForQuery>(GET_PRODUCTS_FOR_USER, {
    variables: {
      page: 1,
      limit: 12,
    },
    fetchPolicy: "cache-first",
  });
}
