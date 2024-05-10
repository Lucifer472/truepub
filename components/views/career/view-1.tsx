const View1 = () => {
  return (
    <div className="bg-[url('/images/career.png')] w-full h-full bg-center bg-no-repeat bg-cover">
      <div className="flex flex-col justify-end pb-12 pl-4 sm:pb-16 sm:pl-16 lg:pl-0 lg:pb-0 lg:grid lg:grid-cols-2 lg:mt-36 xl:mt-0 xl:grid-cols-3 gap-x-32 w-full px-4 h-full relative">
        <div className="col-span-1 w-full lg:h-full flex flex-col items-start justify-end lg:pl-48 lg:pb-48">
          <h3 className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-extralight text-left leading-[1em]">
            Career
          </h3>
          <h2 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-extralight text-center leading-[1em]">
            .06
          </h2>
        </div>
        <div className="col-span-1 w-full lg:h-full flex flex-col items-start justify-end lg:pb-32">
          <p className="text-justify sm:w-[400px] text-sm sm:text-base font-extralight">
            We are the invisible power behind valuable connections. We cherish
            what works well and experiment to find ways to do things even
            better. We strive towards faster, better and more powerful and are
            always looking for ways to generate even more impact. We learn by
            doing. New talent contributes to this by bringing in fresh
            perspectives, novel ideas and the latest knowledge. Can you
            contribute to our success? Apply to one of our vacancies and join
            our team!
          </p>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default View1;
