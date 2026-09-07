import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { Input } from "@/core/components/shadcn/ui/input/input";
import { ModalFormCategoryTs } from "@/core/features/panel/assets/@types/category/ModalCategoryType";
import {
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
} from "@/core/features/panel/gql-shcema/actionCategoryShema.gql";
import { categoryZodSchema } from "@/core/features/panel/zod/productSchema.zod";
import { useImageUpload } from "@/core/hooks/useImageUpload";
import { formatZodErrors } from "@/core/utils/formatZodErrors";
import { getErrorMessage } from "@/core/utils/getErrorMessage";
import { getImageUrl } from "@/core/utils/getImageUrl";
import { useMutation } from "@apollo/client/react";
import { Loader2, X } from "lucide-react";
import { toast } from "sonner";
function FormSubmitCreateCategory({
  setCategoryForm,
  categoryForm,
  editingCategory,
  setOpenCategoryModal,
  resetCategoryForm,
}: ModalFormCategoryTs) {
  const [submitCategory, { loading }] = useMutation(CREATE_CATEGORY);
  const [updateCategory, { loading: updateLoading }] =
    useMutation(UPDATE_CATEGORY);
  const { uploading, uploadSingleImage, deleteImage } = useImageUpload();
  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const tempUrl = URL.createObjectURL(file);
    setCategoryForm((prev) => ({ ...prev, image: tempUrl }));

    const realUrl = await uploadSingleImage(file);

    if (realUrl) {
      setCategoryForm((prev) => ({ ...prev, image: realUrl }));
      toast.success("تصویر با موفقیت آپلود شد");
    } else {
      setCategoryForm((prev) => ({ ...prev, image: "" }));
    }
  }

  async function handleRemoveImage() {
    if (!categoryForm.image) return;

    if (categoryForm.image.startsWith("blob:")) {
      setCategoryForm((prev) => ({ ...prev, image: "" }));
      return;
    }

    const deleted = await deleteImage(categoryForm.image);
    if (deleted) {
      setCategoryForm((prev) => ({ ...prev, image: "" }));
      toast.success("تصویر حذف شد");
    }
  }
  function handleCategoryFormChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setCategoryForm((prev) => ({ ...prev, [name]: value }));

    if (name === "title") {
      const slug = value
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\u0600-\u06FF-]/g, "");
      setCategoryForm((prev) => ({ ...prev, slug }));
    }
  }
  async function handelSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const result = categoryZodSchema.safeParse(categoryForm);
    if (!result.success) {
      return toast.error(formatZodErrors(result.error));
    }

    if (categoryForm.image.startsWith("blob:")) {
      toast.error("لطفاً صبر کنید تا آپلود تصویر تمام شود");
      return;
    }
    const zodV = result.data;
    try {
      if (editingCategory) {
        await updateCategory({
          variables: {
            id: editingCategory.id,
            input: {
              title: zodV.title,
              slug: zodV.slug,
              image: zodV.image,
            },
          },
        });
        toast.success("دسته‌بندی با موفقیت ویرایش شد");
      } else {
        await submitCategory({
          variables: {
            input: {
              title: zodV.title,
              slug: zodV.slug,
              image: zodV.image,
            },
          },
        });
        toast.success("دسته‌بندی با موفقیت ایجاد شد");
      }

      resetCategoryForm();
      setOpenCategoryModal(false);
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  }
  return (
    <form onSubmit={(e) => handelSubmit(e)} className="space-y-3">
      <Input
        name="title"
        value={categoryForm.title}
        label="نام دسته‌بندی"
        onChange={handleCategoryFormChange}
        placeholder="مثلاً: موبایل"
        className="text-right"
        dir="rtl"
      />

      <Input
        name="slug"
        value={categoryForm.slug}
        label="اسلاگ"
        onChange={handleCategoryFormChange}
        placeholder="mobile"
        className="text-left font-mono text-sm"
        dir="ltr"
      />

      <div className="space-y-2">
        <label className="text-right block text-sm font-medium">
          تصویر دسته‌بندی
        </label>

        <div className="flex gap-2">
          <Input
            name="image"
            value={categoryForm.image}
            onChange={handleCategoryFormChange}
            placeholder="https://..."
            className="text-left text-sm flex-1"
            dir="ltr"
          />

          <div className="relative">
            <Input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleImageUpload}
              disabled={uploading}
            />
            <Button
              type="button"
              variant="outline"
              className="h-full px-4"
              disabled={uploading}
            >
              {uploading ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                "آپلود"
              )}
            </Button>
          </div>
        </div>

        {categoryForm.image && (
          <div className="relative w-20 h-20 rounded-lg overflow-hidden border">
            <ImgNormalCustom
              src={getImageUrl(categoryForm.image)}
              alt="category preview"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
            <button
              onClick={handleRemoveImage}
              className="absolute top-1 left-1 bg-black/60 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="size-3" />
            </button>
          </div>
        )}
      </div>

      <div className="flex gap-2 pt-1">
        <Button
          type="submit"
          className="flex-1"
          disabled={loading || updateLoading}
        >
          {loading
            ? "در حال ذخیره..."
            : editingCategory
              ? "ذخیره تغییرات"
              : "افزودن"}
        </Button>

        {editingCategory && (
          <Button type="button" variant="outline" onClick={resetCategoryForm}>
            انصراف
          </Button>
        )}
      </div>
    </form>
  );
}

export default FormSubmitCreateCategory;
