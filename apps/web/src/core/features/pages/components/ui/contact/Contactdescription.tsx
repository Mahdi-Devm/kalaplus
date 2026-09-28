import {
  H2,
  Muted,
  Small,
} from "@/core/components/custom/ui/typography/Typography";
import Link from "next/link";
import { itemsContanct } from "../../../assets/mock/contact/contact";

const Contactdescription = () => {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6 lg:p-8">
      <Small className="font-bold text-primary">راه‌های ارتباطی</Small>

      <H2 className="mt-2 text-right">با ما در ارتباط باشید</H2>

      <Muted className="mt-3 max-w-xl leading-7">
        برای دریافت مشاوره یا پاسخ به پرسش‌ها، از یکی از راه‌های زیر با ما تماس
        بگیرید.
      </Muted>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {itemsContanct.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              href={item.href}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-destructive text-popover">
                <Icon className="h-5 w-5" />
              </div>

              <div className="flex flex-col gap-1">
                <Small className="font-medium text-foreground">
                  {item.title}
                </Small>

                <Muted>{item.description}</Muted>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Contactdescription;
