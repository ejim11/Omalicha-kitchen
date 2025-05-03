import { DishItem } from "@/types/dishItem";
import { traditionalSoups } from "./traditionalSoups";

export type MenuItem = {
  title: string;
  text: string;
  dishItems: DishItem[];
};

export const menu: MenuItem[] = [traditionalSoups];
