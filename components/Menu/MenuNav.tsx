"use client";
import React, { ReactNode, useMemo } from "react";
import StockUpForTheWeek from "../HomeComp/StockUpForTheWeek";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ContainerWithFixedImages from "../ContainerWithFixedImages";
import MainContainer from "../MainContainer";

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
    <MainContainer>
      <ContainerWithFixedImages
        title="our menu"
        text="Explore the rich flavors of West Africa-from fresh rice dishes to traditional soups and authentic Igbo Delicacies"
      >
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
      </ContainerWithFixedImages>
      <StockUpForTheWeek />
    </MainContainer>
  );
};

export default MenuNav;
