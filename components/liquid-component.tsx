import Spline from "@splinetool/react-spline";

export const LiquidComponent = () => {
  console.log("LiquidComponent ha sido renderizado");

  return (
    <>
      <Spline
        scene="https://prod.spline.design/uQUPoJyuXc4F7tEj/scene.splinecode"
        className="w-full h-[300px] md:h-[500px] lg:h-[700px]"
      />
    </>
  );
};
