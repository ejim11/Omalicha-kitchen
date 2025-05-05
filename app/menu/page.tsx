import MenuComp from "@/components/Menu/MenuComp";
import { Suspense } from "react";

export default function Menu() {
  return (
    <Suspense>
      <MenuComp />
    </Suspense>
  );
}
