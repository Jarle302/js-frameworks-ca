import React, { FC } from "react";
import { Card } from "../ecomCard";
import { item } from "@/app/_store/useShopStore";
import getAll from "@/app/_api/apiCallFn";
type data = { data: item[] };

const ProductList: FC = async () => {
  const data: data = await getAll();
  const renderProducts = data.data.map((item) => (
    <Card key={item.id} {...item} />
  ));

  return <div className={"flex flex-wrap gap-3 "}>{renderProducts}</div>;
};
export default ProductList;
