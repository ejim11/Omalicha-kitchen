import { DishItem } from "@/types/dishItem";
import chickenWings5pcs from "../assets/menu/specials/oma-specials/Chicken Wings (5pcs).png";
import garnishedAssortedMeat from "../assets/menu/specials/oma-specials/Garnished Assorted  Meat.png";
import garnishedTilapiaWithPlantain from "../assets/menu/specials/oma-specials/Garnished Tilapia (With Plantain).png";
import garnishedTilapiaWithRiceSpinach from "../assets/menu/specials/oma-specials/Garnished Tilapia (With Rice Spinach).png";
import garnishedStockfish from "../assets/menu/specials/oma-specials/Garnished Stockfish.png";
import garnishedHalfChicken from "../assets/menu/specials/oma-specials/Garnished Half Chicken.png";
import garnishedNkwobi from "../assets/menu/specials/oma-specials/Garnished Nkwobi.png";
import garnishedCatfish from "../assets/menu/specials/oma-specials/Garnished Catfish.png";
import garnishedGoatMeat from "../assets/menu/specials/oma-specials/Garnished Goat Meat.png";
import garnishedKponmo from "../assets/menu/specials/oma-specials/Garnished Kponmo.png";
import friedYamStew from "../assets/menu/specials/oma-specials/Fried Yam & Stew.png";
import friedYamwithEggSauce from "../assets/menu/specials/oma-specials/Fried Yam with Egg Sauce.png";
import friedYamwithFriedFish from "../assets/menu/specials/oma-specials/Fried Yam with Fried Fish.png";
import friedYamwithGoatMeat from "../assets/menu/specials/oma-specials/Fried Yam with Goat Meat.png";
import friedYamwithWholeFish from "../assets/menu/specials/oma-specials/Fried Yam with Whole Fish.png";

export const omaSpecials: {
  title: string;
  text: string;
  dishItems: DishItem[];
} = {
  title: "Oma’s Specials",
  text: "Add Plantain, beans, spinach or rice for 5$",
  dishItems: [
    {
      name: "Chicken Wings (5pcs)",
      description:
        "Crispy, juicy chicken wings seasoned to perfection- the perfection- licking snack or side.",
      price: 6.9,
      image: chickenWings5pcs,
    },
    {
      name: "Garnished Assorted  Meat",
      description:
        "A flavorful medley of assorted meats, perfectly garnished with fresh herbs and spices.",
      price: 25,
      image: garnishedAssortedMeat,
    },
    {
      name: "Garnished Tilapia (With Plantain)",
      description:
        "Grilled Tilapia, beautifully garnished and paired with sweet, golden plantain.",
      price: 25,
      image: garnishedTilapiaWithPlantain,
    },
    {
      name: "Garnished Tilapia (With Rice Spinach)",
      description:
        "Succulent, garnished Tilapia served with fluffy rice and nutrient-packed spinach.",
      price: 30,
      image: garnishedTilapiaWithRiceSpinach,
    },
    {
      name: "Garnished Stockfish",
      description:
        "Tender, perfectly garnished stockfish, infused with rich spices.",
      price: 10,
      image: garnishedStockfish,
    },
    {
      name: "Garnished Half Chicken",
      description:
        "Juicy, well-seasoned half chicken, garnished with vibrant peppers and onion.",
      price: 25,
      image: garnishedHalfChicken,
    },
    {
      name: "Garnished Nkwobi",
      description:
        "Soft, spicy cow foot delicacy, richly garnished with palm oil sauce, onions and utazi.",
      price: 25,
      image: garnishedNkwobi,
    },
    {
      name: "Garnished Catfish",
      description:
        "Tender, spicy catfish grilled or sauced to perfection, and beautifully garnished for a rich, flavorful experience.",
      price: 25,
      image: garnishedCatfish,
    },
    {
      name: "Garnished Goat Meat",
      description:
        "Peppered and perfectly seasoned goat meat, richly garnished.",
      price: 25,
      image: garnishedGoatMeat,
    },
    {
      name: "Garnished Kponmo",
      description:
        "Soft, spicy cow skin (Kponmo) richly garnished with peppers and onions.",
      price: 25,
      image: garnishedKponmo,
    },
    {
      name: "Fried Yam & Stew",
      description:
        "Crispy golden yam sliced served with ric, spicy tomato stew - a classic and comforting Nigeria combo.",
      price: 9.99,
      image: friedYamStew,
    },
    {
      name: "Fried Yam with Egg Sauce",
      description:
        "Crispy fried yam paired with savory, fluffy egg sauce - a deliciously satisfying anytime meal.",
      price: 14,
      image: friedYamwithEggSauce,
    },
    {
      name: "Fried Yam with Fried Fish",
      description:
        "Golden fried yam served  with crispy, well seasoned fried - a hearty flavorful street - style favorite.",
      price: 14,
      image: friedYamwithFriedFish,
    },
    {
      name: "Fried Yam with Goat Meat",
      description:
        "Golden fried yam paired with richly spiced, peppered goat meat - the ultimate combo of crunch and flavor.",
      price: 17.99,
      image: friedYamwithGoatMeat,
    },
    {
      name: "Fried Yam with Whole Fish",
      description:
        "Crispy fried yam served with a well-seasoned whole fried fish.",
      price: 25,
      image: friedYamwithWholeFish,
    },
  ],
};
