import { H3, Muted } from "@/core/components/custom/ui/typography/Typography";
import ContactComponentQuestion from "./ContactComponentQuestion";
const ItemComponentQuestion = [
  {
    id: 1,
    title: "چطور می‌توانم سفارش خود را ثبت کنم؟",
    text: "برای ثبت سفارش کافی است محصول موردنظر خود را انتخاب کرده و پس از بررسی مشخصات و قیمت، آن را به سبد خرید اضافه کنید. سپس با ورود یا ثبت‌نام در حساب کاربری، اطلاعات ارسال را وارد کرده و سفارش خود را نهایی کنید.",
  },
  {
    id: 2,
    title: "چه روش‌هایی برای پرداخت وجود دارد؟",
    text: "پرداخت سفارش به‌صورت آنلاین و از طریق درگاه امن بانکی انجام می‌شود. پس از تکمیل موفقیت‌آمیز پرداخت، سفارش شما ثبت شده و مراحل آماده‌سازی و ارسال آن آغاز خواهد شد.",
  },
  {
    id: 3,
    title: "سفارش من چه زمانی به دستم می‌رسد؟",
    text: "زمان ارسال سفارش با توجه به شهر مقصد و روش ارسال متفاوت است. پس از ثبت سفارش، اطلاعات مربوط به وضعیت و روند ارسال از طریق حساب کاربری یا اطلاعات تماس ثبت‌شده در اختیار شما قرار می‌گیرد.",
  },
  {
    id: 4,
    title: "آیا امکان مرجوع کردن کالا وجود دارد؟",
    text: "بله، در صورت وجود شرایط لازم برای بازگشت کالا، می‌توانید درخواست مرجوعی خود را از طریق پشتیبانی ثبت کنید. کالا باید مطابق شرایط اعلام‌شده و در وضعیت قابل قبول برای بازگشت باشد.",
  },
];
const ContactQuestion = () => {
  return (
    <section>
      <div className="container mx-auto flex items-center m-8 justify-center ">
        <H3 className="text-center">
          سوالات متدوال <br />
          <Muted className="mt-5 text-center">
            پاسخ پرسش‌های پرتکرار مشتریان را اینجا مشاهده کنید.
          </Muted>
        </H3>
      </div>

      <div className="container mx-auto flex items-center justify-center">
        <div>
          {ItemComponentQuestion.map((item) => {
            return (
              <ContactComponentQuestion
                title={item.title}
                text={item.text}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactQuestion;
