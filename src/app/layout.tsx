import { type ReactNode } from "react";

import HeaderComponent from "@/components/header/header.component";

import type { Metadata } from "next";

import { Vazirmatn } from "next/font/google";

import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Homa Rousta",
  description: "An Iranian Actress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
