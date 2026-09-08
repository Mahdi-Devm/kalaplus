import { Dispatch, SetStateAction } from "react";
import { CategoryProductType } from "./CategoryType";
export type CategoryForm = {
  title: string;
  slug: string;
  image: string;
};
export type ModalCategoryTs = {
  categories: CategoryProductType[];
  categoryForm: CategoryForm;
  setCategoryForm: Dispatch<SetStateAction<CategoryForm>>;
  editingCategory: CategoryProductType | null;
  setEditingCategory: Dispatch<SetStateAction<CategoryProductType | null>>;
  openCategoryModal: boolean;
  setOpenCategoryModal: Dispatch<SetStateAction<boolean>>;
  resetCategoryForm: () => void;
};
export type ModalFormCategoryTs = {
  setCategoryForm: Dispatch<SetStateAction<CategoryForm>>;
  categoryForm: CategoryForm;
  editingCategory: CategoryProductType | null;
  setOpenCategoryModal: Dispatch<SetStateAction<boolean>>;
  resetCategoryForm: () => void;
};
