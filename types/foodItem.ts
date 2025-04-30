import { StaticImageData } from "next/image";

export type FoodItem = {
  name: string;
  description: string;
  price: number;
  image: StaticImageData;
  category?: string;
};
