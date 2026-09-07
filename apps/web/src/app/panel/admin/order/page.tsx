import OrderCreateComponents from "@/core/features/panel/components/block/order/create/OrderCreateComponents";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "ایجاد سفارش جدید | پنل مدیریت",
  description: "ایجاد و ثبت سفارش جدید در پنل مدیریت",
};
export default function page() {
  return <OrderCreateComponents />;
}
