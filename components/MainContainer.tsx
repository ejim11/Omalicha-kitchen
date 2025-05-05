"use client";
import appContext from "@/store/appContext";
import React, { FC, ReactNode, useContext } from "react";

const MainContainer: FC<{ children: ReactNode }> = ({ children }) => {
  const { isHeaderSticky } = useContext(appContext);

  return (
    <main
      className={`px-[9rem] max-2xl:px-[5rem]  max-xl:px-[3rem] max-sm:px-[2rem]  ${
        isHeaderSticky
          ? "pt-[8rem] max-xlg:pt-[10rem] max-smd:pt-[13rem]"
          : "pt-[4rem]"
      }   overflow-x-hidden`}
    >
      {children}
    </main>
  );
};

export default MainContainer;
