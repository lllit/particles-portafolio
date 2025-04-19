"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Spline from "@splinetool/react-spline";

export const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid place-items-center items-center h-full p-4 py-20 md:py-0 md:grid-cols-2 ">
        <Image
          alt="Profile pic"
          src="/_me.jpg"
          priority
          width={200}
          height={200}
          className="rounded-full p-0 mt-0 w-45 sm:w-45 md:w-64"
        ></Image>

        

        <div className="flex flex-col justify-center max-w-md place-self-center md:pb-0 pb-10">
          <h1 className="mb-5 text-2xl leading-tight md:text-left">
            LLLIT,
            <TypeAnimation
              sequence={[
                " Musica",
                1000,
                " Desarrollo",
                1000,
                " Visuales",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block font-bold text-secondary"
            ></TypeAnimation>
          </h1>

          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8 md:pb-0 pb-5">
            Como creador de musica, visuales y desarrolador de software
          </p>

          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <Link
              href="/portfolio"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/10"
            >
              Ver proyectos
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 transition-all border-2 text-secondary border-secondary cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/20"
            >
              Contacta conmigo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
