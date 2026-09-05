import { Button } from "@/core/components/shadcn/ui/button/button";

function BtnSubmitProduct() {
  return (
    <div className="flex flex-col gap-3">
      <Button type="submit" size="lg" className="w-full">
        ایجاد محصول
      </Button>
      <Button type="button" variant="outline" size="lg" className="w-full">
        انصراف
      </Button>
    </div>
  );
}

export default BtnSubmitProduct;
