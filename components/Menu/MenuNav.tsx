"use client";
import React, { ReactNode, useMemo } from "react";
import StockUpForTheWeek from "../HomeComp/StockUpForTheWeek";
import flower1Img from "../../assets/menu/flower-1.png";
import flower2Img from "../../assets/menu/flower-2.png";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const MenuNav: React.FC<{ children: ReactNode }> = ({ children }) => {
  const searchParams = useSearchParams();

  // Convert searchParams to an object if needed
  const searchParamsObject = useMemo(
    () => ({
      filter: searchParams.get("filter") || undefined,
    }),
    [searchParams]
  );

  const navs: string[] = [
    "Traditional Soups",
    "Rice Dishes",
    "Pepper Soups",
    "Specials",
    "Kid’s Menu",
    "Drinks",
    "Sides",
  ];

  return (
    <main className="px-[9rem] pt-[4rem]  overflow-x-hidden">
      <div className="relative ">
        <div className="w-[13.6rem] absolute  left-0 z-10">
          <Image
            src={flower1Img}
            alt="flower image"
            priority
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
        <div className="w-[21rem] absolute  -right-[7rem] -top-[1rem] z-10">
          <Image
            src={flower1Img}
            alt="flower image"
            priority
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
        <div className="w-[13.6rem] absolute  -right-[9rem] bottom-0 z-10">
          <Image
            src={flower2Img}
            alt="flower image"
            priority
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
        <div className="flex items-center flex-col text-center w-full z-40 relative">
          <h3 className="text-[3.2rem] font-poppins font-medium capitalize text-primary-1">
            our menu
          </h3>
          <p className="leading-[2.4rem] text-[#181818] font-switzer w-[60%]">
            Explore the rich flavors of West Africa-from fresh rice dishes to
            traditional soups and authentic Igbo Delicacies
          </p>
        </div>
        <div className="flex z-50 mt-[4rem] justify-center relative text-[1.8rem] font-switzer">
          {navs.map((nav: string) => (
            <Link
              href={`?filter=${nav.toLowerCase().split(" ").join("-")}`}
              key={nav}
              className={`${
                nav.toLowerCase().split(" ").join("-") ===
                searchParamsObject.filter
                  ? "text-primary-1 border-primary-1"
                  : "text-black border-transparent"
              } block border-b-[0.4rem] pb-[2rem] mr-[4.8rem] last:mr-0 transition-all duration-150 ease-in`}
            >
              {nav}
            </Link>
          ))}
        </div>
        <div>{children}</div>
      </div>
      <StockUpForTheWeek />
    </main>
  );
};

export default MenuNav;
