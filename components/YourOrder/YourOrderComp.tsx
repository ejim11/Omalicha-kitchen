"use client";
import React, { useContext, useState } from "react";
import MainContainer from "../MainContainer";
import ContainerWithFixedImages from "../ContainerWithFixedImages";
import appContext from "@/store/appContext";
import { CartItem } from "@/store/appContextProvider";
import CartItemComp from "./CartItem";
import OrderSummary from "./OrderSummary";

const YourOrderComp = () => {
  const { cartItems } = useContext(appContext);

  const [message, setMessage] = useState<string>("");
  const [msgError, setMsgError] = useState<string>("");

  const [choosenDeliveryOption, setChoosenDeliveryOption] =
    useState<string>("Delivery  ($5)");

  const deliveryOptions: string[] = ["Delivery  ($5)", "Pick up (Free)"];

  return (
    <MainContainer>
      <ContainerWithFixedImages
        title="Your Order"
        text="Review your selections before proceeding to checkout"
      >
        <div className="min-h-[75vh] relative z-50 pb-[4rem]">
          <h4 className="text-[2.4rem] font-bold font-switzer text-[#484848] mb-[2rem]">
            Order items
          </h4>
          <div className="flex w-full justify-between">
            <div className="w-[45%] ">
              <div className="w-full pr-[1rem] cartItems">
                {cartItems.map((item: CartItem) => (
                  <CartItemComp cartItem={item} key={item.item.name} />
                ))}
              </div>
              <div className="font-switzer">
                <p className="text-[2.4rem] font-semibold text-[#484848] pb-[1rem] border-b border-b-[#D1D1D1] mb-[2.4rem]">
                  Delivery Options
                </p>
                <div className="pl-[2.4rem]">
                  {deliveryOptions.map((option: string) => (
                    <button
                      key={option}
                      className="flex items-center mb-[1.6rem] last:mb-0 cursor-pointer transition-all duration-150 ease-in"
                      onClick={() => {
                        setChoosenDeliveryOption(option);
                      }}
                    >
                      <div
                        className={`w-[2.4rem] h-[2.4rem] flex items-center justify-center rounded-full border mr-[0.5rem] ${
                          choosenDeliveryOption === option
                            ? "border-primary-1"
                            : "border-black"
                        } `}
                      >
                        <div
                          className={`${
                            choosenDeliveryOption === option
                              ? "bg-primary-1"
                              : "bg-transparent"
                          } w-[1.92rem] h-[1.92rem] rounded-full `}
                        ></div>
                      </div>
                      <p className="text-[rgba(0,0,0,0.6)] text-[2rem]">
                        {option}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col w-full mt-[5rem]">
                <label className="mb-[3rem] text-[2.4rem] font-switzer font-semibold text-[484848] w-full border-b border-b-[#D1D1D1] pb-[1rem]">
                  Special Instructions
                </label>
                <textarea
                  rows={5}
                  maxLength={150}
                  value={message}
                  placeholder="Add any special instructions here (e.g “No onions, please”)"
                  onChange={(e: { target: { value: string } }) => {
                    setMessage(e.target.value);
                    setMsgError("");
                  }}
                  className="rounded-lg border bg-[#F4F3E8] placeholder:text-[#D1D1D1] font-switzer  border-[#D1D1D1] resize-none focus:ring-0 focus:outline-none outline-none ring-0 p-[1rem] "
                />
                {msgError && (
                  <small className="text-red-500 mt-[0.5rem]">{msgError}</small>
                )}
              </div>
            </div>
            <div className="w-[40%]">
              <OrderSummary deliveryOption={choosenDeliveryOption} />
            </div>
          </div>
        </div>
      </ContainerWithFixedImages>
    </MainContainer>
  );
};

export default YourOrderComp;
