import Link from "next/link";
import React from "react";

const PlaceYourOrder = () => {
  return (
    <section className="h-[64rem] w-full mt-[4rem] bg-place-order rounded-[1.6rem] overflow-hidden px-[7rem] flex flex-col justify-center">
      <div className="text-white w-[50%]">
        <p className="font-switzer font-semibold text-[3.6rem] leading-[4.6rem] mb-[1.6rem]">
          Looking for an African restaurant near you? Welcome to Omalicha
          Kitchen!
        </p>
        <p className="text-[2rem] font-switzer text-[#F3F3F3]">
          Explore our tasty jollof rice, egusi soup, and all your favorite
          mouth-wavering African dishes prepared with love, care, and pride.
        </p>
        <Link
          href={"/menu"}
          className="bg-secondary-1 px-[3rem] py-[1rem] rounded-[1.6rem] mt-[2.4rem] font-switzer font-medium block w-max text-[2rem] text-black"
        >
          Place your order
        </Link>
      </div>
    </section>
  );
};

export default PlaceYourOrder;
