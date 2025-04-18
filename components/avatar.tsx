import Image from "next/image";
import { MotionTransition } from "./transition-component";

export const Avatar = () => {
  return (
    <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">
      <Image src="/_me.jpg" width={200} height={200} alt="Avatar" className="w-full h-full"></Image>
    </MotionTransition>
  );
};
