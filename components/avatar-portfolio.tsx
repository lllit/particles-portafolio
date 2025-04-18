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
        width={300}
        height={300}
        className="w-full h-full rounded-tr-full"
      ></Image>
    </MotionTransition>
  );
};
