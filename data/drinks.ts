import { MenuItem } from "./menu";
import bottledWater from "../assets/menu/drinks/Bottled Water.png";
import canSoda from "../assets/menu/drinks/Can Soda.png";
import orangeJuice from "../assets/menu/drinks/Orange Juice.png";
import malt from "../assets/menu/drinks/Malt.png";
import soboDrink from "../assets/menu/drinks/Sobo Drink.png";
import cramberryJuice from "../assets/menu/drinks/Cramberry Juice.png";
import youghurtDrink from "../assets/menu/drinks/Youghurt Drink.png";
import wine from "../assets/menu/drinks/Wine.png";

export const drinks: MenuItem = {
  filter: "Drinks",
  items: [
    {
      title: "Drinks",
      text: "",
      dishItems: [
        {
          name: "Bottled Water",
          description:
            "Refreshing, purified bottled water to keep you cool and hydrated.",
          price: 1,
          image: bottledWater,
        },
        {
          name: "Can Soda",
          description:
            "Chilled, fizzy refreshment in your favorite classic flavors-perfect for any meal.",
          price: 1.5,
          image: canSoda,
        },
        {
          name: "Orange Juice",
          description:
            "Fresh, fruity and packed with citrusy goodness - a refreshing burst of sunshine in every sip.",
          price: 3,
          image: orangeJuice,
        },
        {
          name: "Malt",
          description:
            "Smooth, rich, and energizing non-alcoholic malt drink- a classic Nigeria favorite.",
          price: 4,
          image: malt,
        },
        {
          name: "Sobo Drink",
          description:
            "Chilled hibiscus tea brewed with natural spiced - sweet, tangy,, and refreshing the local way.",
          price: 3,
          image: soboDrink,
        },
        {
          name: "Cramberry Juice",
          description:
            "Tart, sweet, and refreshingly bold - a juicy burst of flavor with every sip.",
          price: 3,
          image: cramberryJuice,
        },
        {
          name: "Youghurt Drink",
          description:
            "Creamy, smooth, and deliciously refreshing - the perfect blend of taste and nourishment.",
          price: 4,
          image: youghurtDrink,
        },
        {
          name: "Wine",
          description:
            "Elegant, smooth, and full-bodies - the perfect sip for moments worth savoring.",
          price: 20,
          image: wine,
        },
      ],
    },
  ],
};
