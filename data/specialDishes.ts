import { DishItem } from "@/types/dishItem";
import riceDishesImg from "../assets/home/rice-dishes.png";
import pepperSoupImg from "../assets/home/pepper-soup.png";
import traditionalSoupImg from "../assets/home/traditional-soup.png";
import omaSpecialImg from "../assets/home/oma-special.png";

export const specialDishes: DishItem[] = [
  {
    name: "rice dishes",
    description:
      "Variaties of tasty and flavorful rice dishes with your choice of protein.",
    price: 23,
    image: riceDishesImg,
  },
  {
    name: "pepper soup",
    description: "Spicy pepper soup with meat, assorted, or chicken.",
    price: 28,
    image: pepperSoupImg,
  },
  {
    name: "traditional soup",
    description: "Delicious varieties of rich, mouthwatering African soups.",
    price: 23,
    image: traditionalSoupImg,
  },
  {
    name: "oma special",
    description:
      "Our signature dish—a rich, savory Omalicha Special prepared with love and a unique blend of spices.",
    price: 18,
    image: omaSpecialImg,
  },
];
