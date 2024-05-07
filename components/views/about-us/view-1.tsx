const View1 = () => {
  return (
    <div className="bg-[url('/images/earth.jpg')] w-full h-full bg-center bg-no-repeat bg-cover">
      <div className="flex flex-col justify-end pb-12 pl-8 sm:pb-16 sm:pl-16 lg:pl-0 lg:pb-0 lg:grid lg:grid-cols-2 lg:mt-36 xl:mt-0 xl:grid-cols-3 gap-x-32 w-full px-4 h-full relative">
        <div className="col-span-1 w-full lg:h-full flex flex-col items-start justify-end lg:pl-48 lg:pb-48">
          <h3 className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-extralight text-center leading-[1em]">
            about us
          </h3>
          <h2 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-extralight text-center leading-[1em]">
            .02
          </h2>
        </div>
        <div className="col-span-1 w-full lg:h-full flex flex-col items-start justify-end lg:pb-32">
          <p className="text-justify sm:w-[400px] text-sm sm:text-base font-extralight">
            Software Engineering is at the heart of everything we do. We harness
            the power of engineering to create a better world. We are a Digital
            Enterprise navigating brands towards the future and helping them
            accelerate their Digital Transformation journey. With our Consulting
            prowess, On-Ground presence in 15 countries and Domain Knowledge
            acquired over Two Decades, we create Unique Digital Solutions to
            optimize Customer’s Business Models resulting in Better Performance
            and Greater Customer Delight.
          </p>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default View1;
