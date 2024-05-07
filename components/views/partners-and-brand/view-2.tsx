const View2 = () => {
  return (
    <div className="w-full lg:h-full lg:grid lg:grid-cols-2">
      <div className="col-span-1 w-full h-full bg-[url('/images/aurora.png')] bg-right bg-no-repeat bg-cover hidden lg:block"></div>
      <div className="col-span-1 w-full lg:h-full flex-col flex items-start gap-y-4 justify-center mt-32 lg:mt-0">
        <h2 className="md:max-w-[750px] mx-8 sm:mx-16 md:ml-32 md:mr-32 xl:mr-80 text-left text-xl sm:text-3xl">
          PARTNERS
        </h2>
        <p className="md:max-w-[750px] mx-8 sm:mx-16 md:ml-32 md:mr-32 xl:mr-80 text-justify text-sm xs:text-base sm:text-lg md:text-xl font-light">
          we are proud to collaborate with industry giants such as Google and
          Facebook to deliver unparalleled results for our clients. As certified
          partners of Google and Facebook, we have access to cutting-edge tools,
          resources, and insights that enable us to stay at the forefront of
          digital innovation. Leveraging our strategic partnerships, we harness
          the full potential of these platforms to amplify your online presence,
          drive targeted traffic, and achieve measurable success.
        </p>
        <h2 className="md:max-w-[750px] mx-8 sm:mx-16 md:ml-32 md:mr-32 xl:mr-80 text-left text-xl sm:text-3xl">
          MEDIA BUYING
        </h2>
        <p className="md:max-w-[750px] mx-8 sm:mx-16 md:ml-32 md:mr-32 xl:mr-80 text-justify text-sm xs:text-base sm:text-lg md:text-xl font-light">
          We work together with specialized international media buying partners
          in both Search and Display networks. The resulting data insights and
          buying expertise optimally complement our own buying knowledge and
          search engine technology. This allows us to further expand our market
          position.
        </p>
      </div>
    </div>
  );
};

export default View2;
