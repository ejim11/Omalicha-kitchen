import React, { FC, ReactNode } from "react";

const MainContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="px-[9rem] pt-[4rem]  overflow-x-hidden">{children}</main>
  );
};

export default MainContainer;
