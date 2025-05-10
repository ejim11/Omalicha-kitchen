import { StaticImageData } from "next/image";

export type TestimonialType = {
  customerName: string;
  customerImage: StaticImageData;
  text: string;
  stars: number;
  address: string;
};
