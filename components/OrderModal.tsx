"use client";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";
import { SiDoordash, SiUbereats } from "react-icons/si";
import { useContext } from "react";
import appContext from "@/store/appContext";

const OrderModal = () => {
  const { changeIsOrderModalVisible, isOrderModalVisible } =
    useContext(appContext);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const closeModalHandler = (e: any) => {
    if (!e.target.dataset.closemodal) return;

    changeIsOrderModalVisible(false);
  };

  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-[110] ${
        isOrderModalVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-[100%]"
      } transition-all duration-300 ease-in`}
      data-closemodal="close"
      onClick={closeModalHandler}
    >
      <div className="bg-white rounded-[0.5rem] p-[2rem]">
        <div className="flex justify-between items-center">
          <p className="text-[2rem] font-poppins text-primary-1">Order With</p>
          <button
            type="button"
            className="cursor-pointer"
            data-closemodal="close"
          >
            <IoClose
              className="w-[2.5rem] h-[2.5rem] text-primary-1"
              data-closemodal="close"
            />
          </button>
        </div>
        <div className="flex items-center mt-[2rem]">
          <Link
            href={" https://order.online/business/omalicha-kitchen-11710787"}
            className="mr-[2rem] flex items-center bg-red-500 px-[3rem] py-[1rem] rounded-[1.6rem] mt-[2.4rem] font-switzer font-medium  w-max text-[2rem] text-white"
            target="_blank"
            data-closemodal="close"
          >
            <SiDoordash className="mr-[1rem] w-[2.5rem] h-[2.5rem]" />
            <span>Doordash</span>
          </Link>
          <Link
            href={
              "https://www.order.store/store/omalicha-kitchen/2QZV1cO-SNCJzO8g8HXsxw"
            }
            className="flex items-center bg-[#3FC060] px-[3rem] py-[1rem] rounded-[1.6rem] mt-[2.4rem] font-switzer font-medium  w-max text-[2rem] text-white"
            target="_blank"
            data-closemodal="close"
          >
            <SiUbereats className="mr-[1rem] w-[2.5rem] h-[2.5rem]" />
            <span>UberEats</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
