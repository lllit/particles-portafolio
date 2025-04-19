import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
  };
}

export const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { title, image, urlGithub, urlDemo } = data;
  return (
    <div className="p-4  border-opacity-50 bg-woodsmoke-900/60 backdrop-blur-md rounded-xl">
      <h3 className="mb-4 text-xl">{title}</h3>
      <Image
        src={image}
        alt="image product"
        width={300}
        height={300}
        className="w-full md:w-[200px] rounded-2xl h-auto"
      ></Image>
      <div className="flex gap-5 mt-5">
        <Link
          href={urlGithub}
          target="_blank"
          className="p-2 px-3 transition duration-150 rounded-lg bg-woodsmoke-800 hover:bg-woodsmoke-500"
        >
          Github
        </Link>
        <Link
          href={urlDemo}
          target="_blank"
          className="p-2 px-3 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
        >
          Demo
        </Link>
      </div>
    </div>
  );
};
