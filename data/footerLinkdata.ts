export type FooterLinkData = {
  title: string;
  texts?: string[];
  links?: { text: string; link: string }[];
};

export const footerLinksData: FooterLinkData[] = [
  {
    title: "Contact Us",
    texts: [
      `123 Restaurant  Avenue, United Kingdom`,
      "Phone: +314 547 345",
      "Email : @omalichakitchen.com",
    ],
  },
  {
    title: "Opening Hour",
    texts: [`Monday - Friday: 10am - 10pm`, "Saturday - Sunday: 11am - 11pm"],
  },
  {
    title: "Quick links",
    links: [
      {
        text: "menu",
        link: "/menu",
      },
      {
        text: "reservations",
        link: "/reservations",
      },
      {
        text: "catering",
        link: "/catering",
      },
      {
        text: "privacy policy",
        link: "privacy-policy",
      },
      {
        text: "Terms of Service",
        link: "/terms",
      },
    ],
  },
];
