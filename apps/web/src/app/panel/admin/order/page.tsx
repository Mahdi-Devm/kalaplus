"use client";

import Modal from "@/core/components/custom/ui/modal/Modal";
import {
  H2,
  Muted,
  Small,
} from "@/core/components/custom/ui/typography/Typography";
import { Badge } from "@/core/components/shadcn/ui/badge/badge";
import { Button } from "@/core/components/shadcn/ui/button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/core/components/shadcn/ui/card/card";
import { Input } from "@/core/components/shadcn/ui/input/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/core/components/shadcn/ui/select/select";
import { Separator } from "@/core/components/shadcn/ui/separator/separator";
import { Textarea } from "@/core/components/shadcn/ui/Textarea/textarea";
import { Pencil, Plus, Trash2, Upload, X } from "lucide-react";
import { useState } from "react";

type Category = {
  id: string;
  name: string;
  slug: string;
  image?: string;
};

export default function page() {
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  // فقط برای نمایش UI
  const [categories] = useState<Category[]>([
    { id: "1", name: "موبایل و تبلت", slug: "mobile-tablet", image: "" },
    { id: "2", name: "لپ‌تاپ و کامپیوتر", slug: "laptop-pc", image: "" },
    { id: "3", name: "لوازم جانبی", slug: "accessories", image: "" },
  ]);

  const [categoryForm, setCategoryForm] = useState({
    name: "",
    slug: "",
    image: "",
  });

  const [form, setForm] = useState({
    title: "",
    slug: "",
    categoryId: "",
    description: "",
    price: "",
    discountPercent: "",
    stock: "",
    mainImage: "",
    images: [] as string[],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "title") {
      const slug = value
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\u0600-\u06FF-]/g, "");
      setForm((prev) => ({ ...prev, slug }));
    }
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

  const resetCategoryForm = () => {
    setCategoryForm({ name: "", slug: "", image: "" });
    setEditingCategory(null);
  };

  const handleEditCategory = (cat: Category) => {
    setEditingCategory(cat);
    setCategoryForm({
      name: cat.name,
      slug: cat.slug,
      image: cat.image || "",
    });
  };

  const finalPrice =
    form.price && form.discountPercent
      ? (
          Number(form.price) -
          (Number(form.price) * Number(form.discountPercent)) / 100
        ).toLocaleString()
      : form.price
        ? Number(form.price).toLocaleString()
        : "—";

  return (
    <div className="space-y-6 mx-auto">
      <form className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
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

            {/* تصاویر محصول */}
            <Card>
              <CardHeader>
                <CardTitle className="text-right">تصاویر محصول</CardTitle>
                <CardDescription className="text-right">
                  تصویر اصلی و گالری تصاویر
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* تصویر اصلی */}
                <div className="space-y-3">
                  <label className="text-right block text-sm font-medium">
                    تصویر اصلی *
                  </label>

                  <div className="flex gap-2">
                    <Input
                      name="mainImage"
                      value={form.mainImage}
                      onChange={handleChange}
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
                            setForm((prev) => ({ ...prev, mainImage: url }));
                          }
                        }}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className="h-full px-4"
                      >
                        آپلود
                      </Button>
                    </div>
                  </div>

                  {form.mainImage && (
                    <div className="relative w-28 h-28 rounded-xl overflow-hidden border">
                      <img
                        src={form.mainImage}
                        alt="main preview"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setForm((prev) => ({ ...prev, mainImage: "" }))
                        }
                        className="absolute top-1.5 left-1.5 bg-black/60 text-white rounded-full p-1"
                      >
                        <X className="size-3.5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* گالری تصاویر */}
                <div className="space-y-3">
                  <label className="text-right block text-sm font-medium">
                    گالری تصاویر
                  </label>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {form.images.map((img, index) => (
                      <div
                        key={index}
                        className="relative aspect-square rounded-xl overflow-hidden border"
                      >
                        <img
                          src={img}
                          alt={`gallery-${index}`}
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setForm((prev) => ({
                              ...prev,
                              images: prev.images.filter((_, i) => i !== index),
                            }))
                          }
                          className="absolute top-1.5 left-1.5 bg-black/60 text-white rounded-full p-1"
                        >
                          <X className="size-3.5" />
                        </button>
                      </div>
                    ))}

                    {/* دکمه اضافه کردن */}
                    <div className="relative aspect-square border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-muted/50 cursor-pointer transition-colors">
                      <Input
                        type="file"
                        accept="image/*"
                        multiple
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={(e) => {
                          const files = e.target.files;
                          if (files) {
                            const urls = Array.from(files).map((file) =>
                              URL.createObjectURL(file),
                            );
                            setForm((prev) => ({
                              ...prev,
                              images: [...prev.images, ...urls],
                            }));
                          }
                        }}
                      />
                      <Plus className="size-6 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        افزودن
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* سایدبار */}
          <div className="space-y-6">
            {/* قیمت و موجودی */}
            <Card>
              <CardHeader>
                <CardTitle className="text-right">قیمت و موجودی</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  id="price"
                  name="price"
                  type="number"
                  label="قیمت (تومان) *"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="0"
                  min={0}
                  className="text-left"
                  dir="ltr"
                />

                <Input
                  id="discountPercent"
                  name="discountPercent"
                  type="number"
                  label="درصد تخفیف"
                  value={form.discountPercent}
                  onChange={handleChange}
                  placeholder="0"
                  min={0}
                  max={100}
                  className="text-left"
                  dir="ltr"
                />

                <Input
                  id="stock"
                  name="stock"
                  type="number"
                  label="موجودی انبار *"
                  value={form.stock}
                  onChange={handleChange}
                  placeholder="0"
                  min={0}
                  className="text-left"
                  dir="ltr"
                />

                <Separator />

                <div className="flex items-center justify-between">
                  <Muted>قیمت نهایی:</Muted>
                  <div className="flex items-center gap-2">
                    {form.discountPercent &&
                      Number(form.discountPercent) > 0 && (
                        <Badge variant="destructive" className="text-xs">
                          {form.discountPercent}٪ تخفیف
                        </Badge>
                      )}
                    <span className="font-bold text-lg">{finalPrice}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* دسته‌بندی */}
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

            {/* دکمه‌ها */}
            <div className="flex flex-col gap-3">
              <Button type="submit" size="lg" className="w-full">
                ایجاد محصول
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="w-full"
              >
                انصراف
              </Button>
            </div>
          </div>
        </div>
      </form>

      {/* Modal دسته‌بندی */}
      <Modal
        open={openCategoryModal}
        onOpenChange={setOpenCategoryModal}
        title={editingCategory ? "ویرایش دسته‌بندی" : "مدیریت دسته‌بندی‌ها"}
        description="افزودن، ویرایش یا حذف دسته‌بندی"
        size="lg"
        hideDefaultFooter
      >
        <div className="space-y-5">
          {/* فرم */}
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

            {/* تصویر دسته‌بندی */}
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
                  <Button
                    type="button"
                    variant="outline"
                    className="h-full px-4"
                  >
                    آپلود
                  </Button>
                </div>
              </div>

              {categoryForm.image && (
                <div className="relative w-20 h-20 rounded-lg overflow-hidden border">
                  <img
                    src={categoryForm.image}
                    alt="category preview"
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

          {/* لیست دسته‌بندی‌ها */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="flex items-center gap-3 p-2.5 rounded-lg border hover:bg-muted/40 transition-colors"
              >
                {/* تصویر کوچک */}
                <div className="size-10 rounded-md bg-muted overflow-hidden shrink-0">
                  {cat.image ? (
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Upload className="size-4 text-muted-foreground" />
                    </div>
                  )}
                </div>

                <div className="text-right flex-1 min-w-0">
                  <p className="font-medium truncate text-sm">{cat.name}</p>
                  <p className="text-xs text-muted-foreground font-mono truncate">
                    {cat.slug}
                  </p>
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
    </div>
  );
}
