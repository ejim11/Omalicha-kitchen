import React, { ReactNode } from "react";
import StockUpForTheWeek from "../HomeComp/StockUpForTheWeek";

const MenuNav: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="px-[9rem] pt-[4rem]">
      <div className="flex items-center flex-col text-center w-full">
        <h3 className="text-[3.2rem] font-poppins font-medium capitalize text-primary-1">
          our menu
        </h3>
        <p className="leading-[2.4rem] text-[#181818] font-switzer w-[60%]">
          Explore the rich flavors of West Africa-from fresh rice dishes to
          traditional soups and authentic Igbo Delicacies
        </p>
      </div>
      <div>{children}</div>
      <StockUpForTheWeek />
    </main>
  );
};

export default MenuNav;
