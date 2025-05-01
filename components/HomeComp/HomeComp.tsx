import React from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import PlaceYourOrder from "./PlaceYourOrder";
import OrderDishes from "./OrderDishes";
import OurGallery from "./OurGallery";

const HomeComp = () => {
  return (
    <main className="-mt-[10rem]">
      <Hero />
      <div className="bg-[#F4F3E8] px-[9rem] py-[3rem] overflow-x-hidden">
        <SpecialDishes />
        <PlaceYourOrder />
        <OrderDishes />
        <OurGallery />
      </div>
    </main>
  );
};

export default HomeComp;
