import type { Metadata } from "next";
import { Inter, Poppins, Ojuju } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppContextProvider from "@/store/appContextProvider";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

const ojuju = Ojuju({
  variable: "--font-ojuju",
  display: "swap",
  subsets: ["latin"],
});

const switzer = localFont({
  src: "../public/fonts/Switzer_Complete/Fonts/TTF/Switzer-Variable.ttf",
  display: "swap",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Omalicha Kitchen",
  description:
    "Enjoy your meals, order or book reservations to have the best meals in town",
  metadataBase: new URL("https://nich-fashion.vercel.app/"),
  authors: [{ name: "Ejim Favour," }, { name: "Qrest Company" }],
  openGraph: {
    description:
      "Enjoy your meals, order or book reservations to have the best meals in town",
    type: "website",
    url: "https://nich-fashion.vercel.app/",
    images: [
      {
        url: "https://nich-fashion.s3.us-east-2.amazonaws.com/uploads/logo+(2).png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${ojuju.variable} ${switzer.variable} antialiased relative bg-[#F4F3E8]`}
      >
        <AppContextProvider>
          <Header />
          {children}
          <Footer />
          <ToastContainer />
        </AppContextProvider>
      </body>
    </html>
  );
}
