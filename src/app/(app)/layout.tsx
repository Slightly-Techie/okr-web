import Navbar from "@/components/navigation/Navbar";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

function layout({ children }: LayoutProps) {
  return (
    <main>
      <Navbar>{children}</Navbar>
    </main>
  );
}

export default layout;
