"use client";

import { GetProductsForAdminQuery } from "@/core/features/panel/assets/@types/product/GetProductsForAdminQuery";
import { ProductType } from "@/core/features/panel/assets/@types/product/ProductType";
import { GET_PRODUCTS_FOR_ADMIN } from "@/core/features/panel/gql-shcema/ProductSchema.gql";
import { useQuery } from "@apollo/client/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import PaginationListFooter from "../../../ui/order/list/PaginationListFooter";
import ProdctListHeader from "../../../ui/order/list/ProdctListHeader";
import ProductGrid from "../../../ui/order/list/ProductListGrid";
import ProductListTable from "../../../ui/order/list/ProductListTabel";
import DeletePListInfoModal from "../../../ui/order/list/modal/DeletePListInfoModal";
import EditPListModal from "../../../ui/order/list/modal/EditPListModal";
import OrderListSkeleton from "../../../ui/skeleton/OrderListSkeleton";

export default function OrderListComponents({
  page,
  limit,
  search,
}: {
  page: string;
  limit: string;
  search: string;
}) {
  const { loading, data } = useQuery<GetProductsForAdminQuery>(
    GET_PRODUCTS_FOR_ADMIN,
    {
      variables: {
        page,
        limit,
        search,
      },
    },
  );
  const [products, setProducts] = useState<ProductType[]>([]);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null,
  );
  useEffect(() => {
    if (data?.products?.data) {
      setProducts(data.products.data);
    }
  }, [data]);
  if (loading) return <OrderListSkeleton />;

  function handleEdit(product: ProductType) {
    setSelectedProduct(product);
    setEditModalOpen(true);
  }

  function handleDelete(product: ProductType) {
    setSelectedProduct(product);
    setDeleteModalOpen(true);
  }

  function confirmDelete() {
    if (!selectedProduct) return;
    setProducts((prev) => prev.filter((p) => p.slug !== selectedProduct.slug));
    toast.success(`✅ "${selectedProduct.title}" با موفقیت حذف شد`);
    setDeleteModalOpen(false);
    setSelectedProduct(null);
  }

  function confirmEdit(updatedProduct: ProductType) {
    setProducts((prev) =>
      prev.map((p) => (p.slug === updatedProduct.slug ? updatedProduct : p)),
    );
    toast.success(`✅ "${updatedProduct.title}" با موفقیت ویرایش شد`);
    setEditModalOpen(false);
    setSelectedProduct(null);
  }

  return (
    <div className="space-y-6">
      <ProdctListHeader />

      <ProductListTable
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <ProductGrid
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <PaginationListFooter total={products.length} />

      <EditPListModal
        open={editModalOpen}
        onOpenChange={setEditModalOpen}
        selectedProduct={selectedProduct}
        onConfirm={confirmEdit}
      />

      <DeletePListInfoModal
        open={deleteModalOpen}
        onOpenChange={setDeleteModalOpen}
        selectedProduct={selectedProduct}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
