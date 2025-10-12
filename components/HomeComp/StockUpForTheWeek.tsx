"use client";
import Image from "next/image";
import React from "react";
import stockUpImg from "../../assets/home/stock-up.png";
// import CountDownTimer from "./CountDownTimer";
// import appContext from "@/store/appContext";
// import { useContext } from "react";
import Link from "next/link";

const StockUpForTheWeek = () => {
  // const { changeIsOrderModalVisible } = useContext(appContext);

  // const openModalHandler = () => {
  //   changeIsOrderModalVisible(true);
  // };

  return (
    <section className="my-[8rem] rounded-[1.6rem] flex overflow-hidden items-center max-lg:items-stretch pl-[7rem] max-lg:pl-[3rem] max-xl:pl-[5rem]  justify-between bg-stockup  max-smd:flex-col max-smd:pl-0">
      <div className="w-[35%] max-lg:w-[38%] max-smd:w-full max-smd:text-center max-smd:flex max-smd:flex-col max-smd:items-center text-white font-switzer max-lg:py-[3rem]">
        <div className="mb-[2rem]">
          {/* <CountDownTimer targetDate={"2025-05-31T00:00:00"} /> */}
        </div>
        <p className=" font-semibold text-[4.2rem] max-lg:text-[3.2rem] max-smd:text-[2.5rem] leading-[3.7rem]">
          Stock Up for the Week
        </p>
        <p className="my-[1.6rem] text-[1.3rem] w-[70%]">
          Order varieties of meals today and enjoy fresh, nourishing meals all
          week!
        </p>
        <Link
          href="tel:(281) 781-7209"
          className="cursor-pointer bg-secondary-1 px-[3rem] py-[1rem] rounded-[1.6rem] mt-[2.4rem] font-switzer font-medium block w-max  text-black"
        >
          Contact us
        </Link>
        {/* <button
          onClick={openModalHandler}
          className="cursor-pointer bg-secondary-1 px-[3rem] py-[1rem] rounded-[1.6rem] mt-[2.4rem] font-switzer font-medium block w-max  text-black"
        >
          Order now
        </button> */}
      </div>
      <div className="w-[60%] max-smd:w-full  ">
        <Image
          src={stockUpImg}
          alt="stock-up image"
          priority
          width={1000}
          height={1000}
          className="w-full h-full max-smd:object-cover"
        />
      </div>
    </section>
  );
};

export default StockUpForTheWeek;
