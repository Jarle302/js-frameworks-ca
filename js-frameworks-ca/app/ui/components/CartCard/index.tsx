import React, { FC } from "react";
import useShopStore, { item } from "@/app/store/useShopStore";
function roundToTwo(toBeRounded: number) {
  return Math.round(toBeRounded * 100) / 100;
}

const CartCard = (item: item & { qty: number }) => {
  const { addToCart, removeOneQtyFromCart } = useShopStore();
  const sum = roundToTwo(item.qty * item.price);
  return (
    <div className={"rounded-lg flex items-center bg-zinc-200 shadow-md "}>
      <img className={"w-20 h-20"} src={item.image.url} alt={item.image.alt} />
      <div>
        <div className={"flex w-[200px] gap-3"}>
          <h3 className="text-lg  text-neutral-700">{item.title}</h3>
          <p className={"font-bold"}>{item.price}</p>
        </div>

        <div
          className={
            "border-solid border-2 border-zinc-800 w-max-min justify-evenly flex"
          }>
          <button onClick={() => removeOneQtyFromCart(item.id)}>-</button>
          <span>{item.qty} </span>
          <button onClick={() => addToCart(item)}>+</button>
        </div>
        <p>
          Sum: <span className={"font-bold"}>{sum}</span>
        </p>
      </div>
    </div>
  );
};

export { CartCard };
