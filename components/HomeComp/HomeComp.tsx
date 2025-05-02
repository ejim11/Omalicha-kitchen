import React from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import PlaceYourOrder from "./PlaceYourOrder";
import OrderDishes from "./OrderDishes";
import OurGallery from "./OurGallery";
import Testimonial from "./Testimonial";
import WhyChooseUs from "./WhyChooseUs";
import StockUpForTheWeek from "./StockUpForTheWeek";

const HomeComp = () => {
  return (
    <main className="-mt-[10rem]">
      <Hero />
      <div className="bg-[#F4F3E8] px-[9rem] py-[3rem] overflow-x-hidden">
        <SpecialDishes />
        <PlaceYourOrder />
        <OrderDishes />
        <OurGallery />
        <Testimonial />
        <WhyChooseUs />
        <StockUpForTheWeek />
      </div>
    </main>
  );
};

export default HomeComp;
