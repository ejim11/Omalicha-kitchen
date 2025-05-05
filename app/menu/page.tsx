"use client";
import MenuComp from "@/components/Menu/MenuComp";
import SuspenseWrapper from "@/components/SuspenseWrapper";

export default function Menu() {
  return (
    <SuspenseWrapper>
      <MenuComp />
    </SuspenseWrapper>
  );
}
