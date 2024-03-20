import ProductList from "./_ui/components/ProductList";
import { ShoppingCart } from "./_ui/components/ShoppingCart";
import getAll from "./_api/apiCallFn";

export default async function Home() {
  const data = await getAll();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1">
      <ProductList data={data} />
      <ShoppingCart isVisible={true} />
    </main>
  );
}
