const View1 = () => {
  return (
    <div className="bg-[url('/images/aurora.png')] w-full h-full bg-center bg-no-repeat bg-cover relative">
      <div className="flex flex-col justify-end pb-12 pl-4 sm:pb-16 sm:pl-16 lg:pl-0 lg:pb-0 lg:grid lg:grid-cols-2 lg:mt-36 xl:mt-0 xl:grid-cols-3 gap-x-32 w-full px-4 h-full relative">
        <div className="col-span-1 w-full lg:h-full flex flex-col items-start justify-end lg:pl-48 lg:pb-48">
          <h3 className="text-[1.8rem] sm:text-[3rem] md:text-[4rem] font-extralight text-left leading-[1em]">
            PARTNERS & BRANDS
          </h3>
          <h2 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-extralight text-center leading-[1em]">
            .05
          </h2>
        </div>
        <div className="col-span-1 w-full lg:h-full flex flex-col items-start justify-end lg:pb-32">
          <p className="text-justify sm:w-[400px] text-sm sm:text-base font-extralight">
            We are a global player and one of the best Digital Marketer and Web
            Development Solution out there.
          </p>
        </div>
        <div className="col-span-1"></div>
        <div className="absolute top-40 right-96 w-[500px] h-[500px] hidden lg:block">
          <svg viewBox="0 0 1000 1000" className="stroke-1 stroke-white w-full">
            <use href="/svg/prisma-complex.svg#two"></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default View1;
