import { Dispatch, SetStateAction, useState } from "react";
import { CategoryProductType } from "../../../assets/@types/category/CategoryType";
import { ProductType } from "../../../assets/@types/product/ProductTYpe";
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
  const [categories] = useState<CategoryProductType[]>([
    { id: "1", name: "موبایل و تبلت", slug: "mobile-tablet", image: "" },
    { id: "2", name: "لپ‌تاپ و کامپیوتر", slug: "laptop-pc", image: "" },
    { id: "3", name: "لوازم جانبی", slug: "accessories", image: "" },
  ]);

  const [categoryForm, setCategoryForm] = useState({
    name: "",
    slug: "",
    image: "",
  });

  function resetCategoryForm() {
    setCategoryForm({ name: "", slug: "", image: "" });
    setEditingCategory(null);
  }

  return (
    <>
      <CardCategoryOrder
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
