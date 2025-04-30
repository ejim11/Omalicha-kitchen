import { DishItem } from "@/types/dishItem";
import riceDishesImg from "../assets/home/rice-dishes.png";
import pepperSoupImg from "../assets/home/pepper-soup.png";
import traditionalSoupImg from "../assets/home/traditional-soup.png";
import omaSpecialImg from "../assets/home/oma-special.png";

export const specialDishes: DishItem[] = [
  {
    name: "rice dishes",
    description:
      "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor",
    price: 12,
    image: riceDishesImg,
  },
  {
    name: "pepper soup",
    description:
      "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor",
    price: 12,
    image: pepperSoupImg,
  },
  {
    name: "traditional soup",
    description:
      "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor",
    price: 12,
    image: traditionalSoupImg,
  },
  {
    name: "oma special",
    description:
      "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor",
    price: 12,
    image: omaSpecialImg,
  },
];
