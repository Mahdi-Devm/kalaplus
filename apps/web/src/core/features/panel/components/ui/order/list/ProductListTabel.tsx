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
import { Edit, Eye, PackageOpen, Trash2 } from "lucide-react";

export default function ProductListTable({
  products,
  onEdit,
  onDelete,
}: {
  products: ProductType[];
  onEdit: (product: ProductType) => void;
  onDelete: (product: ProductType) => void;
}) {
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
          {products.length === 0 ? (
            <TableRow>
              <TableCell colSpan={9} className="h-48">
                <div className="flex flex-col items-center justify-center gap-3 text-center">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-muted">
                    <PackageOpen className="size-7 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">محصولی یافت نشد</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      هنوز محصولی ثبت نشده است.
                    </p>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            products.map((product, index) => {
              const hasDiscount = Number(product.discountPercent) > 0;
              const isInStock = Number(product.stock) > 0;

              return (
                <TableRow key={product.id || product.slug}>
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

                  <TableCell className="font-medium max-w-40 truncate">
                    {product.title}
                  </TableCell>

                  <TableCell className="text-sm text-gray-600 max-w-32 truncate">
                    {product.category?.title || (
                      <Span className="text-gray-400">-</Span>
                    )}
                  </TableCell>

                  <TableCell className="font-semibold">
                    {Number(product.price)} تومان
                  </TableCell>

                  <TableCell>
                    {hasDiscount ? (
                      <Badge variant="destructive">
                        {product.discountPercent}%
                      </Badge>
                    ) : (
                      <Span className="text-gray-400">-</Span>
                    )}
                  </TableCell>

                  <TableCell>
                    <Badge variant={isInStock ? "default" : "destructive"}>
                      {isInStock ? product.stock : "ناموجود"}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-sm text-gray-500">
                    {formatDate(product.createdAt)}
                  </TableCell>

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
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
}
