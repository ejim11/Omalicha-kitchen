import { DishItem } from "@/types/dishItem";
import { traditionalSoups } from "./traditionalSoups";
import { riceDishes } from "./riceDishes";
import { pepperSoups } from "./pepperSoups";

export type MenuItem = {
  title: string;
  text: string;
  dishItems: DishItem[];
};

export const menu: MenuItem[] = [traditionalSoups, riceDishes, pepperSoups];
