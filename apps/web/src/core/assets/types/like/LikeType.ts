import { ProductType } from "../product/ProductType";

type CategoryProductType = {
  id: string;
  title: string;
};

/** Product payload embedded in a Like (see LikeFields fragment). */
export type LikeProduct = Pick<
  ProductType,
  "id" | "title" | "slug" | "price" | "discountPercent" | "stock" | "mainImage"
> & {
  categoryId?: string;
  category?: CategoryProductType;
  createdAt?: string;
};

export interface LikeType {
  id: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
  product: LikeProduct;
}

export interface GetMyLikesQuery {
  likes: LikeType[];
}
