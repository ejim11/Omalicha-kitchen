import React, { FC, ReactNode, Suspense } from "react";

const SuspenseWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <Suspense>{children}</Suspense>;
};

export default SuspenseWrapper;
