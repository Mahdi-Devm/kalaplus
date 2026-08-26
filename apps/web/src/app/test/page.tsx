import { api } from "@/core/lib/fetch/fetcher";
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
async function page() {
  const list = await api.get<Product>("https://fakestoreapi.com/products/1");
  console.log(list);
  return <div>{list.price}</div>;
}

export default page;
