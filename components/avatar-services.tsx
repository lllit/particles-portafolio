import Image from "next/image";
import { MotionTransition } from "./transition-component";

export const AvatarServices = () => {
  return (
    <MotionTransition
      position="right"
      className="bottom-0 left-0 hidden md:inline-block md:absolute "
    >
      <Image
        src="/sevices.jpg"
        alt="services image"
        height={300}
        width={300}
        className="w-[350px] h-full rounded-tr-3xl"
      ></Image>
    </MotionTransition>
  );
};
