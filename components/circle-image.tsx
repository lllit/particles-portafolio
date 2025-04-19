"use client";
import Image from "next/image";

export const CircleImage = () => {
  return (
    <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
      <Image
        src="/locura.jpeg"
        width={200}
        height={200}
        alt="circle"
        className="w-full h-full rounded-tl-[7rem]"
      ></Image>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </div>
  );
};
