import { DishItem } from "@/types/dishItem";
import orderDishImg1 from "../assets/home/order-dish-1.png";
import orderDishImg2 from "../assets/home/order-dish-2.png";
import orderDishImg3 from "../assets/home/order-dish-3.png";

export const orderDishes: DishItem[] = [
  {
    name: "White Rice & Stew",
    description:
      "A rich spices tomato based Nigeria Stew (Meat Option: Assorted Meat, Beef,  Chicken, or Goat Meat)",
    price: 12.5,
    image: orderDishImg1,
  },
  {
    name: "Jollof Rice & Fish",
    description:
      "A rich, spiced tomato based Nigeria Stew (Choice of Tilapia or Catfish)",
    price: 12.5,
    image: orderDishImg2,
  },
  {
    name: "Tilapia Pepper Soups",
    description: `A  spicy stew  made from green peppers 
(Meat Option: Assorted Meat, Beef,  Chicken, or Goat Meat)`,
    price: 12.5,
    image: orderDishImg3,
  },
];
