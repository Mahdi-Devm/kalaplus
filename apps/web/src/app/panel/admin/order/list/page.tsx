import OrderList from "@/core/features/panel/components/block/order/list/OrderListComponents";

async function page({
  searchParams,
}: {
  searchParams: Promise<{ page: string; limit: string; search: string }>;
}) {
  const params = await searchParams;
  return (
    <OrderList page={params.page} limit={params.limit} search={params.search} />
  );
}

export default page;
