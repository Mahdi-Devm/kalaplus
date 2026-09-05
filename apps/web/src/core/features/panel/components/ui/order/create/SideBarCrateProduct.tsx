import { ProductType } from "@/core/features/panel/assets/@types/product/ProductType";
import { Dispatch, SetStateAction } from "react";
import CategoryAction from "../../category/CategoryAction";
import BtnSubmitProduct from "./BtnSubmitProduct";
import PriceProductInfo from "./PriceProductInfo";

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

      <CategoryAction setForm={setForm} form={form} />

      <BtnSubmitProduct form={form} />
    </div>
  );
}

export default SideBarCrateProduct;
