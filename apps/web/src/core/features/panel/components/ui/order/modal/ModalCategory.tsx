import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";
import Modal from "@/core/components/custom/ui/modal/Modal";
import { P } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { Input } from "@/core/components/shadcn/ui/input/input";
import { Separator } from "@/core/components/shadcn/ui/separator/separator";
import { CategoryProductType } from "@/core/features/panel/assets/@types/category/CategoryType";
import { ModalCategoryProps } from "@/core/features/panel/assets/@types/category/ModalCategoryType";
import { Pencil, Trash2, Upload, X } from "lucide-react";
function ModalCategory({
  editingCategory,
  openCategoryModal,
  setEditingCategory,
  setCategoryForm,
  setOpenCategoryModal,
  categoryForm,
  categories,
  resetCategoryForm,
}: ModalCategoryProps) {
  const handleEditCategory = (cat: CategoryProductType) => {
    setEditingCategory(cat);
    setCategoryForm({
      name: cat.name,
      slug: cat.slug,
      image: cat.image || "",
    });
  };
  const handleCategoryFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategoryForm((prev) => ({ ...prev, [name]: value }));

    if (name === "name") {
      const slug = value
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\u0600-\u06FF-]/g, "");
      setCategoryForm((prev) => ({ ...prev, slug }));
    }
  };
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
        <div className="space-y-3">
          <Input
            name="name"
            value={categoryForm.name}
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
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const url = URL.createObjectURL(file);
                      setCategoryForm((prev) => ({ ...prev, image: url }));
                    }
                  }}
                />
                <Button type="button" variant="outline" className="h-full px-4">
                  آپلود
                </Button>
              </div>
            </div>

            {categoryForm.image && (
              <div className="relative w-20 h-20 rounded-lg overflow-hidden border">
                <ImgNormalCustom
                  src={categoryForm.image}
                  alt="category preview"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() =>
                    setCategoryForm((prev) => ({ ...prev, image: "" }))
                  }
                  className="absolute top-1 left-1 bg-black/60 text-white rounded-full p-0.5"
                >
                  <X className="size-3" />
                </button>
              </div>
            )}
          </div>

          <div className="flex gap-2 pt-1">
            <Button type="button" className="flex-1">
              {editingCategory ? "ذخیره تغییرات" : "افزودن"}
            </Button>

            {editingCategory && (
              <Button
                type="button"
                variant="outline"
                onClick={resetCategoryForm}
              >
                انصراف
              </Button>
            )}
          </div>
        </div>

        <Separator />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex items-center gap-3 p-2.5 rounded-lg border hover:bg-muted/40 transition-colors"
            >
              <div className="size-10 rounded-md bg-muted overflow-hidden shrink-0">
                {cat.image ? (
                  <ImgNormalCustom
                    src={cat.image}
                    alt={cat.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Upload className="size-4 text-muted-foreground" />
                  </div>
                )}
              </div>

              <div className="text-right flex-1 min-w-0">
                <P className="font-medium truncate text-sm">{cat.name}</P>
                <P className="text-xs text-muted-foreground font-mono truncate">
                  {cat.slug}
                </P>
              </div>

              <div className="flex items-center gap-0.5 shrink-0">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="size-8"
                  onClick={() => handleEditCategory(cat)}
                >
                  <Pencil className="size-3.5" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="size-8 text-destructive hover:text-destructive"
                >
                  <Trash2 className="size-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}

export default ModalCategory;
