"use client";
import { menu, MenuItem } from "@/data/menu";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import DishesList from "./DishesList";
import { DishItem } from "@/types/dishItem";

const MenuComp = () => {
  const searchParams = useSearchParams();

  // Convert searchParams to an object if needed
  const searchParamsObject = useMemo(
    () => ({
      filter: searchParams.get("filter") || undefined,
    }),
    [searchParams]
  );

  const menuItem: MenuItem[] = menu.filter(
    (item: MenuItem) =>
      item.filter.toLowerCase().split(" ").join("-") ===
      searchParamsObject.filter
  );

  return (
    <section className="mt-[4rem] relative z-50">
      <div>
        {menuItem[0].items.map(
          (item: { title: string; text: string; dishItems: DishItem[] }) => (
            <div key={item.title} className="font-switzer mb-[4rem] last:mb-0">
              <p className="font-medium text-[2.4rem] text-primary-1 mb-[0.8rem]">
                {item.title}
              </p>
              <p className="text-[1.8rem] text-[#797B78]">{item.text}</p>
              <DishesList dishItems={item.dishItems} />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default MenuComp;
