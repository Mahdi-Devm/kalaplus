import { Dispatch, SetStateAction } from "react";
import { CategoryProductType } from "./CategoryType";
export type CategoryForm = {
  name: string;
  slug: string;
  image: string;
};
export type ModalCategoryProps = {
  categories: CategoryProductType[];
  categoryForm: CategoryForm;
  setCategoryForm: Dispatch<SetStateAction<CategoryForm>>;
  editingCategory: CategoryProductType | null;
  setEditingCategory: Dispatch<SetStateAction<CategoryProductType | null>>;
  openCategoryModal: boolean;
  setOpenCategoryModal: Dispatch<SetStateAction<boolean>>;
  resetCategoryForm: () => void;
};
