"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { itemsNavbar } from "@/data";
import { MotionTransition } from "./transition-component";

export const Navbar = () => {
  const router = usePathname();

  return (
    <MotionTransition
      position="right"
      className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10"
    >
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 backdrop-blur-sm">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`relative group px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-woodsmoke-800 
                ${router === item.link && "bg-secondary"}`}
            >
              <Link href={item.link}>{item.icon}</Link>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden px-2 py-1 text-sm text-white bg-woodsmoke-950 rounded-md shadow-md group-hover:block">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};
