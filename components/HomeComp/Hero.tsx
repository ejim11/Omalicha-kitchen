import Link from "next/link";
import React from "react";
import FirstSection from "../FirstSection";

const Hero = () => {
  return (
    <FirstSection containerClassName="bg-hero h-screen flex justify-center px-[9rem]  flex-col">
      <div className="w-[75%]">
        <h2 className=" text-white font-ojuju  leading-[8.2rem] font-bold text-[9.6rem]">
          Taste of Home on your Plate
        </h2>
        <p className="font-switzer text-[2rem] leading-[3.3rem] text-white w-[55%] mt-[1.6rem]">
          African restaurant in Houston, Texas for rich, authentic dishes that
          bring family, culture, and comfort together.
        </p>
        <Link
          href={"/menu"}
          className="bg-secondary-1 px-[3rem] py-[1rem] rounded-[1.6rem] mt-[2.4rem] font-switzer font-medium block w-max text-[2rem] text-black"
        >
          Explore our dishes
        </Link>
      </div>
    </FirstSection>
  );
};

export default Hero;
