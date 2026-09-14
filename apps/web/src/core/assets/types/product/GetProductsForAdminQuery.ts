import { PaginatedResponse } from "@/core/assets/types/PaginationType";
import { ProductType } from "./ProductType";

export interface GetProductsForQuery {
  products: PaginatedResponse<ProductType>;
}
