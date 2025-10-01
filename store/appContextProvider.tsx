"use client";
import React, { useState } from "react";
import appContext from "./appContext";
import { DishItem } from "@/types/dishItem";
import OrderModal from "@/components/OrderModal";

export type CartItem = { item: DishItem; choosenQty: number };

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isOrderModalVisible, setIsOrderModalIsVisible] =
    useState<boolean>(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const onChangeStickerHeader = (val: boolean) => {
    setIsSticky(val);
  };

  const addItemToTheCart = (item: DishItem) => {
    const existingItemIndex = cartItems.findIndex(
      (dhItem: CartItem) => item.name === dhItem.item.name
    );

    const existingItem = cartItems[existingItemIndex];

    if (existingItem) {
      setCartItems((prevState: CartItem[]) => {
        return prevState.map((cartItem: CartItem, index: number) => {
          if (index === existingItemIndex) {
            return {
              item: cartItem.item,
              choosenQty: cartItem.choosenQty + 1,
            };
          } else {
            return {
              item: cartItem.item,
              choosenQty: cartItem.choosenQty,
            };
          }
        });
      });
      return;
    }

    setCartItems((prevState: CartItem[]) => [
      ...prevState,
      { item: item, choosenQty: 1 },
    ]);
  };

  const increaseOrDecreaseCartItemQty = (item: DishItem, sign: string) => {
    const existingItemIndex = cartItems.findIndex(
      (dhItem: CartItem) => item.name === dhItem.item.name
    );

    const existingItem = cartItems[existingItemIndex];

    if (existingItem) {
      setCartItems((prevState: CartItem[]) => {
        return prevState.map((cartItem: CartItem, index: number) => {
          if (index === existingItemIndex) {
            return {
              item: cartItem.item,
              choosenQty:
                sign === "plus"
                  ? cartItem.choosenQty + 1
                  : cartItem.choosenQty === 1
                  ? cartItem.choosenQty
                  : cartItem.choosenQty - 1,
            };
          } else {
            return {
              item: cartItem.item,
              choosenQty: cartItem.choosenQty,
            };
          }
        });
      });
      return;
    }
  };

  const removeCartItem = (item: CartItem) => {
    setCartItems((prevState: CartItem[]) =>
      prevState.filter(
        (ctItem: CartItem) => ctItem.item.name !== item.item.name
      )
    );
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const onChangeIsOrderMenuIsVisibleHandler = (val: boolean) => {
    setIsOrderModalIsVisible(val);
  };

  return (
    <appContext.Provider
      value={{
        isHeaderSticky: isSticky,
        changeStickyHeader: onChangeStickerHeader,
        isOrderModalVisible,
        changeIsOrderModalVisible: onChangeIsOrderMenuIsVisibleHandler,
        cartItems: cartItems,
        addItemToCart: addItemToTheCart,
        increaseOrDecreaseCartItemQty: increaseOrDecreaseCartItemQty,
        removeCartItem: removeCartItem,
        emptyCart: emptyCart,
      }}
    >
      {children}
      <OrderModal />
    </appContext.Provider>
  );
};

export default AppContextProvider;
