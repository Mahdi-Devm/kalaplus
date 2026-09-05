import { Button } from "@/core/components/shadcn/ui/button/button";
import { ProductType } from "@/core/features/panel/assets/@types/product/ProductType";
import { CREATE_PRODUCT } from "@/core/features/panel/gql-shcema/createProductSchema";
import { useMutation } from "@apollo/client/react";

function BtnSubmitProduct({ form }: { form: ProductType }) {
  const [submitProduct, { loading }] = useMutation(CREATE_PRODUCT);

  async function handelSubmit() {
    try {
      const { data } = await submitProduct({
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

      console.log("محصول ساخته شد:", data);
    } catch (error) {
      console.error("خطا در ساخت محصول:", error);
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
