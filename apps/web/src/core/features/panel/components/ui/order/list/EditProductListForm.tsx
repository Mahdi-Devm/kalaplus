"use client";

import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { Input } from "@/core/components/shadcn/ui/input/input";
import { ProductType } from "@/core/features/panel/assets/@types/product/ProductType";
import { getImageUrl } from "@/core/utils/getImageUrl";
import Form from "next/form";
import { useState } from "react";

interface EditProductFormProps {
  product: ProductType;
  onSubmit: (product: ProductType) => void;
  onCancel: () => void;
}

export default function EditProductListForm({
  product,
  onSubmit,
  onCancel,
}: EditProductFormProps) {
  const [formData, setFormData] = useState({
    ...product,
    price: String(product.price ?? ""),
    discountPercent: String(product.discountPercent ?? 0),
    stock: String(product.stock ?? ""),
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit() {
    onSubmit(formData);
  }

  return (
    <Form action={handleSubmit} className="space-y-4">
      <Input
        label="عنوان"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="عنوان محصول"
        required
      />

      <Input
        label="اسلاگ"
        name="slug"
        value={formData.slug}
        onChange={handleChange}
        placeholder="slug-product"
        required
        className="text-left font-mono text-sm"
        dir="ltr"
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="قیمت (تومان)"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="مثال: 45000000"
          type="number"
          required
        />
        <Input
          label="درصد تخفیف"
          name="discountPercent"
          value={formData.discountPercent}
          onChange={handleChange}
          placeholder="مثال: 10"
          type="number"
          min="0"
          max="100"
        />
      </div>

      <Input
        label="موجودی"
        name="stock"
        value={formData.stock}
        onChange={handleChange}
        placeholder="تعداد موجودی"
        type="number"
        required
      />

      <Input
        label="توضیحات کوتاه"
        name="shortDescription"
        value={formData.shortDescription}
        onChange={handleChange}
        placeholder="توضیحات کوتاه محصول"
      />

      <div className="space-y-1">
        <span className="text-sm font-medium">توضیحات کامل</span>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="توضیحات کامل محصول"
          className="w-full min-h-25 p-2 border rounded-md text-sm"
          dir="rtl"
        />
      </div>

      <div className="space-y-1">
        <Input
          label="تصویر اصلی"
          name="mainImage"
          value={formData.mainImage}
          onChange={handleChange}
          placeholder="/uploads/products/..."
          className="text-left text-sm"
          dir="ltr"
        />
        {formData.mainImage && (
          <div className="mt-2 relative w-24 h-24 rounded-lg overflow-hidden   border">
            <ImgNormalCustom
              src={getImageUrl(formData.mainImage)}
              alt={formData.title}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>

      <div className="flex gap-2 justify-end pt-4 border-t">
        <Button type="button" variant="outline" onClick={onCancel}>
          انصراف
        </Button>
        <Button type="submit">ذخیره تغییرات</Button>
      </div>
    </Form>
  );
}
