import { Button } from "@/core/components/shadcn/ui/button/button";
import { ProductType } from "@/core/features/panel/assets/@types/product/ProductType";
import { CREATE_PRODUCT } from "@/core/features/panel/gql-shcema/createProductSchema";
import { getErrorMessage } from "@/core/utils/getErrorMessage";
import { useMutation } from "@apollo/client/react";
import { toast } from "sonner";

function BtnSubmitProduct({ form }: { form: ProductType }) {
  const [submitProduct, { loading }] = useMutation(CREATE_PRODUCT);

  async function handelSubmit() {
    if (!form.slug || form.slug.trim().length < 3) {
      return toast.error("اسلاگ محصول باید حداقل ۳ کاراکتر باشد");
    }
    if (!form.categoryId) {
      return toast.error("لطفاً دسته‌بندی محصول را انتخاب کنید");
    }
    if (!form.price || Number(form.price) <= 0) {
      return toast.error("قیمت محصول باید بیشتر از صفر باشد");
    }
    if (
      (form.discountPercent && Number(form.discountPercent) < 0) ||
      Number(form.discountPercent) > 100
    ) {
      return toast.error("درصد تخفیف باید بین ۰ تا ۱۰۰ باشد");
    }
    try {
      await submitProduct({
        variables: {
          input: {
            title: form.title,
            slug: form.slug,
            categoryId: form.categoryId,
            description: form.description,
            price: Number(form.price),
            discountPercent: Number(form.discountPercent) || 0,
            stock: Number(form.stock),
            mainImage: form.mainImage,
            images: form.images,
          },
        },
      });

      toast.success("محصول با موفقیت ساخته شد.");
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  }
  return (
    <div className="flex flex-col gap-3">
      <Button
        type="submit"
        size="lg"
        className="w-full"
        onClick={handelSubmit}
        disabled={loading}
      >
        {loading ? "در حال ایجاد..." : "ایجاد محصول"}
      </Button>
    </div>
  );
}

export default BtnSubmitProduct;
