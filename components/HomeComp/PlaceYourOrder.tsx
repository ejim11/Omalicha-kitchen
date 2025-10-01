"use client";
import React from "react";
import { useContext } from "react";
import appContext from "@/store/appContext";

const PlaceYourOrder = () => {
  const { changeIsOrderModalVisible } = useContext(appContext);

  const openModalHandler = () => {
    changeIsOrderModalVisible(true);
  };

  return (
    <section className="h-[64rem] w-full mt-[8rem] bg-place-order rounded-[1.6rem] overflow-hidden px-[7rem] max-2xl:px-[5rem] max-xl:px-[3rem] max-smd:p-[2rem] max-ssm:p-[1rem] flex flex-col justify-center ">
      <div className="text-white w-[50%] max-xl:w-[75%] max-xmd:w-full max-smd:flex max-smd:flex-col max-smd:text-center max-smd:items-center ">
        <p className="font-switzer font-semibold text-[3.6rem] max-ssm:text-[3rem] leading-[4.6rem] mb-[1.6rem]">
          Looking for an African restaurant near you? Welcome to Omalicha
          Kitchen!
        </p>
        <p className="text-[2rem] max-ssm:text-[1.8rem] font-switzer text-[#F3F3F3]">
          Explore our tasty jollof rice, egusi soup, and all your favorite
          mouth-wavering African dishes prepared with love, care, and pride.
        </p>
        <button
          className="bg-secondary-1 px-[3rem] py-[1rem] rounded-[1.6rem] mt-[2.4rem] font-switzer font-medium block w-max text-[2rem] text-black cursor-pointer"
          onClick={openModalHandler}
        >
          Place your order
        </button>
      </div>
    </section>
  );
};

export default PlaceYourOrder;
