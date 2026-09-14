import { ProductType } from "@/core/assets/types/product/ProductType";
import { Dispatch, SetStateAction } from "react";
import CategoryAction from "../../category/CategoryAction";
import BtnSubmitProduct from "./BtnSubmitProduct";
import PriceProductInfo from "./PriceProductInfo";
import { ProductAttributesForm } from "./ProductAttributesForm";

function SideBarCrateProduct({
  form,
  setForm,
  handleChange,
}: {
  form: ProductType;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  setForm: Dispatch<SetStateAction<ProductType>>;
}) {
  return (
    <div className="space-y-6">
      <PriceProductInfo form={form} handleChange={handleChange} />
      <ProductAttributesForm form={form} setForm={setForm} />
      <CategoryAction setForm={setForm} form={form} />
      <BtnSubmitProduct form={form} setForm={setForm} />
    </div>
  );
}

export default SideBarCrateProduct;
