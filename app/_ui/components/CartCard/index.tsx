import React, { FC } from "react";
import { useStore, item } from "@/app/_store/useShopStore";
function roundToTwo(toBeRounded: number) {
  return Math.round(toBeRounded * 100) / 100;
}

const CartCard = ({
  price,
  image,
  qty,
  title,
  index,
  id,
  ...rest
}: item & {
  qty: number;
  index: number;
}) => {
  const state = useStore();
  if (!state) {
    return;
  }
  const { addToCart, removeOneQtyFromCart } = state();
  const sum = roundToTwo(qty * price);

  return (
    <div
      className={`rounded-lg flex items-center ${
        index % 2 === 0 ? "bg-zinc-200" : "bg-zinc-500"
      } shadow-md gap-4 `}>
      <img
        className={"w-20 h-20"}
        src={
          image?.url ??
          "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt={image?.alt ?? "Image of a product that is for sale"}
      />
      <div className={"flex flex-col justify-between h-[79px]"}>
        <div className={"flex w-[290px] gap-3 justify-between"}>
          <h3 className="text-lg  text-neutral-700">{title}</h3>
          <p className={"font-bold"}>{price}</p>
        </div>
        <div className={"flex justify-between"}>
          <div
            className={
              "rounded-lg gap-4 p-1 w-min justify-evenly flex text-white bg-zinc-400"
            }>
            <button onClick={() => removeOneQtyFromCart(id)}>-</button>
            <span>{qty} </span>
            <button
              onClick={() => addToCart({ price, image, title, id, ...rest })}>
              +
            </button>
          </div>
          <p>
            Sum: <span className={"font-bold"}>{sum}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
