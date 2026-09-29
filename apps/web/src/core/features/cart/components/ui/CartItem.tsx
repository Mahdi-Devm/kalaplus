"use client";

import { CartItemType } from "@/core/assets/@types/cart/cart";
import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";
import { H4, P } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { formatToman } from "@/core/features/shop/utils/formatToman";
import { useCart } from "@/core/store/cart.store";
import { getImageUrl } from "@/core/utils/getImageUrl";
import { Minus, Plus, Trash2 } from "lucide-react";

function CartItem({ item }: { item: CartItemType }) {
  const increaseQuantity = useCart((state) => state.increaseQuantity);

  const decreaseQuantity = useCart((state) => state.decreaseQuantity);

  const removeCart = useCart((state) => state.removeCart);

  return (
    <div className="flex gap-4 p-5">
      <div className="relative size-24 shrink-0 overflow-hidden rounded-lg bg-muted sm:size-28">
        <ImgNormalCustom
          src={getImageUrl(item.image)}
          alt={item.title}
          fill
          sizes="112px"
          className="object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
        <div>
          <H4 className="line-clamp-2 ">{item.title}</H4>

          <P className="mt-2 text-sm text-muted-foreground">
            {formatToman(item.price)} تومان
          </P>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex h-9 items-center rounded-lg border">
            <Button
              variant="ghost"
              size="icon"
              className="size-8"
              onClick={() => increaseQuantity(item.id)}
            >
              <Plus className="size-4" />
            </Button>

            <span className="w-8 text-center text-sm font-medium">
              {item.quantity}
            </span>

            <Button
              variant="ghost"
              size="icon"
              className="size-8"
              onClick={() => decreaseQuantity(item.id)}
            >
              <Minus className="size-4" />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-destructive hover:text-destructive"
            onClick={() => removeCart(item.id)}
          >
            <Trash2 className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
