import ShopProducts from "../ui/shop/ShopProducts";

async function ShopComponents({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    limit?: string;
    search?: string;
    filter_price?: string;
    filter_categoryId?: string;
    sortBy?: string;
  }>;
}) {
  const params = await searchParams;
  return (
    <ShopProducts
      page={Number(params.page ?? 1)}
      limit={Number(params.limit ?? 12)}
      search={params.search}
      filter_price={params.filter_price}
      filter_categoryId={params.filter_categoryId}
      sortBy={params.sortBy}
    />
  );
}

export default ShopComponents;
