import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";
import { Span } from "@/core/components/custom/ui/typography/Typography";
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
import { formatDate } from "@/core/utils/formatDate";
import { getImageUrl } from "@/core/utils/getImageUrl";
import { Edit, Eye, Trash2 } from "lucide-react";

interface ProductTableProps {
  products: ProductType[];
  onEdit: (product: ProductType) => void;
  onDelete: (product: ProductType) => void;
}

export default function ProductListTable({
  products,
  onEdit,
  onDelete,
}: ProductTableProps) {
  return (
    <div className="hidden md:block bg-white rounded-lg border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">#</TableHead>
            <TableHead>تصویر</TableHead>
            <TableHead>عنوان</TableHead>
            <TableHead>دسته‌بندی</TableHead>
            <TableHead>قیمت</TableHead>
            <TableHead>تخفیف</TableHead>
            <TableHead>موجودی</TableHead>
            <TableHead>تاریخ ساخت</TableHead>
            <TableHead className="text-left">عملیات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, index) => {
            const hasDiscount = Number(product.discountPercent) > 0;
            const isInStock = Number(product.stock) > 0;

            return (
              <TableRow key={product.slug}>
                <TableCell>{index + 1}</TableCell>

                <TableCell>
                  <div className="relative w-12 h-12 rounded overflow-hidden bg-gray-100">
                    <ImgNormalCustom
                      src={getImageUrl(product.mainImage)}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </TableCell>

                {/* عنوان */}
                <TableCell className="font-medium max-w-40 truncate">
                  {product.title}
                </TableCell>

                {/* دسته‌بندی */}
                <TableCell className="text-sm text-gray-600 max-w-32 truncate">
                  {product.category?.title || (
                    <Span className="text-gray-400">-</Span>
                  )}
                </TableCell>

                {/* قیمت */}
                <TableCell className="font-semibold">
                  {product.price} تومان
                </TableCell>

                {/* تخفیف */}
                <TableCell>
                  {hasDiscount ? (
                    <Badge variant="destructive">
                      {product.discountPercent}%
                    </Badge>
                  ) : (
                    <Span className="text-gray-400">-</Span>
                  )}
                </TableCell>

                {/* موجودی */}
                <TableCell>
                  <Badge variant={isInStock ? "default" : "destructive"}>
                    {isInStock ? product.stock : "ناموجود"}
                  </Badge>
                </TableCell>

                {/* تاریخ ساخت */}
                <TableCell className="text-sm text-gray-500">
                  {formatDate(product.createdAt)}
                </TableCell>

                {/* عملیات */}
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Button size="sm" variant="ghost">
                      <Eye className="size-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => onEdit(product)}
                    >
                      <Edit className="size-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-red-500 hover:text-red-700"
                      onClick={() => onDelete(product)}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
