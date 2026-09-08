import { useQuery } from "@apollo/client/react";
import { Dispatch, SetStateAction, useState } from "react";
import { CategoryProductType } from "../../../assets/@types/category/CategoryType";
import { GetAllCategories } from "../../../assets/@types/category/GetAllCategories";
import { ProductType } from "../../../assets/@types/product/ProductType";
import { GET_ALL_CATEGORY } from "../../../gql-shcema/actionCategoryShema.gql";
import ModalCategory from "../order/modal/ModalCategory";
import CardCategoryOrder from "./CardCategoryOrder";

function CategoryAction({
  setForm,
  form,
}: {
  form: ProductType;
  setForm: Dispatch<SetStateAction<ProductType>>;
}) {
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [editingCategory, setEditingCategory] =
    useState<CategoryProductType | null>(null);
  const { loading, data } = useQuery<GetAllCategories>(GET_ALL_CATEGORY);
  const categories = data?.categories || [];
  const [categoryForm, setCategoryForm] = useState({
    title: "",
    slug: "",
    image: "",
  });
  function resetCategoryForm() {
    setCategoryForm({ title: "", slug: "", image: "" });
    setEditingCategory(null);
  }

  return (
    <>
      <CardCategoryOrder
        loading={loading}
        categories={categories}
        resetCategoryForm={resetCategoryForm}
        form={form}
        setOpenCategoryModal={setOpenCategoryModal}
        setForm={setForm}
      />

      <ModalCategory
        openCategoryModal={openCategoryModal}
        editingCategory={editingCategory}
        categoryForm={categoryForm}
        categories={categories}
        setCategoryForm={setCategoryForm}
        resetCategoryForm={resetCategoryForm}
        setEditingCategory={setEditingCategory}
        setOpenCategoryModal={setOpenCategoryModal}
      />
    </>
  );
}

export default CategoryAction;
