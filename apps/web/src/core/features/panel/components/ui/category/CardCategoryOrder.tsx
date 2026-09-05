import { Button } from "@/core/components/shadcn/ui/button/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/core/components/shadcn/ui/card/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/core/components/shadcn/ui/select/select";
import { Plus } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { CategoryProductType } from "../../../assets/@types/category/CategoryType";
import { ProductType } from "../../../assets/@types/product/ProductTYpe";
function CardCategoryOrder({
  categories,
  resetCategoryForm,
  setForm,
  setOpenCategoryModal,
  form,
}: {
  form: ProductType;
  setForm: Dispatch<SetStateAction<ProductType>>;
  categories: CategoryProductType[];
  resetCategoryForm: () => void;
  setOpenCategoryModal: (v: boolean) => void;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-right">دسته‌بندی</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2">
          <label className="text-right block text-sm font-medium">
            انتخاب دسته‌بندی *
          </label>
          <Select
            value={form.categoryId}
            onValueChange={(value) =>
              setForm((prev) => ({ ...prev, categoryId: value }))
            }
          >
            <SelectTrigger className="w-full text-right" dir="rtl">
              <SelectValue placeholder="انتخاب کنید..." />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.id} value={cat.id}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          type="button"
          variant="outline"
          className="w-full gap-2"
          onClick={() => {
            resetCategoryForm();
            setOpenCategoryModal(true);
          }}
        >
          <Plus className="size-4" />
          مدیریت دسته‌بندی‌ها
        </Button>
      </CardContent>
    </Card>
  );
}

export default CardCategoryOrder;
