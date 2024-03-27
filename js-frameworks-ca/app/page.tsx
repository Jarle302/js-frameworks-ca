import ProductList from "./_ui/components/ProductList";
import { ShoppingCart } from "./_ui/components/ShoppingCart";
import { Suspense } from "react";
import { Test } from "@/app/_ui/components/Skeletons/test";
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1">
      <Suspense fallback={<Test />}>
        <ProductList />
      </Suspense>
      <ShoppingCart isVisible={true} />
    </main>
  );
}
