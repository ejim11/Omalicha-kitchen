export type FooterLinkData = {
  title: string;
  texts?: string[];
  links?: { text: string; link: string }[];
};

export const footerLinksData: FooterLinkData[] = [
  {
    title: "Contact Us",
    texts: [`1701 Cypress Creek Pkwy. Unit D, Houston, TX 77090`],
    links: [
      {
        text: "Phone: (281) 781-7209",
        link: "tel:(281) 781-7209",
      },
      {
        text: "Email : support@omalichakitchen.com",
        link: "mailto:support@omalichakitchen.com",
      },
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
