import { MenuItem } from "./menu";
import jollofRiceAssortedMeatImg from "../assets/menu/rice-dishes/jollof-rice -&-assorted-meat.png";
import jollofRiceBeef from "../assets/menu/rice-dishes/Jollof Rice & Beef.png";
import jollofRiceHen from "../assets/menu/rice-dishes/Jollof Rice & Hen.png";
import jollofRiceChicken from "../assets/menu/rice-dishes/Jollof Rice & Chicken.png";
import jollofRiceGoatMeat from "../assets/menu/rice-dishes/Jollof  Rice & Goat Meat.png";
import jollofRiceFriedFish from "../assets/menu/rice-dishes/Jollof Rice & Fried Fish.png";
import whiteRiceDesignerStew from "../assets/menu/rice-dishes/White Rice & Designer Stew.png";
import whiteRiceAsstMeatStew from "../assets/menu/rice-dishes/White Rice & Asst. Meat Stew.png";
import whiteRiceBeefStew from "../assets/menu/rice-dishes/White Rice & Beef Stew.png";
import whiteRiceHenStew from "../assets/menu/rice-dishes/White Rice  & Hen Stew.png";
import whiteRiceChickenStew from "../assets/menu/rice-dishes/White  Rice & Chicken Stew.png";
import whiteRiceGoatMeatStew from "../assets/menu/rice-dishes/White  Rice & Goat Meat Stew.png";

export const riceDishes: MenuItem = {
  filter: "Rice Dishes",
  items: [
    {
      title: "Rice Dishes",
      text: "Add Plantain, Beans or Spinach for $5.00",
      dishItems: [
        {
          name: "Jollof Rice & Assorted Meat",
          description:
            "Smoky, vibrant Jollof rice served with tender, well-seasoned assorted meats",
          price: 20,
          image: jollofRiceAssortedMeatImg,
        },
        {
          name: "Jollof Rice & Beef",
          description:
            "Bold, spicy Jollof rice paired with juicy, slow-cooked beef.",
          price: 20,
          image: jollofRiceBeef,
        },
        {
          name: "Jollof Rice & Hen",
          description:
            "Party-style jollof rice served with flavorful, tender hen - rich",
          price: 20,
          image: jollofRiceHen,
        },
        {
          name: "Jollof Rice & Chicken",
          description:
            "Smoky Jollof rice served with juicy, well- seasoned chicken - a crowd- pleasing favorite every time.",
          price: 20,
          image: jollofRiceChicken,
        },
        {
          name: "Jollof  Rice & Goat Meat",
          description:
            "Rich, spicy Jollof rice paired with tender, peppered goat meat",
          price: 20,
          image: jollofRiceGoatMeat,
        },
        {
          name: "Jollof Rice & Fried Fish",
          description:
            "Rice cooked in a flavored tomato stew (Choice of Tilapia or Catfish)",
          price: 20,
          image: jollofRiceFriedFish,
        },
        {
          name: "White Rice & Designer Stew",
          description:
            "A spicy stew made from green peppers (Meat Options: Assorted Meat, Beef, Chicken, or Goat Meat)",
          price: 25,
          image: whiteRiceDesignerStew,
        },
        {
          name: "White Rice & Asst. Meat Stew",
          description:
            "Steamed white rice served with hearty , spicy tomato stew loaded with tender assorted meats",
          price: 20,
          image: whiteRiceAsstMeatStew,
        },
        {
          name: "White Rice & Beef Stew",
          description:
            "Soft white rice paired with tender beef simmered in a flavorful, spiced tomato stew.",
          price: 20,
          image: whiteRiceBeefStew,
        },
        {
          name: "White Rice  & Hen Stew",
          description:
            "Party-style White rice served with flavorful, tender hen - rich",
          price: 20,
          image: whiteRiceHenStew,
        },
        {
          name: "White  Rice & Chicken Stew",
          description:
            "White rice served with juicy, well- seasoned chicken - a crowd- pleasing favorite every time.",
          price: 20,
          image: whiteRiceChickenStew,
        },
        {
          name: "White  Rice & Goat Meat Stew",
          description:
            "Rice cooked in a flavoured tomato stew (Meat Option: Goat Meat)",
          price: 20,
          image: whiteRiceGoatMeatStew,
        },
      ],
    },
  ],
};
