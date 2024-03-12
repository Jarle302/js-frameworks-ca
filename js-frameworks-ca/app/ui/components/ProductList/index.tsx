"use client";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React, { FC, ReactNode } from "react";
import { Card } from "../ecomCard";
import getAll from "@/app/api/apiCallFn";
import { item as testItem } from "@/app/store/useShopStore";

const ProductList: FC = () => {
  const qClient = new QueryClient();

  const query = useQuery({ queryKey: ["test"], queryFn: getAll }, qClient);
  return (
    <QueryClientProvider client={qClient}>
      <div className={"flex flex-wrap gap-3"}>
        {query.isError && <p>There is an error</p>}
        {query.isPending && <p>Loading</p>}
        {query.isSuccess &&
          query.data.data.map((item: testItem) => (
            <Card key={item.id} {...item}></Card>
          ))}
      </div>
    </QueryClientProvider>
  );
};

export default ProductList;
