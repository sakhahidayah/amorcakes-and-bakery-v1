import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Amorcakes and Bakery | Freshly Baked Artisan Pastries & Cakes",
  description:
    "Discover handcrafted breads, pastries, and custom cakes from Amorcakes and Bakery.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Amorcakes and Bakery | Freshly Baked Artisan Pastries & Cakes",
    description:
      "Discover handcrafted breads, pastries, and custom cakes from Amorcakes and Bakery.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
