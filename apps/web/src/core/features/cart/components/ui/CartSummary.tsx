"use client";

import { Span } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { Separator } from "@/core/components/shadcn/ui/separator/separator";
import { formatToman } from "@/core/features/shop/utils/formatToman";
import { useCart } from "@/core/store/cart.store";

function CartSummary() {
  const cart = useCart((state) => state.cart);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="h-fit rounded-xl border bg-card p-5 lg:sticky lg:top-24">
      <h2 className="font-semibold">خلاصه سفارش</h2>

      <div className="mt-5 space-y-4 text-sm">
        <div className="flex items-center justify-between">
          <Span className="text-muted-foreground">تعداد کالا</Span>

          <Span>{totalItems} عدد</Span>
        </div>

        <div className="flex items-center justify-between">
          <Span className="text-muted-foreground">قیمت محصولات</Span>

          <Span>{formatToman(totalPrice)} تومان</Span>
        </div>

        <div className="flex items-center justify-between">
          <Span className="text-muted-foreground">هزینه ارسال</Span>

          <Span className="text-green-600">رایگان</Span>
        </div>

        <Separator />

        <div className="flex items-center justify-between font-bold">
          <Span>مبلغ قابل پرداخت</Span>

          <Span>{formatToman(totalPrice)} تومان</Span>
        </div>

        <Button className="h-11 w-full" disabled={!cart.length}>
          ادامه فرایند خرید
        </Button>
      </div>
    </div>
  );
}

export default CartSummary;
