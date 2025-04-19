"use client"
import Image from "next/image";
import { MotionTransition } from "./transition-component";

export const AvatarPortfolio = () => {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 left-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/avatar-services.jpg"
        alt="avatar services"
        width={200}
        height={200}
        className="w-full h-full rounded-tr-full"
      ></Image>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
    </MotionTransition>
  );
};
