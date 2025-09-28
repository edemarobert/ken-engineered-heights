import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../modules/Footer";
import Navigation_Large_Screens from "../modules/Nav/Navigation_Large_Screens";
import Navigation from "../modules/Nav/Navigation";

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: "Ken Engineered Heights",
  description: "Ken Engineered Heights",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} } antialiased`}
      >
        <Navigation />
        <Navigation_Large_Screens />
        {children}
        <Footer />
      </body>
    </html>
  );
}
