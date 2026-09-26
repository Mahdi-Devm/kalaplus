import { AttributeKey } from "@/core/features/panel/components/ui/order/create/ProductAttributesForm";

export const attribute: {
  key: AttributeKey;
  label: string;
  placeholder: string;
}[] = [
  { key: "colors", label: "رنگ‌ها", placeholder: "مثلاً: مشکی، سفید، قرمز" },
  { key: "sizes", label: "سایزها", placeholder: "مثلاً: S، M، L، XL" },
  {
    key: "materials",
    label: "جنس‌ها",
    placeholder: "مثلاً: نخ، پنبه، پلی‌استر",
  },
];
