"use client";

import { FaShoppingCart } from "react-icons/fa";
import React from "react";
import { useStore } from "@/app/_store/useShopStore";

const CartIcon = () => {
  const state = useStore();
  if (!state) {
    return;
  }
  const { cart } = state();

  const count = cart.reduce((total, product) => total + product.qty, 0);
  return (
    <button className={"flex"}>
      <FaShoppingCart /> <span>{count}</span>
    </button>
  );
};
export { CartIcon };
