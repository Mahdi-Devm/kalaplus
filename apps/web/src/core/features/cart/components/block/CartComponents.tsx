import CartItems from "../ui/CartItems";
import CartSummary from "../ui/CartSummary";

function CartComponents() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <CartItems />
      <CartSummary />
    </div>
  );
}

export default CartComponents;
