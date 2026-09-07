import { ZodNumber, ZodString } from "@/core/lib/zod/zod";
import { z } from "zod/mini";

export const productZodSchema = z.object({
  title: ZodString({
    min: 3,
    max: 100,
    required: true,
    message: "عنوان باید حداقل ۳ کاراکتر باشد",
  }),
  slug: ZodString({
    min: 3,
    max: 50,
    required: true,
    message: "اسلاگ باید حداقل ۳ کاراکتر باشد",
  }).check(
    z.regex(
      /^[a-z0-9-]+$/,
      "اسلاگ فقط می‌تواند شامل حروف کوچک، اعداد و خط تیره باشد",
    ),
  ),
  categoryId: ZodString({
    min: 1,
    required: true,
    message: "دسته‌بندی را انتخاب کنید",
  }),
  description: ZodString({ min: 10, max: 2000, required: false }),
  shortDescription: ZodString({ min: 5, max: 200, required: false }),

  price: ZodNumber({
    min: 0,
    required: true,
  }),

  discountPercent: ZodNumber({
    min: 0,
    max: 100,
    required: false,
  }),

  stock: ZodNumber({
    min: 0,
    required: true,
  }),
  mainImage: ZodString({
    min: 1,
    required: true,
    message: "تصویر اصلی را انتخاب کنید",
  }),
  images: z.array(z.string()),
});
export type ProductZodFormData = z.infer<typeof productZodSchema>;
