import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navbar } from "@/components/navbar";
import { Header } from "@/components/header";
import { CoverParticles } from "@/components/cover-particles";
import Particles from "@tsparticles/react";
import { LiquidComponent } from "@/components/liquid-component";


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
        <LiquidComponent></LiquidComponent>
        <CoverParticles></CoverParticles>



        <Navbar></Navbar>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
