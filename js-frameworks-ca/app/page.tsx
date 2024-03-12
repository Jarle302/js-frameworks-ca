"use client"
import Image from "next/image";
import { Card } from "./ui/components/ecomCard";
import ProductList from "./ui/components/ProductList";
import useShopStore from "./store/useShopStore";
import { item } from "./store/useShopStore";
export default function Home() {
  const { cart } = useShopStore();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductList></ProductList>
      <Card
        title="This is a title test"
        price={4000}
        id="test"
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="test"
      />
      <ul>
        {cart.map((item:item) => (
          <li>{item.title + item.qty}</li>
        ))}
      </ul>
    </main>
  );
}
