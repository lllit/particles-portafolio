import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "LLLIT | Main 🎨",
  description: "Music, Programing, Visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${urbanist.className}`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
