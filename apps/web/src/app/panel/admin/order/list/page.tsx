import OrderList from "@/core/features/panel/components/block/order/list/OrderListComponents";
import OrderListSkeleton from "@/core/features/panel/components/ui/skeleton/OrderListSkeleton";
import { Suspense } from "react";

function page() {
  return (
    <Suspense fallback={<OrderListSkeleton />}>
      <OrderList />
    </Suspense>
  );
}

export default page;
