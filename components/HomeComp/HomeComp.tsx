import React from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import PlaceYourOrder from "./PlaceYourOrder";
import OrderDishes from "./OrderDishes";

const HomeComp = () => {
  return (
    <main className="-mt-[10rem]">
      <Hero />
      <div className="bg-[#F4F3E8] px-[9rem] py-[3rem]">
        <SpecialDishes />
        <PlaceYourOrder />
        <OrderDishes />
      </div>
    </main>
  );
};

export default HomeComp;
