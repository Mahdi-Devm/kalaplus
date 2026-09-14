import { ProductType } from "@/core/assets/types/product/ProductType";
import Modal from "@/core/components/custom/ui/modal/Modal";
import { P } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
interface DeleteConfirmationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedProduct: ProductType | null;
  onConfirm: () => void;
  loading?: boolean;
}

export default function DeletePListInfoModal({
  open,
  onOpenChange,
  selectedProduct,
  onConfirm,
  loading,
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

        <div className="flex gap-2 w-full justify-end mt-4">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="w-1/2"
          >
            انصراف
          </Button>
          <Button
            variant="destructive"
            onClick={onConfirm}
            className="text-white w-1/2"
          >
            {loading ? "در حال حذف..." : "حذف محصول"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
