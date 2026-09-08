import { CategoryProductType } from "../category/CategoryType";

export interface ProductType {
  title: string;
  slug: string;
  categoryId: string;
  category: CategoryProductType;
  createdAt: string;
  description: string;
  shortDescription: string;
  price: string;
  discountPercent: string;
  stock: string;
  mainImage: string;
  images: string[];
}
