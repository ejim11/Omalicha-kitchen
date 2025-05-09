import React from "react";
import TitleComp from "../TitleComp";
import { specialDishes } from "@/data/specialDishes";
import { DishItem } from "@/types/dishItem";
import Image from "next/image";

const SpecialDishes = () => {
  return (
    <section>
      <TitleComp title="our special dishes" />
      <div className="grid grid-cols-4 gap-[3rem] max-lg:grid-cols-2  mt-[3.5rem] max-sm:gap-[2rem] max-ssm:grid-cols-1">
        {specialDishes.map((dish: DishItem) => (
          <div
            key={dish.name}
            className="flex items-center flex-col text-center"
          >
            <div className="w-[20rem] relative z-20">
              <Image
                src={dish.image}
                alt={`${dish.name} image`}
                priority
                width={500}
                height={500}
                className="w-full h-full object-contain"
              />
              <div className="font-switzer font-bold leading-[2.6rem] w-[5.4rem] h-[5.4rem] rounded-full bg-black text-white absolute -right-[2rem] top-[5rem] flex items-center justify-center shadow-2xl shadow-[#101A24]">
                ${dish.price}
              </div>
            </div>
            <div className="bg-[#F9FDE3] h-[30rem] border border-[#D1D1D1] rounded-tl-[5rem] rounded-tr-[1rem] rounded-br-[5rem] rounded-bl-[1rem] p-[2rem] -mt-[8rem] flex items-center justify-center flex-col z-10">
              <p className="text-primary-1 font-switzer font-bold text-[1.8rem] capitalize mt-[3.5rem] leading-[2.6rem] mb-[2rem]">
                {dish.name}
              </p>
              <p className="text-secondary-2 text-[1.4rem] leading-[2.6rem] font-switzer">
                {dish.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialDishes;
