"use client";

import { FaShoppingCart } from "react-icons/fa";
import React, { FC } from "react";
import useShopStore from "@/app/store/useShopStore";

const CartIcon = () => {
  const { cart } = useShopStore();
  const count = cart.reduce((total, product) => total + product.qty, 0);
  return (
    <button className={"flex"}>
      <FaShoppingCart /> <span>{count}</span>
    </button>
  );
};

export { CartIcon };
