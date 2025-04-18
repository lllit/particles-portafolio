import { AvatarServices } from "@/components/avatar-services";
import { CircleImage } from "@/components/circle-image";
import { SliderServices } from "@/components/slider-services";
import { TransitionPage } from "@/components/transition-page";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage></TransitionPage>
      <CircleImage></CircleImage>
      <AvatarServices></AvatarServices>
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
        <div className="max-w-[450px] mt-40 px-7 md:mt-0">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5 md:px-20">
            Mis <span className="font-bold text-secondary">servicios.</span>
          </h1>
          <p className="mb-3 text-xl text-woodsmoke-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
            autem in? Consequuntur optio cumque dolore aliquid, vel earum modi
            saepe obcaecati sapiente omnis, ea dicta veniam sed excepturi a
            magni!
          </p>
          <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/10">Contacta conmigo</button>
        </div>


        <div>
          <SliderServices></SliderServices>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
