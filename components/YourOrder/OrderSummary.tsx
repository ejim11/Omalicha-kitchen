"use client";
import appContext from "@/store/appContext";
import { CartItem } from "@/store/appContextProvider";
import { sendMessage } from "@/utils/sendMessage";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const OrderSummary = ({
  deliveryOption,
  message,
}: {
  deliveryOption: string;
  message: string;
}) => {
  const { cartItems, emptyCart } = useContext(appContext);

  const router = useRouter();

  const subTotal = cartItems
    .map((item: CartItem) => item.choosenQty * item.item.price)
    .reduce((acc, cur) => acc + cur, 0);

  const deliveryFee = deliveryOption === "Delivery  ($5)" ? 5 : 0;

  const data: { title: string; value: number }[] = [
    {
      title: "Subtotal",
      value: subTotal,
    },
    {
      title: "Delivery Fee",
      value: deliveryFee,
    },
    {
      title: "Total",
      value: subTotal + deliveryFee,
    },
  ];

  const submitCartInfo = () => {
    const cartInfo = cartItems.map(
      (item: CartItem) =>
        `DishItem: ${item.item.name}, ChoosenQty: ${item.choosenQty}, Total: $${
          item.item.price * item.choosenQty
        }`
    );

    const str = `Hello, I want to make an order. \n\n${cartInfo.join(
      `\n \n`
    )} \n\nDeliveryFee: $${deliveryFee} \n\nGrandTotal: $${
      subTotal + deliveryFee
    } \n\nSpecial Intructions: ${message ? message : "none"}`;

    sendMessage(str);

    emptyCart();

    router.push("/");
  };

  return (
    <div className="flex flex-col">
      <div className="bg-[#ECECEC] border border-[#D1D1D1] rounded-[0.5rem] px-[3.2rem] py-[2rem] font-switzer">
        <p className="text-black text-[2.4rem] font-bold mb-[2.4rem]">
          Order Summary
        </p>
        <div className="flex flex-col">
          {data.map((item: { title: string; value: number }) => (
            <div
              key={item.title}
              className={`flex items-center justify-between mb-[2rem] last:mb-0  ${
                item.title === "Total"
                  ? "border-t pt-[2rem] border-t-[rgba(0,0,0,0.1)]"
                  : ""
              } `}
            >
              <p
                className={`text-[2rem] ${
                  item.title === "Total"
                    ? "text-black"
                    : "text-[rgba(0,0,0,0.6)]"
                } `}
              >
                {item.title}
              </p>
              <p className="text-primary-1 text-[2rem] font-bold">
                ${item.value.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <button
        type="submit"
        disabled={cartItems.length <= 0}
        onClick={submitCartInfo}
        className=" flex self-end w-max py-[1rem] text-center text-[2rem] mt-[2.4rem] font-medium  font-switzer rounded-[1.6rem]
           bg-secondary-1 text-[#3F5143] px-[3rem] disabled:bg-gray-100 disabled:text-gray-200 cursor-pointer disabled:cursor-not-allowed"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
