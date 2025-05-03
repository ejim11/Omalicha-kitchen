import { MenuItem } from "./menu";
import okraSoupImg from "../assets/menu/traditional-soups/okra-soup.png";
import bitterLeafSoupImg from "../assets/menu/traditional-soups/bitter-leaf-soup.png";
import egusiSoupImg from "../assets/menu/traditional-soups/egusi-soup.png";
import ogbonoSoupImg from "../assets/menu/traditional-soups/ogbono-soup.png";
import vegetableSoupImg from "../assets/menu/traditional-soups/vegetable-soup.png";
import ohaSoupImg from "../assets/menu/traditional-soups/oha-soup.png";
import seaFoodOkraSoup from "../assets/menu/traditional-soups/seafood-okro-soup.png";
import seaFoodVegetableSoupImg from "../assets/menu/traditional-soups/seafood-vegetable-soup.png";

export const traditionalSoups: MenuItem = {
  filter: "Traditional Soups",
  items: [
    {
      title: "Traditional Soups",
      text: "(Your choice of: Pounded yam, Oat, or Garri)",
      dishItems: [
        {
          name: "Okra Soup",
          description:
            "Okra cooked in a delicious mixture of goat meat , fish, palm oil, and .African spices, simmered to perfection",
          price: 25,
          image: okraSoupImg,
        },
        {
          name: "Bitter leaf Soup",
          description:
            "A savory, nutritious soup made with slightly bitter leaves simmered with dry fish, and meats.",
          price: 20,
          image: bitterLeafSoupImg,
        },
        {
          name: "Egusi Soup",
          description:
            "A nutty, tasty soup that combines blended Egusi (melon seeds), pepper, leafy vegetables, and meat.",
          price: 20,
          image: egusiSoupImg,
        },
        {
          name: "Ogbono Soup",
          description:
            "A thick and hearty soup made with Ogbono seeds (wild mango seeds) loaded with meats and fish simmered in a delicious broth.",
          price: 20,
          image: ogbonoSoupImg,
        },
        {
          name: "Vegetable Soup",
          description:
            "A soup made with spinach, collard greens and other greens mixture with goat meat, fish, palm oil, and African spices, simmered to perfection.",
          price: 25,
          image: vegetableSoupImg,
        },
        {
          name: "Oha Soup",
          description:
            "A savory, nutritious soup made with oha leaves simmered with dry fish and meat",
          price: 25,
          image: ohaSoupImg,
        },
        {
          name: "Seafood Okro  Soup",
          description:
            "A hearty, flavor-packed blend of fresh okro and assorted seafood, simmered in rich, savory spices.",
          price: 30,
          image: seaFoodOkraSoup,
        },
        {
          name: "Seafood Vegetable Soup",
          description:
            "A hearty, flavor-packed blend of fresh Vegetable and assorted seafood, simmered in rich, savory spices.",
          price: 35,
          image: seaFoodVegetableSoupImg,
        },
      ],
    },
  ],
};
