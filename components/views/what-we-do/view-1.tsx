const View1 = () => {
  return (
    <div className="w-full h-full relative">
      <div className="flex flex-col justify-end pb-12 pl-8 sm:pb-16 sm:pl-16 lg:pl-0 lg:pb-0 lg:grid lg:grid-cols-2 lg:mt-36 xl:mt-0 xl:grid-cols-3 gap-x-32 w-full px-4 h-full relative">
        <div className="col-span-1 w-full lg:h-full flex flex-col items-start justify-end lg:pl-48 lg:pb-48">
          <h3 className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] font-extralight text-center leading-[1em]">
            What We Do
          </h3>
          <h2 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-extralight text-center leading-[1em]">
            .03
          </h2>
        </div>
        <div className="col-span-1 w-full flex flex-col items-start justify-center lg:pt-32 xl:pt-0 xl:justify-end xl:pb-32">
          <p className="text-justify sm:w-[400px] text-sm sm:text-base font-extralight">
            At Truepub Media Solution, we specialize in comprehensive web
            development services tailored to your needs. From crafting
            cutting-edge applications to optimizing search engine ads, we offer
            a range of solutions to elevate your online presence. Our team
            combines expertise with innovation to deliver results that exceed
            expectations. Let us empower your digital journey and unlock the
            full potential of your business.
          </p>
        </div>
        <div className="hidden lg:block lg:absolute lg:top-[10%] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 xl:translate-x-0 xl:translate-y-0 xl:top-0 xl:left-0 xl:col-span-1 xl:static xl:pr-64">
          <svg
            viewBox="0 0 1000 1000"
            className="max-h-[20vh] xl:max-h-[40vh] stroke-white stroke-2 w-full"
          >
            <use href="/svg/prisms.svg#top-right"></use>
          </svg>
          <svg
            viewBox="0 0 1000 1000"
            className="max-h-[40vh] stroke-white stroke-2 w-full"
          >
            <use href="/svg/prisms.svg#bottom-left"></use>
          </svg>
        </div>
      </div>
      <div className="absolute top-32 left-64 max-w-40">
        <svg
          viewBox="0 0 1000 1000"
          className="max-h-[40vh] stroke-primary-2 stroke-[4] w-full"
        >
          <use href="/svg/prisms.svg#bottom-right"></use>
        </svg>
      </div>
    </div>
  );
};

export default View1;
