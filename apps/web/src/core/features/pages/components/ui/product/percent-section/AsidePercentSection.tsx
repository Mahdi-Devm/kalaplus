import { H2, P, Span } from "@/core/components/custom/ui/typography/Typography";
import { useMemo } from "react";
import { CountdownTimer } from "../CountdownTimer";

function AsidePercentSection() {
  const deadline = useMemo(() => Date.now() + 24 * 60 * 60 * 1000, []);

  return (
    <aside className="relative min-h-32 shrink-0 overflow-hidden rounded-xl bg-white/10 p-3 text-primary-foreground sm:min-h-36 sm:p-4 lg:min-h-52 lg:w-48 lg:rounded-tr-[1.75rem] lg:rounded-br-[1.75rem] lg:p-5 xl:w-56">
      <div className="pointer-events-none absolute -right-8 -top-8 size-20 rounded-full bg-white/10 lg:-right-12 lg:-top-12 lg:size-32" />

      <div className="pointer-events-none absolute -bottom-10 -left-8 size-24 rounded-full bg-white/10 lg:-bottom-16 lg:-left-10 lg:size-40" />

      <div className="relative z-10 flex h-full flex-col justify-between gap-3 sm:gap-4 lg:gap-6">
        <div>
          <Span className="inline-flex rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-medium backdrop-blur-sm sm:px-2.5 sm:py-1 sm:text-[10px]">
            پیشنهاد ویژه
          </Span>

          <H2 className="mt-2 pb-0 text-lg font-black leading-6 sm:mt-3 sm:text-xl sm:leading-7 lg:mt-4 lg:leading-8">
            تخفیف‌های
            <br />
            <Span className="text-2xl font-black sm:text-3xl">ویژه</Span>
          </H2>

          <P className="mt-1 max-w-37 text-[10px] leading-4 text-primary-foreground/70 sm:text-[11px] sm:leading-5 sm:flex hidden">
            محصولات منتخب را با قیمت بهتر خرید کنید.
          </P>
        </div>

        <CountdownTimer deadline={deadline} />
      </div>
    </aside>
  );
}

export default AsidePercentSection;
