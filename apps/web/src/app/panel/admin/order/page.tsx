import OrderCreateComponents from "@/core/features/panel/components/block/order/create/OrderCreateComponents";
import OrderCreateSkeleton from "@/core/features/panel/components/ui/skeleton/OrderCreateSkeleton";
import { Metadata } from "next";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "ایجاد سفارش جدید | پنل مدیریت",
  description: "ایجاد و ثبت سفارش جدید در پنل مدیریت",
};
export default function page() {
  return (
    <Suspense fallback={<OrderCreateSkeleton />}>
      <OrderCreateComponents />
    </Suspense>
  );
}
