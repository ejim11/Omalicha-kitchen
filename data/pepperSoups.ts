import { MenuItem } from "./menu";
import goatMeatPepperSoup from "../assets/menu/pepper-soups/Goat Meat Pepper Soup .png";
import goatMeatPepperSoupL from "../assets/menu/pepper-soups/Goat Meat Pepper Soup (L).png";
import tilapiaPepperSoup from "../assets/menu/pepper-soups/Tilapia Pepper Soup.png";
import catfishPepperSoup from "../assets/menu/pepper-soups/Catfish Pepper Soup.png";
import assortedMeatPeppersoup from "../assets/menu/pepper-soups/Assorted Meat Peppersoup .png";
import assortedMeatPeppersoupL from "../assets/menu/pepper-soups/Assorted Meat Peppersoup (L).png";

export const pepperSoups: MenuItem = {
  filter: "Pepper Soups",
  items: [
    {
      title: "Pepper Soups",
      text: "Add White Rice $5.00",
      dishItems: [
        {
          name: "Goat Meat Pepper Soup",
          description:
            "Hearty  broth soup made with goat meat chunks, pepper soup spice, and other nourishing condiments.",
          price: 25,
          image: goatMeatPepperSoup,
        },
        {
          name: "Goat Meat Pepper Soup (L)",
          description:
            "Hearty  broth soup made with goat meat chunks, pepper soup spice, and other nourishing condiments.",
          price: 30,
          image: goatMeatPepperSoupL,
        },
        {
          name: "Tilapia Pepper Soup",
          description:
            "Hearty  broth soup made with Tilapia, pepper soup spice, and other nourishing condiments.",
          price: 25,
          image: tilapiaPepperSoup,
        },
        {
          name: "Catfish Pepper Soup",
          description:
            "Hearty  broth soup made with Catfish, pepper soup spice, and other nourishing condiments.",
          price: 25,
          image: catfishPepperSoup,
        },
        {
          name: "Assorted Meat Peppersoup",
          description:
            "Hearty  broth soup made with Chicken, beef and goat meat spice, and other condiments.",
          price: 25,
          image: assortedMeatPeppersoup,
        },
        {
          name: "Assorted Meat Peppersoup (L)",
          description:
            "Hearty  broth soup made with Chicken, beef and goat meat spice, and other condiments.",
          price: 30,
          image: assortedMeatPeppersoupL,
        },
      ],
    },
  ],
};
