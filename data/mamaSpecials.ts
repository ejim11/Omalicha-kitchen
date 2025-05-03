import { DishItem } from "@/types/dishItem";
import goatheadRice from "../assets/menu/specials/mama-specials/Goat head & Rice.png";
import ugbaNkwobi from "../assets/menu/specials/mama-specials/Ugba & Nkwobi.png";
import ugbaL from "../assets/menu/specials/mama-specials/Ugba  (L).png";
import yamPorridge from "../assets/menu/specials/mama-specials/Yam Porridge.png";
import nkwobi from "../assets/menu/specials/mama-specials/Nkwobi.png";
import nkwobiL from "../assets/menu/specials/mama-specials/Nkwobi (L).png";
import abachaWithFish from "../assets/menu/specials/mama-specials/Abacha With Fish.png";
import yamPorridgeWithSpinachMeat from "../assets/menu/specials/mama-specials/Yam Porridge (With Spinach & Meat).png";
import riceFreshTilapiaStewWithPlantain from "../assets/menu/specials/mama-specials/Rice & Fresh Tilapia Stew ( With Plantain).png";

export const mamaSpecials: {
  title: string;
  text: string;
  dishItems: DishItem[];
} = {
  title: "Mama Specials",
  text: "Add Plantain, beans, spinach or rice for 5$",
  dishItems: [
    {
      name: "Goat head & Rice",
      description:
        "A spicy delicacy made from goat head, simmered untill tender perfection",
      price: 25,
      image: goatheadRice,
    },
    {
      name: "Ugba & Nkwobi",
      description:
        "A savory, nutritious soup made with slightly bitter leaves simmered with dry fish, and meats.",
      price: 25,
      image: ugbaNkwobi,
    },
    {
      name: "Ugba  (L)",
      description:
        "Flavorful African salad, blended with spicy seasonings, onion s, and a touch of tradition in every bite.",
      price: 30,
      image: ugbaL,
    },
    {
      name: "Yam Porridge",
      description:
        "Hearty and delicious yam porridge, simmered in a flavorful blend of spicies, palm oil, and fresh ingredients.",
      price: 20,
      image: yamPorridge,
    },
    {
      name: "Nkwobi",
      description:
        "A soup made with spinach, collard greens and other greens mixture with goat meat, fish, palm oil, and African spices, simmered to perfection.",
      price: 20,
      image: nkwobi,
    },
    {
      name: "Nkwobi (L)",
      description:
        "A soup made with spinach, collard greens and other greens mixture with goat meat, fish, palm oil, and African spices, simmered to perfection.",
      price: 30,
      image: nkwobiL,
    },
    {
      name: "Abacha With Fish",
      description:
        "Tasty African salad mde from shredded casava, mixed with spicy palm oil dressing and served with perfectly seasoned fish.",
      price: 30,
      image: abachaWithFish,
    },
    {
      name: "Yam Porridge (With Spinach & Meat)",
      description:
        "Rich and hearty yam porridge cooked with tender meat and fresh spinach.",
      price: 30,
      image: yamPorridgeWithSpinachMeat,
    },
    {
      name: "Rice & Fresh Tilapia Stew ( With Plantain)",
      description:
        "Fluffy rice paired with richly spiced tilapia stew and golden fried plantain.",
      price: 30,
      image: riceFreshTilapiaStewWithPlantain,
    },
  ],
};
