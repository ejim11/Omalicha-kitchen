"use client";
import { CartItem } from "@/store/appContextProvider";
import Image from "next/image";
import React, { useContext } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa6";
import appContext from "@/store/appContext";

const CartItemComp = ({ cartItem }: { cartItem: CartItem }) => {
  const { removeCartItem, increaseOrDecreaseCartItemQty } =
    useContext(appContext);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const increaseOrDecreaseCartItemQtyHandler = (e: any) => {
    if (!e.target.dataset.sign) return;
    increaseOrDecreaseCartItemQty(cartItem.item, e.target.dataset.sign);
  };

  return (
    <div className="border border-[#D1D1D1] w-full flex flex-col p-[2rem] rounded-[0.8rem] mb-[2.4rem] bg-[#F4F3E8]">
      <div className="w-[12.4rem] h-[12.4rem] rounded-[0.5rem] overflow-hidden">
        <Image
          src={cartItem.item.image}
          alt={`${cartItem.item.name} image`}
          priority
          width={300}
          height={300}
          className="w-full h-full"
        />
      </div>
      <div className="flex mt-[2.5rem]">
        <div className="w-full flex  flex-col font-switzer">
          <p className="font-bold text-[2rem] text-primary-1">
            {cartItem.item.name}
          </p>
          <p className="text-primary-1 font-semibold text-[1.4rem]">
            ${cartItem.item.price.toFixed(2)} each
          </p>
          <p className="bg-[#DFDFDF] w-max rounded-[1.6rem] p-[0.5rem] text-black text-[1.4rem]">
            size: {cartItem.item.name.includes("L") ? "Large" : "Regular"}
          </p>
          <p className="mt-[0.8rem] font-semibold text-[2.4rem] text-primary-1">
            ${(cartItem.item.price * cartItem.choosenQty).toFixed(2)}
          </p>
        </div>
        <div className="flex flex-col items-end justify-between">
          <button
            type="button"
            onClick={() => {
              removeCartItem(cartItem);
            }}
            className="cursor-pointer"
          >
            <RiDeleteBin6Fill className="text-red-500 w-[2.4rem] h-[2.4rem]" />
          </button>
          <div
            className="flex bg-[#F0F0F0] text-center "
            onClick={increaseOrDecreaseCartItemQtyHandler}
          >
            <button
              type="button"
              className="px-[2rem] py-[1.2rem] hover:bg-gray-300 transition-all duration-150 ease-in cursor-pointer"
              data-sign="minus"
            >
              <FaMinus
                className="w-[2rem] h-[2rem] text-black"
                data-sign="minus"
              />
            </button>
            <div className="flex justify-center items-center px-[1rem]  ">
              {cartItem.choosenQty}
            </div>
            <button
              type="button"
              className="px-[2rem] py-[1.2rem] hover:bg-gray-300 transition-all duration-150 ease-in cursor-pointer"
              data-sign="plus"
            >
              <FaPlus
                className="w-[2rem] h-[2rem] text-black"
                data-sign="plus"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemComp;
