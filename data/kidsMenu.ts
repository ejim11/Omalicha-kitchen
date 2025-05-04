import { MenuItem } from "./menu";
import jollofRiceChicken from "../assets/menu/kids-menu/Jollof Rice & Chicken .png";
import beans from "../assets/menu/kids-menu/Beans.png";

export const kidsMenu: MenuItem = {
  filter: "Kid’s Menu",
  items: [
    {
      title: "Kid’s Menu",
      text: "(Your choice of: Pounded yam, Oat, or Garri)",
      dishItems: [
        {
          name: "Jollof Rice & Chicken",
          description:
            "Smoky Jollof rice served with juicy, well- seasoned chicken - a crowd- pleasing favorite every time.",
          price: 6.99,
          image: jollofRiceChicken,
        },
        {
          name: "Beans",
          description:
            "Slow- cooked Nigerian-style beans, rich in flavor and perfectly spiced for a hearty, satisfying meal.",
          price: 6.99,
          image: beans,
        },
      ],
    },
  ],
};
