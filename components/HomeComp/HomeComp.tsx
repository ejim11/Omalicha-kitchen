import React from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";

const HomeComp = () => {
  return (
    <main className="-mt-[10rem]">
      <Hero />
      <div className="bg-[#F4F3E8] px-[9rem] py-[3rem]">
        <SpecialDishes />
      </div>
    </main>
  );
};

export default HomeComp;
