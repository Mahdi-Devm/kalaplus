import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";
import {
  H4,
  Large,
  Muted,
  Span,
} from "@/core/components/custom/ui/typography/Typography";
import { Badge } from "@/core/components/shadcn/ui/badge/badge";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { ProductType } from "@/core/features/panel/assets/@types/product/ProductType";
import { formatDate } from "@/core/utils/formatDate";
import { getImageUrl } from "@/core/utils/getImageUrl";
import { Edit, Eye, Trash2 } from "lucide-react";

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
      {/* تصویر + عنوان */}
      <div className="flex items-start gap-3">
        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
          <ImgNormalCustom
            src={getImageUrl(product.mainImage)}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 min-w-0 space-y-1">
          <H4 className="text-sm truncate">{product.title}</H4>
          <Muted className="text-xs truncate">{product.slug}</Muted>

          {/* دسته‌بندی */}
          <Span className="text-xs text-muted-foreground">
            {product.category?.title || "بدون دسته‌بندی"}
          </Span>
        </div>
      </div>

      {/* قیمت + تخفیف + موجودی */}
      <div className="flex justify-between items-center gap-2">
        <div className="space-y-1">
          <Large className="text-base text-primary">
            {Number(product.price).toLocaleString("fa-IR")} تومان
          </Large>
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

      <div className="text-xs text-muted-foreground">
        تاریخ ساخت: {formatDate(product.createdAt)}
      </div>

      <div className="flex gap-2 pt-1">
        <Button size="sm" variant="outline" className="flex-1">
          <Eye className="size-3.5 ml-1" />
          مشاهده
        </Button>

        <Button size="sm" variant="outline" onClick={() => onEdit(product)}>
          <Edit className="size-3.5" />
        </Button>

        <Button
          size="sm"
          variant="destructive"
          onClick={() => onDelete(product)}
          className="text-white"
        >
          <Trash2 className="size-3.5" />
        </Button>
      </div>
    </div>
  );
}
