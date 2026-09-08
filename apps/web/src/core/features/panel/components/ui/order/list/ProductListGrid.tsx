import { ProductType } from "@/core/features/panel/assets/@types/product/ProductType";
import EmptyState from "./EmptyState";
import ProductListCard from "./ProductListCard";

export default function ProductGrid({
  products,
  onEdit,
  onDelete,
}: {
  products: ProductType[];
  onEdit: (product: ProductType) => void;
  onDelete: (product: ProductType) => void;
}) {
  if (!products.length) {
    return (
      <div className="md:hidden">
        <EmptyState
          title="محصولی یافت نشد"
          description="هنوز محصولی ثبت نشده است."
        />
      </div>
    );
  }
  return (
    <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
      {products.map((product) => (
        <ProductListCard
          key={product.slug}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
