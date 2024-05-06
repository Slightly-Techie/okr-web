import Navbar from "@/components/navigation/Navbar";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

function layout({ children }: LayoutProps) {
  return (
    <main className={inter.className}>
      <Navbar>{children}</Navbar>
    </main>
  );
}

export default layout;
