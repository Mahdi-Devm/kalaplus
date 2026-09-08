import { PaginatedResponse } from "@/core/assets/types/PaginationType";
import { ProductType } from "./ProductType";

export interface GetProductsForAdminQuery {
  products: PaginatedResponse<ProductType>;
}
