import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Provider } from "@/lib/Providers";

const font = Manrope({ subsets: ["latin"], fallback: ["Segoe UI"] });

export const metadata: Metadata = {
  title: "Slightly Techie - OKR",
  description:
    "Objective and Key Results: Boosts performance through goal setting and measurable outcomes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
