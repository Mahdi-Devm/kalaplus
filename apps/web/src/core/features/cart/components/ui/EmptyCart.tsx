import { H4, P } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { ShoppingCart } from "lucide-react";

function EmptyCart() {
  return (
    <div className="flex min-h-80 flex-col items-center justify-center rounded-xl border bg-card px-5 text-center">
      <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-muted">
        <ShoppingCart className="size-7 text-muted-foreground" />
      </div>
      <H4>سبد خرید شما خالی است</H4>
      <P>هنوز محصولی به سبد خرید اضافه نکرده‌اید.</P>
      <Button className="mt-6">مشاهده محصولات</Button>
    </div>
  );
}

export default EmptyCart;
