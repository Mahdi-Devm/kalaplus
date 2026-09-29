import { Button } from "@/core/components/shadcn/ui/button/button";
import { LikeButton } from "@/core/features/like/components/ui/LikeButton";
import { FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";

import { ProductType } from "@/core/assets/@types/product/ProductType";
import { useCart } from "@/core/store/cart.store";
import { toast } from "sonner";

function ActionBtnProductInfo({
  quantity,
  inStock,
  product,
  onIncrease,
  onDecrease,
}: {
  quantity: number;
  inStock: boolean;
  product: ProductType;
  onIncrease: () => void;
  onDecrease: () => void;
}) {
  const addItemCart = useCart((state) => state.addCart);

  function handleAddToCart() {
    addItemCart(product, quantity);

    toast.success("محصول با موفقیت به سبد خرید اضافه شد.");
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="flex w-fit items-center gap-3 rounded-lg border border-border p-1">
        <button
          type="button"
          onClick={onIncrease}
          disabled={!inStock}
          className="flex h-8 w-8 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary disabled:opacity-40"
          aria-label="افزایش تعداد"
        >
          <FiPlus className="h-4 w-4" />
        </button>

        <span className="w-6 text-center text-sm font-medium">{quantity}</span>

        <button
          type="button"
          onClick={onDecrease}
          disabled={!inStock}
          className="flex h-8 w-8 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary disabled:opacity-40"
          aria-label="کاهش تعداد"
        >
          <FiMinus className="h-4 w-4" />
        </button>
      </div>

      <Button
        className="flex-1 gap-2"
        disabled={!inStock}
        onClick={handleAddToCart}
      >
        <FiShoppingCart className="h-4 w-4" />

        {inStock ? "افزودن به سبد خرید" : "ناموجود"}
      </Button>

      <LikeButton
        product={product}
        ariaLabel="افزودن به علاقه‌مندی‌ها"
        className="size-10 border border-primary text-primary hover:bg-primary/10 disabled:opacity-100"
        iconClassName="size-4"
      />
    </div>
  );
}

export default ActionBtnProductInfo;
