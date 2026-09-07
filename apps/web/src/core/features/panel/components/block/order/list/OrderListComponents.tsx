"use client";

import Modal from "@/core/components/custom/ui/modal/Modal";
import { Paginations } from "@/core/components/custom/ui/pagination/Pagination";
import SearchInput from "@/core/components/custom/ui/search-input/SearchInput";
import { Badge } from "@/core/components/shadcn/ui/badge/badge";
import { Button } from "@/core/components/shadcn/ui/button/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/core/components/shadcn/ui/table/table";
import { ProductType } from "@/core/features/panel/assets/@types/product/ProductType";
import { Edit, Eye, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import EditProductForm from "../../../ui/order/list/EditProductForm";

const initialProducts: ProductType[] = [
  {
    title: "گوشی موبایل سامسونگ گلکسی S24",
    slug: "samsung-galaxy-s24",
    categoryId: "1",
    description:
      "گوشی موبایل سامسونگ گلکسی S24 با دوربین 200 مگاپیکسلی و صفحه نمایش 6.8 اینچی",
    shortDescription: "پرچمدار جدید سامسونگ",
    price: "45,000,000",
    discountPercent: "10",
    stock: "25",
    mainImage:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300",
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300",
    ],
  },
  {
    title: "لپ تاپ اپل مک بوک پرو M3",
    slug: "apple-macbook-pro-m3",
    categoryId: "2",
    description: "لپ تاپ اپل مک بوک پرو با تراشه M3 و 16GB رم",
    shortDescription: "قدرتمندترین مک بوک",
    price: "120,000,000",
    discountPercent: "5",
    stock: "10",
    mainImage:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=300",
    ],
  },
  {
    title: "هدفون بیسیم سونی WH-1000XM5",
    slug: "sony-wh-1000xm5",
    categoryId: "3",
    description: "هدفون بیسیم سونی با حذف نویز پیشرفته",
    shortDescription: "بهترین هدفون حذف نویز",
    price: "8,500,000",
    discountPercent: "15",
    stock: "50",
    mainImage:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
    ],
  },
  {
    title: "ساعت هوشمند اپل واچ سری 9",
    slug: "apple-watch-series-9",
    categoryId: "4",
    description: "ساعت هوشمند اپل واچ سری 9 با صفحه نمایش Always-On",
    shortDescription: "جدیدترین اپل واچ",
    price: "35,000,000",
    discountPercent: "0",
    stock: "15",
    mainImage:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300",
    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=300",
    ],
  },
  {
    title: "تبلت سامسونگ گلکسی تب S9",
    slug: "samsung-galaxy-tab-s9",
    categoryId: "1",
    description: "تبلت سامسونگ گلکسی تب S9 با قلم S-Pen",
    shortDescription: "تبلت حرفه‌ای",
    price: "28,000,000",
    discountPercent: "8",
    stock: "30",
    mainImage:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=300",
    images: [
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=300",
      "https://images.unsplash.com/photo-1589739900243-4b52cd9dd8df?w=300",
    ],
  },
  {
    title: "دوربین عکاسی سونی A7 IV",
    slug: "sony-a7-iv",
    categoryId: "5",
    description: "دوربین عکاسی سونی A7 IV با سنسور 33 مگاپیکسلی",
    shortDescription: "دوربین حرفه‌ای",
    price: "95,000,000",
    discountPercent: "3",
    stock: "8",
    mainImage:
      "https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=300",
    images: [
      "https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=300",
      "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=300",
    ],
  },
];
function ProductCard({
  product,
  onEdit,
  onDelete,
}: {
  product: ProductType;
  onEdit: (product: ProductType) => void;
  onDelete: (product: ProductType) => void;
}) {
  return (
    <div className="bg-white rounded-lg border p-4 space-y-3 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
          <Image
            src={product.mainImage || "/placeholder.png"}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-sm truncate">{product.title}</h3>
          <p className="text-xs text-gray-500 truncate">{product.slug}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg font-bold text-primary">
            {product.price} تومان
          </p>
          {Number(product.discountPercent) > 0 && (
            <Badge variant="destructive" className="text-xs">
              {product.discountPercent}% تخفیف
            </Badge>
          )}
        </div>
        <Badge variant={Number(product.stock) > 0 ? "default" : "destructive"}>
          {Number(product.stock) > 0 ? `${product.stock} عدد` : "ناموجود"}
        </Badge>
      </div>

      <div className="flex gap-2">
        <Button size="sm" variant="outline" className="flex-1">
          <Eye className="size-3 ml-1" /> مشاهده
        </Button>
        <Button size="sm" variant="outline" onClick={() => onEdit(product)}>
          <Edit className="size-3" />
        </Button>
        <Button
          size="sm"
          variant="destructive"
          onClick={() => onDelete(product)}
        >
          <Trash2 className="size-3" />
        </Button>
      </div>
    </div>
  );
}

// کامپوننت اصلی
export default function OrderListComponents() {
  const [products, setProducts] = useState<ProductType[]>(initialProducts);

  // State برای مدال‌ها
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null,
  );

  // تابع ویرایش
  const handleEdit = (product: ProductType) => {
    setSelectedProduct(product);
    setEditModalOpen(true);
  };

  // تابع حذف
  const handleDelete = (product: ProductType) => {
    setSelectedProduct(product);
    setDeleteModalOpen(true);
  };

  // تایید حذف
  const confirmDelete = () => {
    if (!selectedProduct) return;
    setProducts((prev) => prev.filter((p) => p.slug !== selectedProduct.slug));
    toast.success(`✅ "${selectedProduct.title}" با موفقیت حذف شد`);
    setDeleteModalOpen(false);
    setSelectedProduct(null);
  };

  // تایید ویرایش
  const confirmEdit = (updatedProduct: ProductType) => {
    setProducts((prev) =>
      prev.map((p) => (p.slug === updatedProduct.slug ? updatedProduct : p)),
    );
    toast.success(`✅ "${updatedProduct.title}" با موفقیت ویرایش شد`);
    setEditModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="space-y-6">
      {/* هدر و ابزارها */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">لیست محصولات</h1>
          <p className="text-gray-500 text-sm">همه محصولات</p>
        </div>

        <div className="flex items-center gap-3">
          {/* 🔍 سرچ - فقط UI */}
          <SearchInput title="جستجوی محصول..." />

          <Button className="whitespace-nowrap">
            <Plus className="size-4 ml-1" />
            محصول جدید
          </Button>
        </div>
      </div>

      {/* جدول محصولات (نمایش در دسکتاپ) */}
      <div className="hidden md:block bg-white rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">#</TableHead>
              <TableHead>تصویر</TableHead>
              <TableHead>عنوان</TableHead>
              <TableHead>اسلاگ</TableHead>
              <TableHead>قیمت</TableHead>
              <TableHead>تخفیف</TableHead>
              <TableHead>موجودی</TableHead>
              <TableHead className="text-left">عملیات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={product.slug}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <div className="relative w-12 h-12 rounded overflow-hidden bg-gray-100">
                    <Image
                      src={product.mainImage || "/placeholder.png"}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium max-w-[150px] truncate">
                  {product.title}
                </TableCell>
                <TableCell className="text-sm text-gray-500 max-w-[100px] truncate">
                  {product.slug}
                </TableCell>
                <TableCell className="font-semibold">
                  {product.price} تومان
                </TableCell>
                <TableCell>
                  {Number(product.discountPercent) > 0 ? (
                    <Badge variant="destructive">
                      {product.discountPercent}%
                    </Badge>
                  ) : (
                    <span className="text-gray-400">-</span>
                  )}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      Number(product.stock) > 0 ? "default" : "destructive"
                    }
                  >
                    {Number(product.stock) > 0 ? product.stock : "ناموجود"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Button size="sm" variant="ghost">
                      <Eye className="size-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleEdit(product)}
                    >
                      <Edit className="size-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(product)}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* کارت‌های محصولات (نمایش در موبایل) */}
      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* 📄 پیجینیشن - فقط UI */}
      <div className="flex items-center justify-between  gap-4">
        <div className="text-sm text-gray-500 ">
          نمایش ۱ تا {products.length} از {products.length} محصول
        </div>
        <div>
          <Paginations />
        </div>
      </div>

      {/* ============ مدال‌ها ============ */}

      {/* مدال ویرایش */}
      <Modal
        title="ویرایش محصول"
        description="اطلاعات محصول را ویرایش کنید"
        open={editModalOpen}
        onOpenChange={setEditModalOpen}
        hideDefaultFooter={true}
        size="lg"
        className="max-h-[90vh] overflow-y-auto"
      >
        {selectedProduct && (
          <EditProductForm
            product={selectedProduct}
            onSubmit={confirmEdit}
            onCancel={() => setEditModalOpen(false)}
          />
        )}
      </Modal>

      {/* مدال حذف */}
      <Modal
        title="حذف محصول"
        description={`آیا از حذف "${selectedProduct?.title}" مطمئن هستید؟`}
        open={deleteModalOpen}
        onOpenChange={setDeleteModalOpen}
        size="sm"
        hideDefaultFooter={true}
      >
        <div className="py-4">
          <p className="text-gray-600">
            این عملیات غیرقابل بازگشت است. پس از حذف، محصول قابل بازیابی نخواهد
            بود.
          </p>
          {selectedProduct && (
            <div className="mt-4 p-3 bg-gray-50 rounded-lg border">
              <p className="font-medium">{selectedProduct.title}</p>
              <p className="text-sm text-gray-500">{selectedProduct.slug}</p>
            </div>
          )}
          <div className="flex gap-2 w-full justify-end mt-4">
            <Button variant="outline" onClick={() => setDeleteModalOpen(false)}>
              انصراف
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              حذف محصول
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
