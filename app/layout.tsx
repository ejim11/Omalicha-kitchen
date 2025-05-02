import type { Metadata } from "next";
import { Inter, Poppins, Ojuju } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
