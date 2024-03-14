import ProductList from "./ui/components/ProductList";
import { item } from "./store/useShopStore";
import { CartIcon } from "./ui/components/CartIcon";
import { ShoppingCart } from "./ui/components/ShoppingCart";
import getAll from "./api/apiCallFn";

export default async function Home() {
  const data = await getAll();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CartIcon />
      <ProductList data={data} />

      <ShoppingCart isVisible={true} />
    </main>
  );
}
