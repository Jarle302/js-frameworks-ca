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

const qClient = new QueryClient();

const query = useQuery({ queryKey: ["test"], queryFn: getAll });

const ProductList: FC = () => {
  return (
    <QueryClientProvider client={qClient}>
      <div>
        {query.isError && <p>There is an error</p>}
        {query.isPending && <p>Loading</p>}
        {query.isSuccess &&
          query.data.map((item: testItem) => <Card {...item}></Card>)}
      </div>
    </QueryClientProvider>
  );
};
