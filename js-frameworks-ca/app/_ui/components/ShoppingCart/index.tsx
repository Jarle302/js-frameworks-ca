"use client";
import React, { FC, useState } from "react";
import { useStore } from "@/app/_store/useShopStore";
import { CartCard } from "@/app/_ui/components/CartCard";

const ShoppingCart: FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const state = useStore();
  if (!state) {
    return;
  }
  const { cart, addToCart, removeOneQtyFromCart, clearCart } = state();

  return (
    <>
      {isVisible && (
        <div className={"flex flex-col gap-5"}>
          {cart.map((item, index) => (
            <CartCard index={index} key={item.id} {...item} />
          ))}
        </div>
      )}
    </>
  );
};

export { ShoppingCart };
