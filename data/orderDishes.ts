import { DishItem } from "@/types/dishItem";
import orderDishImg1 from "../assets/menu/rice-dishes/White Rice & Beef Stew.jpeg";
import orderDishImg2 from "../assets/menu/rice-dishes/Jollof Rice & Fried Fish.jpg";
import orderDishImg3 from "../assets/home/order-dish-3.png";

export const orderDishes: DishItem[] = [
  {
    name: "White Rice & Stew",
    description:
      "A rich spices tomato based Nigeria Stew (Meat Option: Assorted Meat, Beef,  Chicken, or Goat Meat)",
    price: 23,
    image: orderDishImg1,
  },
  {
    name: "Jollof Rice & Fish",
    description:
      "A rich, spiced tomato based Nigeria Stew (Choice of Tilapia or Catfish)",
    price: 23,
    image: orderDishImg2,
  },
  {
    name: "Tilapia Pepper Soups",
    description: `A  spicy stew  made from green peppers 
(Meat Option: Assorted Meat, Beef,  Chicken, or Goat Meat)`,
    price: 28,
    image: orderDishImg3,
  },
];
