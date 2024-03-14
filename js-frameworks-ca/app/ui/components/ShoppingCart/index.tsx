"use client";
import React, { FC, useState } from "react";
import useShopStore from "@/app/store/useShopStore";
import { CartCard } from "@/app/ui/components/CartCard";

const ShoppingCart: FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const { cart, addToCart, removeOneQtyFromCart, clearCart } = useShopStore();

  return (
    <>
      {isVisible && (
        <div className={"flex flex-col gap-5"}>
          {cart.map((item, index) => (
            <CartCard  index={index} key={item.id} {...item} />
          ))}
        </div>
      )}
    </>
  );
};

export { ShoppingCart };
