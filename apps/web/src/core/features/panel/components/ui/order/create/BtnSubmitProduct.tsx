import { Button } from "@/core/components/shadcn/ui/button/button";
import { ProductType } from "@/core/features/panel/assets/@types/product/ProductType";
import { CREATE_PRODUCT } from "@/core/features/panel/gql-shcema/createProductSchema.gql";
import {
  ProductZodFormData,
  productZodSchema,
} from "@/core/features/panel/zod/categorySchema.zod";

import { formatZodErrors } from "@/core/utils/formatZodErrors";
import { getErrorMessage } from "@/core/utils/getErrorMessage";
import { useMutation } from "@apollo/client/react";
import { toast } from "sonner";

function BtnSubmitProduct({
  form,
  setForm,
}: {
  form: ProductType;
  setForm: (v: ProductType) => void;
}) {
  const [submitProduct, { loading }] = useMutation(CREATE_PRODUCT);

  async function handelSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      const formData: ProductZodFormData = {
        title: form.title,
        slug: form.slug,
        categoryId: form.categoryId,
        description: form.description,
        shortDescription: form.shortDescription,
        price: Number(form.price) || 0,
        discountPercent: Number(form.discountPercent) || 0,
        stock: Number(form.stock) || 0,
        mainImage: form.mainImage,
        images: form.images || [],
      };
      const result = productZodSchema.safeParse(formData);
      if (!result.success) {
        return toast.error(formatZodErrors(result.error));
      }
      const zodV = result.data;
      await submitProduct({
        variables: {
          input: {
            title: zodV.title,
            slug: zodV.slug,
            categoryId: zodV.categoryId,
            description: zodV.description,
            shortDescription: zodV.shortDescription,
            price: Number(zodV.price),
            discountPercent: Number(zodV.discountPercent) || 0,
            stock: Number(zodV.stock),
            mainImage: zodV.mainImage,
            images: zodV.images,
          },
        },
      });

      setForm({
        title: "",
        slug: "",
        categoryId: "",
        description: "",
        shortDescription: "",
        price: "0",
        discountPercent: "0",
        stock: "0",
        mainImage: "",
        images: [],
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
        onClick={(e) => handelSubmit(e)}
        disabled={loading}
      >
        {loading ? "در حال ایجاد..." : "ایجاد محصول"}
      </Button>
    </div>
  );
}

export default BtnSubmitProduct;
