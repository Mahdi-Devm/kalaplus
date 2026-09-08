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
import { ProductType } from "@/core/features/panel/assets/@types/product/ProductType";
import { useImageUpload } from "@/core/hooks/useImageUpload";
import { getImageUrl } from "@/core/utils/getImageUrl";
import { Loader2, Plus, X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

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
  const {
    uploading,
    uploadingMultiple,
    uploadSingleImage,
    uploadMultipleImages,
    deleteImage,
  } = useImageUpload();

  async function handleMainImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const tempUrl = URL.createObjectURL(file);
    setForm((prev) => ({ ...prev, mainImage: tempUrl }));

    const realUrl = await uploadSingleImage(file);

    if (realUrl) {
      setForm((prev) => ({ ...prev, mainImage: realUrl }));
      toast.success("تصویر اصلی با موفقیت آپلود شد");
    } else {
      setForm((prev) => ({ ...prev, mainImage: "" }));
    }
  }

  async function handleGalleryUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const MAX_IMAGES = 5;
    const remainingSlots = MAX_IMAGES - form.images.length;

    if (files.length > remainingSlots) {
      toast.error(`حداکثر ${MAX_IMAGES} تصویر می‌توانید آپلود کنید`);
      return;
    }

    const fileArray = Array.from(files);
    const tempUrls = fileArray.map((file) => URL.createObjectURL(file));

    setForm((prev) => ({
      ...prev,
      images: [...prev.images, ...tempUrls],
    }));

    const realUrls = await uploadMultipleImages(fileArray);

    if (realUrls) {
      setForm((prev) => {
        const newImages = [...prev.images];
        const startIndex = newImages.length - tempUrls.length;

        realUrls.forEach((url, index) => {
          newImages[startIndex + index] = url;
        });

        return { ...prev, images: newImages };
      });

      toast.success(`${realUrls.length} تصویر با موفقیت آپلود شد`);
    } else {
      setForm((prev) => ({
        ...prev,
        images: prev.images.slice(0, -tempUrls.length),
      }));
    }
  }

  async function removeGalleryImage(index: number) {
    const imageUrl = form.images[index];

    const deleted = await deleteImage(imageUrl);

    if (deleted) {
      setForm((prev) => ({
        ...prev,
        images: prev.images.filter((_, i) => i !== index),
      }));
      toast.success("تصویر حذف شد");
    }
  }

  async function removeMainImage() {
    if (!form.mainImage) return;

    const deleted = await deleteImage(form.mainImage);

    if (deleted) {
      setForm((prev) => ({ ...prev, mainImage: "" }));
      toast.success("تصویر اصلی حذف شد");
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-right">تصاویر محصول</CardTitle>
        <CardDescription className="text-right">
          تصویر اصلی و گالری تصاویر (حداکثر ۵ عدد)
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex gap-2">
            <Input
              name="mainImage"
              value={form.mainImage}
              onChange={handleChange}
              label="تصویر اصلی "
              placeholder="https://..."
              className="text-left text-sm flex-1"
              dir="ltr"
            />

            <div className="relative">
              <Input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleMainImageUpload}
                disabled={uploading}
              />
              <Button
                type="button"
                variant="outline"
                className="h-full px-4"
                disabled={uploading}
              >
                {uploading ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  "آپلود"
                )}
              </Button>
            </div>
          </div>

          {form.mainImage && (
            <div className="relative w-28 h-28 rounded-xl overflow-hidden border group">
              <ImgNormalCustom
                src={getImageUrl(form.mainImage)}
                alt="main preview"
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={removeMainImage}
                className="absolute top-1.5 left-1.5 bg-black/60 text-white rounded-full p-1 hover:bg-black/80 transition-colors opacity-0 group-hover:opacity-100"
              >
                <X className="size-3.5" />
              </button>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-right block text-sm font-medium">
              گالری تصاویر
            </label>
            <Span className="text-xs text-muted-foreground">
              {form.images.length} / 5
            </Span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {form.images.map((img, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden border group"
              >
                <ImgNormalCustom
                  src={getImageUrl(img)}
                  alt={`gallery-${index}`}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeGalleryImage(index)}
                  className="absolute top-1.5 left-1.5 bg-black/60 text-white rounded-full p-1 hover:bg-black/80 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <X className="size-3.5" />
                </button>
              </div>
            ))}

            {form.images.length < 5 && (
              <div className="relative aspect-square border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-muted/50 cursor-pointer transition-colors">
                <Input
                  type="file"
                  accept="image/*"
                  multiple
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleGalleryUpload}
                  disabled={uploadingMultiple}
                />
                {uploadingMultiple ? (
                  <Loader2 className="size-6 animate-spin text-muted-foreground" />
                ) : (
                  <>
                    <Plus className="size-6 text-muted-foreground" />
                    <Span className="text-xs text-muted-foreground">
                      افزودن
                    </Span>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default UploadProductImg;
