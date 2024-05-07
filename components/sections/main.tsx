import BasicWrapper from "@/components/wrappers/basic-wrapper";

const MainSection = () => {
  return (
    <BasicWrapper isDown>
      <div className="bg-[url('/images/home.png')] w-full  h-full bg-center bg-no-repeat overflow-hidden relative bg-cover">
        <div className="inset-0 vignette opacity-50 w-full h-full absolute"></div>
        <div className="lg:grid grid-cols-2 gap-2 h-full container relative z-20 px-4 2xl:px-0">
          <div className="lg:col-span-1 w-full h-full flex flex-col items-start justify-end lg:justify-center pb-6 lg:pb-0 gap-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin">
              magic inside
            </h1>
            <p className="sm:text-lg md:text-xl font-light">
              The invisible power behind valuable connections.
            </p>
          </div>
          <div className="hidden lg:col-span-1"></div>
        </div>
      </div>
    </BasicWrapper>
  );
};
export default MainSection;
