import { Small } from "@/core/components/custom/ui/typography/Typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/core/components/shadcn/ui/card/card";
import { Input } from "@/core/components/shadcn/ui/input/input";
import { Textarea } from "@/core/components/shadcn/ui/Textarea/textarea";
import { ProductType } from "@/core/features/panel/assets/@types/product/ProductTYpe";
function BasicProductFormInfo({
  form,
  handleChange,
}: {
  form: ProductType;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-right">اطلاعات پایه</CardTitle>
        <CardDescription className="text-right">
          عنوان، اسلاگ و توضیحات محصول
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          id="title"
          name="title"
          label="عنوان محصول *"
          value={form.title}
          onChange={handleChange}
          placeholder="مثلاً: گوشی سامسونگ گلکسی S24"
          className="text-right"
          dir="rtl"
        />

        <div className="space-y-1">
          <Input
            id="slug"
            name="slug"
            label="اسلاگ (Slug)"
            value={form.slug}
            onChange={handleChange}
            placeholder="samsung-galaxy-s24"
            className="text-left font-mono text-sm"
            dir="ltr"
          />
          <Small className="text-muted-foreground text-right block">
            به صورت خودکار از عنوان ساخته می‌شود
          </Small>
        </div>

        <div className="space-y-2">
          <label className="text-right block text-sm font-medium">
            توضیحات
          </label>
          <Textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="توضیحات کامل محصول را اینجا بنویسید..."
            rows={5}
            className="text-right resize-none"
            dir="rtl"
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default BasicProductFormInfo;
