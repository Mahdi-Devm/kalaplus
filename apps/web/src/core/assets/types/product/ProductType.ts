import { CategoryProductType } from "../../../features/panel/assets/@types/category/CategoryType";

export interface ProductType {
  id: string;
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
  colors?: string[];
  sizes?: string[];
  materials?: string[];
}
export type ProductFormType = Omit<
  ProductType,
  "id" | "category" | "createdAt"
>;
