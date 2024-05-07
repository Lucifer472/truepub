const View1 = () => {
  return (
    <div className="bg-[url('/images/teamwork.png')] w-full h-full bg-center bg-no-repeat bg-cover">
      <div className="flex flex-col justify-end pb-12 pl-8 sm:pb-16 sm:pl-16 lg:pl-0 lg:pb-0 lg:grid lg:grid-cols-2 lg:mt-36 xl:mt-0 xl:grid-cols-3 gap-x-32 w-full px-4 h-full relative">
        <div className="col-span-1 w-full lg:h-full flex flex-col items-start justify-end lg:pl-48 lg:pb-48">
          <h3 className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-extralight text-center leading-[1em]">
            Teamwork
          </h3>
          <h2 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-extralight text-center leading-[1em]">
            .04
          </h2>
        </div>
        <div className="col-span-1 w-full lg:h-full flex flex-col items-start justify-end lg:pb-32">
          <p className="text-justify sm:w-[400px] text-sm sm:text-base font-extralight">
            We like to do things our way. We try, dare and persevere. We are not
            afraid to stick our necks out. We may sometimes take two steps
            forward and one step back, but we always stay true to our identity.
            Nothing is standard for us; everything we do is made to measure.
            Although success motivates us to keep going, it is our focus and
            energy that ultimately allow us to excel. Together - in our own
            magical way.
          </p>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default View1;
