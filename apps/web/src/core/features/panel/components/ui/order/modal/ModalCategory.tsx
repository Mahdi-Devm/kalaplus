import Modal from "@/core/components/custom/ui/modal/Modal";
import { Separator } from "@/core/components/shadcn/ui/separator/separator";
import { CategoryProductType } from "@/core/features/panel/assets/@types/category/CategoryType";
import { ModalCategoryTs } from "@/core/features/panel/assets/@types/category/ModalCategoryType";
import ListOfCategory from "../../category/ListOfCategory";
import FormSubmitCreateCategory from "./FormSubmitCreateCategory";
function ModalCategory({
  editingCategory,
  openCategoryModal,
  setEditingCategory,
  setCategoryForm,
  setOpenCategoryModal,
  categoryForm,
  categories,
  resetCategoryForm,
}: ModalCategoryTs) {
  function handleEditCategory(cat: CategoryProductType) {
    setEditingCategory(cat);
    setCategoryForm({
      title: cat.title,
      slug: cat.slug,
      image: cat.image || "",
    });
  }
  return (
    <Modal
      open={openCategoryModal}
      onOpenChange={setOpenCategoryModal}
      title={editingCategory ? "ویرایش دسته‌بندی" : "مدیریت دسته‌بندی‌ها"}
      description="افزودن، ویرایش یا حذف دسته‌بندی"
      size="lg"
      hideDefaultFooter
    >
      <div className="space-y-5">
        <FormSubmitCreateCategory
          categoryForm={categoryForm}
          setCategoryForm={setCategoryForm}
          editingCategory={editingCategory}
          resetCategoryForm={resetCategoryForm}
          setOpenCategoryModal={setOpenCategoryModal}
        />

        <Separator />

        <ListOfCategory
          categories={categories}
          handleEditCategory={handleEditCategory}
        />
      </div>
    </Modal>
  );
}

export default ModalCategory;
