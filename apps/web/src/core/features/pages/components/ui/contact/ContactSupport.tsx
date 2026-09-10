import {
  H2,
  Muted,
  Span,
} from "@/core/components/custom/ui/typography/Typography";
import { Phone } from "lucide-react";
const item = [
  { id: 1, day: "شنبه", text: "باز" },
  { id: 2, day: "یکشنبه", text: "باز" },
  { id: 3, day: "دوشنبه", text: "باز" },
  { id: 4, day: "سه‌شنبه", text: "باز" },
  { id: 5, day: "چهارشنبه", text: "باز" },
  { id: 6, day: "پنجشنبه", text: "باز" },
  { id: 7, day: "جمعه", text: "بسته" },
];

const ContactSupport = () => {
  return (
    <section className="mx-auto w-full max-w-3xl px-5 py-10">
      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6 lg:p-8">
        <div className="mb-6 text-center">
          <H2 className="text-center text-2xl sm:text-3xl">
            ساعات کاری و پاسخگویی
          </H2>

          <Muted className="mx-auto mt-3 max-w-xl text-center leading-7 font-medium md:flex-col">
            در ساعات زیر پاسخگوی تماس‌ها و مراجعه حضوری شما هستیم.
          </Muted>
        </div>

        <div className="overflow-hidden rounded-xl border border-border">
          {item.map((i) => (
            <div
              key={i.id}
              className={`
                grid
         grid-cols-1
md:grid-cols-3
                gap-4
                px-4
                py-4
                transition-colors
                duration-200
                hover:bg-muted/50
                sm:px-5
               border-b border-border
              `}
            >
              <p className="min-w-20 text-sm font-medium text-foreground sm:text-base">
                {i.day}
              </p>

              <p className="text-sm font-medium text-muted-foreground ">
                ۹:۰۰ تا ۱۸:۰۰
              </p>

              <Span
                className={`
    w-full
    rounded-full
    text-center
    px-3
    py-1
    text-xs
    font-medium
    sm:w-fit
    sm:text-sm
    ${
      i.text === "باز"
        ? "bg-primary/10 text-primary"
        : "bg-destructive/10 text-destructive"
    }
  `}
              >
                {i.text}
              </Span>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Muted className="text-center sm:text-right">
            برای هماهنگی پیش از مراجعه تماس بگیرید.
          </Muted>

          <div className="flex items-center justify-center gap-2 sm:justify-end">
            <Phone className="text-destructive" />

            <a href="tel:021-12345678" className="text-destructive">
              021-12345678
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;
