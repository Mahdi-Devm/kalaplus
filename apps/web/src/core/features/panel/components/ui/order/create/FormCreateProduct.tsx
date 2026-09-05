"use client";

import { ProductType } from "@/core/features/panel/assets/@types/product/ProductType";
import { useState } from "react";
import BasicProductFormInfo from "./BasicProductFormInfo";
import SideBarCrateProduct from "./SideBarCrateProduct";
import UploadProductImg from "./UploadProductImg";
function FormCreateProduct() {
  const [form, setForm] = useState<ProductType>({
    title: "",
    slug: "",
    categoryId: "",
    description: "",
    price: "",
    discountPercent: "",
    stock: "",
    mainImage: "",
    images: [] as string[],
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "title") {
      const slug = value
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\u0600-\u06FF-]/g, "");
      setForm((prev) => ({ ...prev, slug }));
    }
  }

  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <BasicProductFormInfo form={form} handleChange={handleChange} />

          <UploadProductImg
            form={form}
            handleChange={handleChange}
            setForm={setForm}
          />
        </div>

        <SideBarCrateProduct
          form={form}
          handleChange={handleChange}
          setForm={setForm}
        />
      </div>
    </form>
  );
}

export default FormCreateProduct;
