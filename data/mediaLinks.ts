import { StaticImageData } from "next/image";
import twitterImg from "../assets/twitter-logo.svg";
import facebookImg from "../assets/facebook-logo.svg";
import instaImg from "../assets/insta-logo.svg";

export type MediaLink = {
  image: StaticImageData;
  link: string;
};

export const mediaLinks: MediaLink[] = [
  {
    image: twitterImg,
    link: "https://www.x.com",
  },
  {
    image: facebookImg,
    link: "https://www.facebook.com",
  },
  {
    image: instaImg,
    link: "https://www.instagram.com",
  },
];
