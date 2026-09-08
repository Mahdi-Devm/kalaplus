import {
  H4,
  Large,
  Muted,
} from "@/core/components/custom/ui/typography/Typography";
import { Badge } from "@/core/components/shadcn/ui/badge/badge";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { ProductType } from "@/core/features/panel/assets/@types/product/ProductType";
import { Edit, Eye, Trash2 } from "lucide-react";
import Image from "next/image";
interface ProductCardProps {
  product: ProductType;
  onEdit: (product: ProductType) => void;
  onDelete: (product: ProductType) => void;
}
export default function ProductListCard({
  product,
  onEdit,
  onDelete,
}: ProductCardProps) {
  const hasDiscount = Number(product.discountPercent) > 0;
  const isInStock = Number(product.stock) > 0;

  return (
    <div className="bg-white rounded-lg border p-4 space-y-3 hover:shadow-md transition-shadow">
      {/* هدر کارت - تصویر و عنوان */}
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
          <H4 className="text-sm truncate">{product.title}</H4>
          <Muted className="text-xs truncate">{product.slug}</Muted>
        </div>
      </div>

      {/* قیمت و موجودی */}
      <div className="flex justify-between items-center">
        <div>
          <Large className="text-lg text-primary">{product.price} تومان</Large>
          {hasDiscount && (
            <Badge variant="destructive" className="text-xs">
              {product.discountPercent}% تخفیف
            </Badge>
          )}
        </div>
        <Badge variant={isInStock ? "default" : "destructive"}>
          {isInStock ? `${product.stock} عدد` : "ناموجود"}
        </Badge>
      </div>

      {/* دکمه‌های عملیات */}
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
