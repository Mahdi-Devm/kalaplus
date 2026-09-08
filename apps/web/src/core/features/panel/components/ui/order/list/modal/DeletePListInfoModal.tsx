import Modal from "@/core/components/custom/ui/modal/Modal";
import {
  H4,
  Muted,
  P,
} from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { ProductType } from "@/core/features/panel/assets/@types/product/ProductType";
interface DeleteConfirmationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedProduct: ProductType | null;
  onConfirm: () => void;
}

export default function DeletePListInfoModal({
  open,
  onOpenChange,
  selectedProduct,
  onConfirm,
}: DeleteConfirmationModalProps) {
  return (
    <Modal
      title="حذف محصول"
      description={`آیا از حذف "${selectedProduct?.title}" مطمئن هستید؟`}
      open={open}
      onOpenChange={onOpenChange}
      size="sm"
      hideDefaultFooter={true}
    >
      <div className="py-4">
        <P className="text-gray-600">
          این عملیات غیرقابل بازگشت است. پس از حذف، محصول قابل بازیابی نخواهد
          بود.
        </P>
        {selectedProduct && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg border">
            <H4>{selectedProduct.title}</H4>
            <Muted>{selectedProduct.slug}</Muted>
          </div>
        )}
        <div className="flex gap-2 w-full justify-end mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            انصراف
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            حذف محصول
          </Button>
        </div>
      </div>
    </Modal>
  );
}
