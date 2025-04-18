"use client"
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
    </div>
  );
};
