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
import { Edit, Eye, Trash2 } from "lucide-react";
import Image from "next/image";
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
            <TableHead>اسلاگ</TableHead>
            <TableHead>قیمت</TableHead>
            <TableHead>تخفیف</TableHead>
            <TableHead>موجودی</TableHead>
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
                    <Image
                      src={product.mainImage || "/placeholder.png"}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium max-w-37 truncate">
                  {product.title}
                </TableCell>
                <TableCell className="text-sm text-gray-500 max-w-25 truncate">
                  {product.slug}
                </TableCell>
                <TableCell className="font-semibold">
                  {product.price} تومان
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
