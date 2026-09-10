import Modal from "@/core/components/custom/ui/modal/Modal";
import { ProductType } from "@/core/features/panel/assets/@types/product/ProductType";
import EditProductListForm from "../EditProductListForm";
interface EditModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedProduct: ProductType | null;
  onConfirm: (updatedProduct: ProductType) => void;
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
