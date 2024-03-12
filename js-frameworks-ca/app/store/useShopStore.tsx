import { Carter_One } from "next/font/google";
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

type item = {
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

const useShopStore = create<cartState & cartActions>()((set) => ({
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
      return { cart: newState.filter((item) => item.qty <= 0) };
    }),
  clearCart: () => set(() => ({ cart: [] })),
}));
