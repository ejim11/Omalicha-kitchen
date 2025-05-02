import Image from "next/image";
import React from "react";
import stockUpImg from "../../assets/home/stock-up.png";
import Link from "next/link";
import CountDownTimer from "./CountDownTimer";

const StockUpForTheWeek = () => {
  return (
    <section className="my-[8rem] rounded-[1.6rem] flex overflow-hidden items-center pl-[7rem] justify-between bg-stockup ">
      <div className="w-[35%] text-white font-switzer">
        <div className="mb-[2rem]">
          <CountDownTimer targetDate={"2025-05-31T00:00:00"} />
        </div>
        <p className=" font-semibold text-[4.2rem] leading-[3.7rem]">
          Stock Up for the Week
        </p>
        <p className="my-[1.6rem] text-[1.3rem] w-[70%]">
          Order varieties of meals today and enjoy fresh, nourishing meals all
          week!
        </p>
        <Link
          href={"/menu"}
          className="bg-secondary-1 px-[3rem] py-[1rem] rounded-[1.6rem] mt-[2.4rem] font-switzer font-medium block w-max  text-black"
        >
          Order now
        </Link>
      </div>
      <div className="w-[60%] ">
        <Image
          src={stockUpImg}
          alt="stock-up image"
          priority
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default StockUpForTheWeek;
