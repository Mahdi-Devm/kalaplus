"use client";

import { Button } from "@/core/components/shadcn/ui/button/button";
import { Input } from "@/core/components/shadcn/ui/input/input";
import { ProductType } from "@/core/features/panel/assets/@types/product/ProductType";
import Image from "next/image";
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
  const [formData, setFormData] = useState<ProductType>({
    ...product,
    price: product.price.toString(),
    discountPercent: product.discountPercent.toString(),
    stock: product.stock.toString(),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form id="modal-form" onSubmit={handleSubmit} className="space-y-4">
      {/* فیلد عنوان */}
      <div>
        <label className="block text-sm font-medium mb-1">عنوان</label>
        <Input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="عنوان محصول"
          required
        />
      </div>

      {/* فیلد اسلاگ */}
      <div>
        <label className="block text-sm font-medium mb-1">اسلاگ</label>
        <Input
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          placeholder="slug-product"
          required
          className="text-left font-mono text-sm"
          dir="ltr"
        />
      </div>

      {/* دو ستونه قیمت و تخفیف */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">قیمت (تومان)</label>
          <Input
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="مثال: 45000000"
            type="number"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">درصد تخفیف</label>
          <Input
            name="discountPercent"
            value={formData.discountPercent}
            onChange={handleChange}
            placeholder="مثال: 10"
            type="number"
            min="0"
            max="100"
          />
        </div>
      </div>

      {/* موجودی */}
      <div>
        <label className="block text-sm font-medium mb-1">موجودی</label>
        <Input
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          placeholder="تعداد موجودی"
          type="number"
          required
        />
      </div>

      {/* توضیحات کوتاه */}
      <div>
        <label className="block text-sm font-medium mb-1">توضیحات کوتاه</label>
        <Input
          name="shortDescription"
          value={formData.shortDescription}
          onChange={handleChange}
          placeholder="توضیحات کوتاه محصول"
        />
      </div>

      {/* توضیحات کامل */}
      <div>
        <label className="block text-sm font-medium mb-1">توضیحات کامل</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="توضیحات کامل محصول"
          className="w-full min-h-[100px] p-2 border rounded-md text-sm"
          dir="rtl"
        />
      </div>

      {/* تصویر اصلی */}
      <div>
        <label className="block text-sm font-medium mb-1">تصویر اصلی</label>
        <Input
          name="mainImage"
          value={formData.mainImage}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
          className="text-left text-sm"
          dir="ltr"
        />
        {formData.mainImage && (
          <div className="mt-2 relative w-20 h-20 rounded overflow-hidden border">
            <Image
              src={formData.mainImage}
              alt={formData.title}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>

      {/* دکمه‌های فرم در فوتر */}
      <div className="flex gap-2 justify-end pt-4 border-t">
        <Button type="button" variant="outline" onClick={onCancel}>
          انصراف
        </Button>
        <Button type="submit">ذخیره تغییرات</Button>
      </div>
    </form>
  );
}
