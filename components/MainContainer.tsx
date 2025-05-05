"use client";
import appContext from "@/store/appContext";
import React, { FC, ReactNode, useContext } from "react";

const MainContainer: FC<{ children: ReactNode }> = ({ children }) => {
  const { isHeaderSticky } = useContext(appContext);

  return (
    <main
      className={`px-[9rem] ${
        isHeaderSticky ? "pt-[8rem]" : "pt-[4rem]"
      }   overflow-x-hidden`}
    >
      {children}
    </main>
  );
};

export default MainContainer;
