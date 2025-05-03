import { mamaSpecials } from "./mamaSpecials";
import { MenuItem } from "./menu";
import { omaSpecials } from "./omaSpecials";

export const specials: MenuItem = {
  filter: "specials",
  items: [omaSpecials, mamaSpecials],
};
