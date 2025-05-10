import { TestimonialType } from "@/types/testimonial";
import customerImg from "../assets/home/testimonial-1.png";

export const testimonials: TestimonialType[] = [
  {
    customerName: "Adesewa Ekhigoho",
    customerImage: customerImg,
    text: "The Pepper Soup here is the real deal. It's spicy, flavorful, and just how a Pepper soup should taste. Came twice this week already.",
    stars: 4,
    address: "Houston, TX  Downtown ",
  },
  {
    customerName: "Chigioke Nelson",
    customerImage: customerImg,
    text: "Ordered the Oma Special for the first time, and wow. It's so rich, and the meat was well cooked sand tender. Definitely coming back.",
    stars: 5,
    address: "Houston, TX Brays Oaks ",
  },
  {
    customerName: "Ifeoma Ndukwe",
    customerImage: customerImg,
    text: "Their Fried Rice is my go-to comfort food. Perfectly seasoned, not too oily, it’s worth the cost.",
    stars: 4,
    address: "Houston, Meyerland",
  },
];
