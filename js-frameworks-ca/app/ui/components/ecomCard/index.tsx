"use client";
import useShopStore, { item } from "../../../store/useShopStore";
import { FaCartPlus } from "react-icons/fa";
import React, { FC } from "react";
import Link from "next/link";

const buttonStyle =
  "m-0 w-14 h-8 p-4 bg-neutral-800 rounded-lg border-solid border-2 flex justify-center items-center text-neutral-100 text-xs";
const buttonStyles =
  " m-0  flex justify-center items-center text-2xl text-neutral-800";

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
        <div className={"flex justify-between"}>
          <div className={"flex flex-col"}>
            <h3 className={"text-s  text-zinc-500"}>
              {item.title.length > 14
                ? item.title.slice(0, 14) + "..."
                : item.title}
            </h3>
            <p className={"text-l  text-m font-bold text-zinc-700"}>
              {item.price}
            </p>
          </div>
          <div className="flex items-center flex-col gap-1">
            <button className={buttonStyles} onClick={(e) => addToCart(item)}>
              <FaCartPlus />
            </button>
            <button
              className={buttonStyle}
              onClick={(e) => removeOneQtyFromCart(item.id)}>
              View Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
