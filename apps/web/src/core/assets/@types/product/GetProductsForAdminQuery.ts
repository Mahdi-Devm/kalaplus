import { PaginatedResponse } from "../PaginationType";
import { ProductType } from "./ProductType";

export interface GetProductsForQuery {
  products: PaginatedResponse<ProductType>;
}
