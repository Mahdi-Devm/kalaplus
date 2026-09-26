import {
  ProductFormType,
  ProductType,
} from "@/core/assets/types/product/ProductType";
import Modal from "@/core/components/custom/ui/modal/Modal";
import EditProductListForm from "../EditProductListForm";
interface EditModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedProduct: ProductType | null;
  onConfirm: (updatedProduct: ProductFormType) => void;
}

export default function EditPListModal({
  open,
  onOpenChange,
  selectedProduct,
  onConfirm,
}: EditModalProps) {
  return (
    <Modal
      title="ویرایش محصول"
      description="اطلاعات محصول را ویرایش کنید"
      open={open}
      onOpenChange={onOpenChange}
      hideDefaultFooter={true}
      size="lg"
      className="max-h-[90vh] overflow-y-auto"
    >
      {selectedProduct && (
        <EditProductListForm
          product={selectedProduct}
          onSubmit={onConfirm}
          onCancel={() => onOpenChange(false)}
        />
      )}
    </Modal>
  );
}
