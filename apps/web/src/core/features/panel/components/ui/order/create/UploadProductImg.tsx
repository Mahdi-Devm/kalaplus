import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";
import { Span } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/core/components/shadcn/ui/card/card";
import { Input } from "@/core/components/shadcn/ui/input/input";
import { ProductType } from "@/core/features/panel/assets/@types/product/ProductTYpe";
import { Plus, X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
function UploadProductImg({
  form,
  handleChange,
  setForm,
}: {
  form: ProductType;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  setForm: Dispatch<SetStateAction<ProductType>>;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-right">تصاویر محصول</CardTitle>
        <CardDescription className="text-right">
          تصویر اصلی و گالری تصاویر
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex gap-2">
            <Input
              name="mainImage"
              value={form.mainImage}
              onChange={handleChange}
              label=" تصویر اصلی *"
              placeholder="https://..."
              className="text-left text-sm flex-1"
              dir="ltr"
            />

            <div className="relative">
              <Input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const url = URL.createObjectURL(file);
                    setForm((prev) => ({ ...prev, mainImage: url }));
                  }
                }}
              />
              <Button type="button" variant="outline" className="h-full px-4">
                آپلود
              </Button>
            </div>
          </div>

          {form.mainImage && (
            <div className="relative w-28 h-28 rounded-xl overflow-hidden border">
              <ImgNormalCustom
                src={form.mainImage}
                alt="main preview"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setForm((prev) => ({ ...prev, mainImage: "" }))}
                className="absolute top-1.5 left-1.5 bg-black/60 text-white rounded-full p-1"
              >
                <X className="size-3.5" />
              </button>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <label className="text-right block text-sm font-medium">
            گالری تصاویر
          </label>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {form.images.map((img, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden border"
              >
                <ImgNormalCustom
                  src={img}
                  alt={`gallery-${index}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      images: prev.images.filter((_, i) => i !== index),
                    }))
                  }
                  className="absolute top-1.5 left-1.5 bg-black/60 text-white rounded-full p-1"
                >
                  <X className="size-3.5" />
                </button>
              </div>
            ))}

            <div className="relative aspect-square border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-muted/50 cursor-pointer transition-colors">
              <Input
                type="file"
                accept="image/*"
                multiple
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={(e) => {
                  const files = e.target.files;
                  if (files) {
                    const urls = Array.from(files).map((file) =>
                      URL.createObjectURL(file),
                    );
                    setForm((prev) => ({
                      ...prev,
                      images: [...prev.images, ...urls],
                    }));
                  }
                }}
              />
              <Plus className="size-6 text-muted-foreground" />
              <Span className="text-xs text-muted-foreground">افزودن</Span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default UploadProductImg;
