import ImageSlider from "@/components/image-slider";
import { imgs } from "@/constant";

const View3 = () => {
  return (
    <div className="w-full h-full flex flex-col-reverse lg:grid lg:grid-cols-3">
      <div className="col-span-1 w-full h-full flex flex-col items-end justify-end">
        <div className="flex flex-col px-8 pt-8 lg:pt-0 lg:pl-32 items-center lg:items-start justify-center gap-y-6 w-full pb-32">
          <h2 className="text-[2rem] lg:text-[2.8rem] text-center lg:text-left font-extralight">
            Great Place to Work!
          </h2>
          <p className="text-center lg:text-left">
            Work hard, play hard! We do this in an inspirational environment
            where we can work and relax.
          </p>
          <p className="text-center lg:text-left">
            Be sure to read the experiences of our colleagues Hardik,Shubh and
            Shardha.
          </p>
        </div>
      </div>
      <div className="col-span-2 w-full h-full overflow-hidden">
        <ImageSlider imgs={imgs} />
      </div>
    </div>
  );
};

export default View3;
