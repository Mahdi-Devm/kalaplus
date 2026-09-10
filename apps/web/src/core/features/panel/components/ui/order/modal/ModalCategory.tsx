import Modal from "@/core/components/custom/ui/modal/Modal";
import { Separator } from "@/core/components/shadcn/ui/separator/separator";
import { CategoryProductType } from "@/core/features/panel/assets/@types/category/CategoryType";
import { ModalCategoryTs } from "@/core/features/panel/assets/@types/category/ModalCategoryType";
import { DELETE_CATEGORY } from "@/core/gql-shcema/actionCategoryShema.gql";
import { getErrorMessage } from "@/core/utils/getErrorMessage";
import { useMutation } from "@apollo/client/react";
import { toast } from "sonner";
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
  refetch,
}: ModalCategoryTs) {
  const [deleteReq] = useMutation(DELETE_CATEGORY);
  function handleEditCategory(cat: CategoryProductType) {
    setEditingCategory(cat);
    setCategoryForm({
      title: cat.title,
      slug: cat.slug,
      image: cat.image || "",
    });
  }
  async function handleDeleteCategory(id: string) {
    try {
      await deleteReq({
        variables: { id },
      });
      await refetch();
      toast.success("با موفقیت حذف شد.");
    } catch (err) {
      toast.error(getErrorMessage(err));
    }
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
          handleDeleteCategory={handleDeleteCategory}
        />
      </div>
    </Modal>
  );
}

export default ModalCategory;
