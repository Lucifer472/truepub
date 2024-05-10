import ImageSlider from "@/components/image-slider";
import { teamImgs } from "@/constant";

const View3 = () => {
  return (
    <div className="w-full h-full flex flex-col-reverse lg:grid lg:grid-cols-3">
      <div className="col-span-1 w-full h-full flex flex-col items-end justify-end">
        <div className="flex flex-col px-8 pt-8 lg:pt-0 lg:pl-32 items-center lg:items-start justify-center gap-y-6 w-full pb-32">
          <h2 className="text-[2rem] lg:text-[2.8rem] text-center lg:text-left font-extralight">
            CELEBRATING SUCCESS!
          </h2>
          <p className="text-justify lg:text-left">
            We work hard, but also take the time to celebrate our successes.
            Staff parties, Visymo Snow Experience, team events or a delicious
            dinner: take a look at how we celebrate our moments of success.
            Check out the pictures!
          </p>
        </div>
      </div>
      <div className="col-span-2 w-full h-full overflow-hidden">
        <ImageSlider imgs={teamImgs} />
      </div>
    </div>
  );
};

export default View3;
