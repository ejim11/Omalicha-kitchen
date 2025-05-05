"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { DishItem } from "@/types/dishItem";
import React from "react";
import { CartItem } from "./appContextProvider";

type AppContextType = {
  isHeaderSticky: boolean;
  changeStickyHeader: (val: boolean) => void;
  cartItems: CartItem[];
  addItemToCart: (item: DishItem) => void;
  increaseOrDecreaseCartItemQty: (item: DishItem, sign: string) => void;
  removeCartItem: (item: CartItem) => void;
  emptyCart: () => void;
};

const appContext = React.createContext<AppContextType>({
  isHeaderSticky: false,
  changeStickyHeader: (val: boolean) => {},
  cartItems: [],
  addItemToCart: (item: DishItem) => {},
  increaseOrDecreaseCartItemQty: (item: DishItem, sign: string) => {},
  removeCartItem: (item: CartItem) => {},
  emptyCart: () => {},
});

export default appContext;
