import MenuNav from "@/components/Menu/MenuNav";
import SuspenseWrapper from "@/components/SuspenseWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omalicha Kitchen | Menu",
  description:
    "Enjoy your meals, order or book reservations to have the best meals in town",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SuspenseWrapper>
        <MenuNav>{children}</MenuNav>
      </SuspenseWrapper>
    </div>
  );
}
