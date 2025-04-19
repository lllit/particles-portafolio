import { AvatarPortfolio } from "@/components/avatar-portfolio";
import { CircleImage } from "@/components/circle-image";
import { ContainerPage } from "@/components/container";
import { PortfolioBox } from "@/components/portfolio-box";
import { TransitionPage } from "@/components/transition-page";
import { dataPortfolio } from "@/data";

const PortfolioPage = () => {
  return (
    <ContainerPage>
      <TransitionPage></TransitionPage>
      <AvatarPortfolio></AvatarPortfolio>
      <CircleImage></CircleImage>

      <div className="flex flex-col justify-center h-full md:py-20">
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-10 mt-0">
          Mis ultimos trabajos{" "}
          <span className="text-secondary font-bold">realizados</span>
        </h1>
        <div className="relative z-10 grid max-w-5xl gap-6 mx-auto m-0 mt-10 sm:grid-cols-2 md:grid-cols-4 px-0">
          {dataPortfolio.map((data) => (
            <PortfolioBox key={data.id} data={data} >
            </PortfolioBox>
          ))}
        </div>
      </div>
    </ContainerPage>
  );
};

export default PortfolioPage;
