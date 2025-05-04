import { DishItem } from "@/types/dishItem";
import { traditionalSoups } from "./traditionalSoups";
import { riceDishes } from "./riceDishes";
import { pepperSoups } from "./pepperSoups";
import { specials } from "./specials";
import { kidsMenu } from "./kidsMenu";

export type MenuItem = {
  filter: string;
  items: { title: string; text: string; dishItems: DishItem[] }[];
};

export const menu: MenuItem[] = [
  traditionalSoups,
  riceDishes,
  pepperSoups,
  specials,
  kidsMenu,
];
