"use client";

import { H4 } from "@/core/components/custom/ui/typography/Typography";
import { useCart } from "@/core/store/cart.store";
import { ShoppingBag } from "lucide-react";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function CartItems() {
  const cart = useCart((state) => state.cart);

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <div className="rounded-xl border bg-card">
      <div className="border-b px-5 py-4">
        <H4 className={"flex items-center gap-1"}>
          <ShoppingBag />
          محصولات سبد خرید
        </H4>
      </div>

      <div className="divide-y">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CartItems;
