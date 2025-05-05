import React from "react";
import TitleComp from "../TitleComp";
import Image from "next/image";
import flowerImg from "../../assets/home/flower-1.png";
import flowerImg2 from "../../assets/home/flower-2.png";
import { orderDishes } from "@/data/orderDishes";
import { DishItem } from "@/types/dishItem";
import DishItemContainer from "../DishItemContainer";
import Link from "next/link";

const OrderDishes = () => {
  return (
    <section className="mt-[8rem] relative ">
      <div className="w-[13.6rem] absolute -top-[1rem] -left-[6rem]">
        <Image
          src={flowerImg}
          alt="flower image"
          priority
          width={200}
          height={200}
          className="w-full h-full"
        />
      </div>
      <div className="w-[13.6rem] absolute -bottom-[1rem] -right-[16rem]">
        <Image
          src={flowerImg2}
          alt="flower image"
          priority
          width={200}
          height={200}
          className="w-full h-full"
        />
      </div>
      <TitleComp title="order dishes" />
      <div className="mt-[5rem] flex justify-between font-switzer items-center">
        <p className="text-[2.4rem] text-primary-1 font-medium">
          View our menu
        </p>
        <Link
          href={"/menu?filter=all"}
          className="text-[#3F5143] font-medium  block  border-b border-b-[#3F5143] p-[0.2rem]"
        >
          View all
        </Link>
      </div>
      <div className=" mt-[2rem] grid grid-cols-3 gap-[3rem] max-md:gap-0 max-md:flex max-md:flex-nowrap max-md:overflow-x-auto max-md:w-full orderMenu">
        {orderDishes.map((dish: DishItem) => (
          <div
            key={dish.name}
            className="w-full h-full block max-md:w-[35rem] max-md:mr-[3rem] max-md:shrink-0"
          >
            <DishItemContainer
              image={dish.image}
              name={dish.name}
              description={dish.description}
              price={dish.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderDishes;
