"use client";
import useShopStore, { item } from "../../../store/useShopStore";

import React, { FC } from "react";
import Link from "next/link";

const buttonStyle =
  "w-5 h-5 bg-neutral-800 rounded-full flex justify-center items-center text-white";

type CardProps = {
  src: string;
  alt: string;
  title?: string;
  price?: number;
  id?: string;
};

const Card: FC<CardProps> = ({ src, alt }, item: item) => {
  const { addToCart, removeOneQtyFromCart, clearCart } = useShopStore();
  return (
    <div className={"rounded-lg flex flex-col bg-zinc-200  "}>
      <Link href={"#"}>
        <img src={src} className={"w-48 rounded-lg"} alt={alt} />
      </Link>
      <div className={"p-1"}>
        <h3 className={"text-m  text-zinc-500"}>{item.title}</h3>
        <div className={"flex justify-between"}>
          <p className={"text-l  text-m font-bold text-zinc-700"}>
            {item.price}
          </p>
          <div className="flex gap-1">
            <button
              className={buttonStyle}
              onClick={(e) => removeOneQtyFromCart(item.id)}>
              -
            </button>
            <button className={buttonStyle} onClick={(e) => addToCart(item)}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
