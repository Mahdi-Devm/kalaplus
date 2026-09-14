import { Input } from "@/core/components/shadcn/ui/input/input";
import { Textarea } from "@/core/components/shadcn/ui/Textarea/textarea";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { H3, Muted } from "@/core/components/custom/ui/typography/Typography";

const ContactForm = () => {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6 lg:p-8">
      <form className="space-y-6">
        <div className="space-y-2">
          <H3 className="text-right text-xl sm:text-2xl">
            پیام خود را ارسال کنید
          </H3>

          <Muted className="text-right leading-6">
            فرم را کامل کنید؛ پیام شما مستقیماً در سایت ثبت می‌شود.
          </Muted>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Input
            label="نام و نام خانوادگی"
            type="text"
            placeholder="نام خود را وارد کنید"
          />

          <Input label="شماره تماس" type="tel" placeholder="0912581245" />

          <Input
            label="ایمیل"
            type="email"
            placeholder="test@gmail.com"
            required
          />

          <Input
            label="موضوع"
            type="text"
            placeholder="موضوع پیام را بنویسید"
          />

          <div className="sm:col-span-2">
            <Textarea
              label="پیام شما"
              placeholder="پیام خود را وارد کنید..."
              rows={10}
            />
          </div>
        </div>

        <div className="flex justify-start">
          <Button type="submit">ارسال پیام</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
