"use client";
import useShopStore, { item } from "../../../store/useShopStore";
import { FaCartPlus } from "react-icons/fa";

import React, { FC } from "react";
import Link from "next/link";

const buttonStyle =
  "w-14 h-8 p-4 bg-neutral-800 rounded-lg border-solid border-2 flex justify-center items-center text-neutral-100 text-xs";
const buttonStyles =
  "w-5 h-5 p-4 border-solid border-2 border-neutral-800 rounded-full font-bold flex justify-center items-center text-neutral-800";

const Card: FC<item> = (item: item) => {
  const { addToCart, removeOneQtyFromCart, clearCart } = useShopStore();
  return (
    <div className={"rounded-lg flex flex-col bg-zinc-200 shadow-md "}>
      <Link href={"#"}>
        <img
          src={
            item?.image?.url ??
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className={"w-48 h-48  rounded-lg"}
          alt={item?.image?.alt ?? "test alt text"}
        />
      </Link>
      <div className={"p-1"}>
        <h3 className={"text-s  text-zinc-500"}>
          {item.title.length > 17
            ? item.title.slice(0, 17) + "..."
            : item.title}
        </h3>
        <div className={"flex justify-between"}>
          <p className={"text-l  text-m font-bold text-zinc-700"}>
            {item.price}
          </p>
          <div className="flex items-center gap-1">
            <button
              className={buttonStyle}
              onClick={(e) => removeOneQtyFromCart(item.id)}>
              View Product
            </button>
            <button className={buttonStyles} onClick={(e) => addToCart(item)}>
              <FaCartPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
