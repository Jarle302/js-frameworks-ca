import React, { FC } from "react";
import { Card } from "../ecomCard";
import { item } from "@/app/_store/useShopStore";

type data = { data: { data: item[] } };
const ProductList: FC<data> = ({ data }: data) => {
  console.log("rendered");
  const renderProducts = data.data.map((item) => (
    <Card key={item.id} {...item} />
  ));

  return <div className={"flex flex-wrap gap-3 "}>{renderProducts}</div>;
};
export default ProductList;
