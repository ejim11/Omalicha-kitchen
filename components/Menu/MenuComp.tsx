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
      dish: searchParams.get("dish") || undefined,
    }),
    [searchParams]
  );

  const allDishItems: DishItem[] = menu
    .map((item: MenuItem) => item.items)
    .flat()
    .map(
      (dhItem: { title: string; text: string; dishItems: DishItem[] }) =>
        dhItem.dishItems
    )
    .flat()
    .filter((dishItem: DishItem) => {
      if (!searchParamsObject.dish) {
        return dishItem;
      }

      return dishItem.name.toLowerCase().includes(searchParamsObject.dish);
    });

  const menuItem: MenuItem[] =
    searchParamsObject.filter === "all" ||
    searchParamsObject.filter === undefined
      ? [
          {
            filter: "all",
            items: [
              {
                title: "All Dishes",
                text: "",
                dishItems: allDishItems,
              },
            ],
          },
        ]
      : menu.filter(
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
              {item.dishItems.length > 0 ? (
                <DishesList
                  filter={searchParamsObject.filter}
                  dishItems={item.dishItems}
                />
              ) : (
                <p>No Dishes Found!</p>
              )}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default MenuComp;
