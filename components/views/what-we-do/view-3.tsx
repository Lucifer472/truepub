import Image from "next/image";

const View2 = () => {
  return (
    <div className="w-full h-full relative">
      <div className="relative flex flex-col-reverse gap-y-8 px-8 md:px-0 items-center w-full lg:grid lg:grid-cols-2 xl:grid-cols-6">
        <div className="col-span-1 w-[90%] sm:w-[60%] lg:w-full xl:col-span-3 relative lg:pt-32 md:pl-4 xl:pl-64">
          <Image
            src={"/images/what-we-do.png"}
            alt="what we do"
            width={750}
            height={750}
          />
        </div>
        <div className="col-span-1 xl:col-span-2 w-full mt-32 flex items-center justify-start gap-y-4 flex-col">
          <h2 className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] font-extralight md:text-center leading-[1em] capitalize w-full">
            Providing Solution
          </h2>
          <p className="text-justify sm:w-[400px] text-sm sm:text-base">
            re dedicated to fueling your business growth through
            industry-standard SEO strategies and targeted advertising campaigns.
            With a keen understanding of the digital landscape, we optimize your
            online presence to ensure maximum visibility and reach. From
            implementing SEO best practices to leveraging the power of Facebook
            and Google ads, we drive targeted traffic to your platforms, helping
            you connect with your audience and achieve sustainable growth.
            Partner with us to unlock the full potential of your business in the
            digital realm
          </p>
        </div>
      </div>
    </div>
  );
};

export default View2;
