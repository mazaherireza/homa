import { type ReactNode } from "react";

import type { Metadata } from "next";

import localFont from "next/font/local";

import HeaderComponent from "@/components/header/header.component";
import FooterComponent from "@/components/footer/footer.component";

import "./globals.css";
import "@/styles/typography.css";

const vazirmatn = localFont({
  src: "./fonts/Vazirmatn.woff2",
  display: "swap",
  weight: "100 900",
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
        <FooterComponent />
      </body>
    </html>
  );
}
