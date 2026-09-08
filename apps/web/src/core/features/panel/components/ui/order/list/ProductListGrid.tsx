import { ProductType } from "@/core/features/panel/assets/@types/product/ProductType";
import ProductListCard from "./ProductListCard";
interface ProductGridProps {
  products: ProductType[];
  onEdit: (product: ProductType) => void;
  onDelete: (product: ProductType) => void;
}

export default function ProductGrid({
  products,
  onEdit,
  onDelete,
}: ProductGridProps) {
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
