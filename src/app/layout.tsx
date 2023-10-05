import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "@/lib/Providers";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], fallback: ["Segoe UI"] });

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
      <body className={inter.className}>
        <Provider>
          <div className="flex gap-4">
            <Link href={"/api/auth/signout"}>sign out</Link>
            <Link href={"/okr"}>OKRs</Link>
          </div>

          {children}
        </Provider>
      </body>
    </html>
  );
}
