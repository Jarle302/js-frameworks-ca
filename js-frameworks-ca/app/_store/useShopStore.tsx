"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { create } from "zustand";
type Image = {
  url: string;
  alt: string;
};
type Review = {
  id: string;
  username: string;
  rating: number;
  description: string;
};

export type item = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: Image;
  rating: number;
  tags: string[];
  reviews: Review[];
};

type shopItem = item & { qty: number };

type cartState = {
  cart: Array<shopItem>;
};

type cartActions = {
  addToCart: (item: item) => void;
  removeOneQtyFromCart: (id: string) => void;
  clearCart: () => void;
};

function ShoppingCartFactory() {
  const store = create<cartState & cartActions>()((set) => ({
    cart: [],
    addToCart: (product) =>
      set((state) => {
        let itemIsInCart = false;
        const shoppingList = state.cart.map((item) => {
          if (item.id === product.id) {
            itemIsInCart = true;
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        });

        if (itemIsInCart) {
          return { cart: shoppingList };
        }

        return { cart: [...shoppingList, { ...product, qty: 1 }] };
      }),
    removeOneQtyFromCart: (id) =>
      set((state) => {
        const newState = state.cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        );
        return { cart: newState.filter((item) => item.qty > 0) };
      }),
    clearCart: () => set(() => ({ cart: [] })),
  }));
  return store;
}

const StoreContext = createContext<ReturnType<
  typeof ShoppingCartFactory
> | null>(null);
const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [cartState] = useState(() => ShoppingCartFactory());
  return (
    <StoreContext.Provider value={cartState}>{children}</StoreContext.Provider>
  );
};

const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error(
      "context needs to be used within ShoppingCartContext provider"
    );
  }
  return context;
};

export { StoreProvider, useStore };
