const View3 = () => {
  return (
    <div className="w-full lg:h-full lg:grid lg:grid-cols-2">
      <div className="col-span-1 w-full lg:h-full flex-col flex items-start gap-y-4 justify-center mt-32 lg:mt-0">
        <h2 className="md:max-w-[750px] mx-8 sm:mx-16 md:ml-32 md:mr-32 xl:mr-80 text-left text-3xl">
          OUR BRAND
        </h2>
        <p className="md:max-w-[750px] mx-8 sm:mx-16 md:ml-32 md:mr-32 xl:mr-80 text-justify text-xl font-light">
          We have more than eight brands all over the world. Here is an overview
          of some of these brands and their characteristics.
        </p>
        <h2 className="mx-8 sm:mx-16 md:ml-32 md:mr-32 xl:mr-80 text-left text-3xl">
          Facts and numbers
        </h2>
        <p className="mx-8 sm:mx-16 md:ml-32 md:mr-32 xl:mr-80 text-justify text-3xl font-light leading-none">
          77,688
          <span className="text-sm font-medium"> / Visitors per month</span>
        </p>
        <p className="mx-8 sm:mx-16 md:ml-32 md:mr-32 xl:mr-80 text-justify text-3xl font-light leading-none">
          25+
          <span className="text-sm font-medium"> / projects per year</span>
        </p>
        <p className="mx-8 sm:mx-16 md:ml-32 md:mr-32 xl:mr-80 text-justify text-3xl font-light leading-none">
          320+
          <span className="text-sm font-medium"> / Project Lifetime</span>
        </p>
      </div>
      <div className="col-span-1 w-full h-full bg-[url('/images/aurora.png')] bg-right bg-no-repeat bg-cover hidden lg:block"></div>
    </div>
  );
};

export default View3;
