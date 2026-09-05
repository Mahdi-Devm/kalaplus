import { Muted } from "@/core/components/custom/ui/typography/Typography";
import { Badge } from "@/core/components/shadcn/ui/badge/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/core/components/shadcn/ui/card/card";
import { Input } from "@/core/components/shadcn/ui/input/input";
import { Separator } from "@/core/components/shadcn/ui/separator/separator";
import { ProductType } from "@/core/features/panel/assets/@types/product/ProductTYpe";

function PriceProductInfo({
  form,
  handleChange,
}: {
  form: ProductType;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}) {
  const finalPrice =
    form.price && form.discountPercent
      ? (
          Number(form.price) -
          (Number(form.price) * Number(form.discountPercent)) / 100
        ).toLocaleString()
      : form.price
        ? Number(form.price).toLocaleString()
        : "—";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-right">قیمت و موجودی</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          id="price"
          name="price"
          type="number"
          label="قیمت (تومان) *"
          value={form.price}
          onChange={handleChange}
          placeholder="0"
          min={0}
          className="text-left"
          dir="ltr"
        />

        <Input
          id="discountPercent"
          name="discountPercent"
          type="number"
          label="درصد تخفیف"
          value={form.discountPercent}
          onChange={handleChange}
          placeholder="0"
          min={0}
          max={100}
          className="text-left"
          dir="ltr"
        />

        <Input
          id="stock"
          name="stock"
          type="number"
          label="موجودی انبار *"
          value={form.stock}
          onChange={handleChange}
          placeholder="0"
          min={0}
          className="text-left"
          dir="ltr"
        />

        <Separator />

        <div className="flex items-center justify-between">
          <Muted>قیمت نهایی:</Muted>
          <div className="flex items-center gap-2">
            {form.discountPercent && Number(form.discountPercent) > 0 && (
              <Badge variant="destructive" className="text-xs">
                {form.discountPercent}٪ تخفیف
              </Badge>
            )}
            <span className="font-bold text-lg">{finalPrice}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default PriceProductInfo;
