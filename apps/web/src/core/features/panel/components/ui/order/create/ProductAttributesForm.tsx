"use client";

import { attribute } from "@/core/assets/mock/attribute";
import { ProductType } from "@/core/assets/types/product/ProductType";
import { TagInput } from "@/core/components/custom/ui/tagInput/TagInput";
import { Card, CardContent } from "@/core/components/shadcn/ui/card/card";

export type AttributeKey = "colors" | "sizes" | "materials";

export function ProductAttributesForm({
  form,
  setForm,
}: {
  form: ProductType;
  setForm: React.Dispatch<React.SetStateAction<ProductType>>;
}) {
  return (
    <Card className="space-y-4">
      <CardContent>
        {attribute.map(({ key, label, placeholder }) => (
          <TagInput
            key={key}
            label={label}
            placeholder={placeholder}
            values={form[key as AttributeKey] ?? []}
            onChange={(next) => setForm((prev) => ({ ...prev, [key]: next }))}
          />
        ))}
      </CardContent>
    </Card>
  );
}
