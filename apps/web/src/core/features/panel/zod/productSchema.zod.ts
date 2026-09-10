import { ZodString } from "@/core/lib/zod/zod";
import { z } from "zod/mini";

export const categoryZodSchema = z.object({
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

  image: ZodString({
    min: 1,
    required: true,
    message: "تصویر اصلی را انتخاب کنید",
  }),
});
export type CategoryZodFormData = z.infer<typeof categoryZodSchema>;
