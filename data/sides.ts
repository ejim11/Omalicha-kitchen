import { MenuItem } from "./menu";
import plantain from "../assets/menu/sides/Plantain.png";
import beans from "../assets/menu/sides/Beans.png";
import spinach from "../assets/menu/sides/Spinach.png";
import extraMeat from "../assets/menu/sides/Extra Meat.png";
import whiteRice from "../assets/menu/sides/White Rice.png";
import extraEbaPoundedYam from "../assets/menu/sides/Extra Eba: Pounded Yam .png";
import moiMoi from "../assets/menu/sides/Moi Moi.png";

export const sides: MenuItem = {
  filter: "Sides",
  items: [
    {
      title: "Sides",
      text: "(Your choice of: Pounded yam, Oat, or Garri)",
      dishItems: [
        {
          name: "Plantain",
          description:
            "Golden, sweet, and perfectly fried - deliciously crispy side you ‘ll always crave.",
          price: 10,
          image: plantain,
        },
        {
          name: "Beans",
          description:
            "Slow- cooked Nigerian-style beans, rich in flavor and perfectly spiced for a hearty, satisfying meal.",
          price: 10,
          image: beans,
        },
        {
          name: "Spinach",
          description:
            "Lightly sauteed and seasoned spinach - wholesome, hearty, and full of flavor.",
          price: 10,
          image: spinach,
        },
        {
          name: "Extra Meat",
          description:
            "Add an extra serving of tender, juicy meat - the perfect upgrade to any meal.",
          price: 10,
          image: extraMeat,
        },
        {
          name: "White Rice",
          description:
            "Fluffy, perfectly steamed white rice - the ideal base for any flavorful dish.",
          price: 5,
          image: whiteRice,
        },
        {
          name: "Extra Eba/ Pounded Yam",
          description:
            "Add an extra serving of soft, stretchy Eba or Pounded Yam - the perfect complement to your favorite soup.",
          price: 3,
          image: extraEbaPoundedYam,
        },
        {
          name: "Moi Moi",
          description:
            "Steamed to perfection, this savory bean pudding is packed with flavor.",
          price: 2.5,
          image: moiMoi,
        },
      ],
    },
  ],
};
