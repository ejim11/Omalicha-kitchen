import { StaticImageData } from "next/image";

export type DishItem = {
  name: string;
  description: string;
  price: number;
  image: StaticImageData;
  category?: string;
};
