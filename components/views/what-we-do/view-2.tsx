const View2 = () => {
  return (
    <div className="w-full h-full relative">
      <div className="flex flex-col-reverse justify-end pt-32 pb-12 pl-4 sm:pb-16 sm:pl-16 lg:pt-0 lg:pl-0 lg:pb-0 lg:grid lg:grid-cols-3 lg:mt-36 xl:mt-0 gap-x-32 w-full px-4 h-full relative">
        <div className="col-span-1 w-full lg:h-full flex flex-col gap-y-4 items-start justify-end lg:pl-32 lg:pb-32">
          <h2 className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] font-extralight text-center leading-[1em]">
            Building Technology
          </h2>
          <p className="text-justify sm:w-[400px] text-sm sm:text-base">
            innovation is at the core of what we do. Our Building Technology
            section harnesses the power of the latest advancements, including
            Next.js, Node.js, React, WordPress, and Flutter, to craft dynamic
            and immersive applications. Whether it&apos;s creating seamless user
            experiences with React or building robust backend systems with
            Node.js, we leverage cutting-edge technologies to bring your ideas
            to life. With our expertise, your digital solutions will not only
            meet but exceed the demands of today&apos;s ever-evolving tech
            landscape
          </p>
        </div>
        <div className="col-span-2 relative pl-0 lg:pl-32  2xl:pl-0 lg:pt-32 2xl:pr-64">
          <svg
            viewBox="0 0 1000 1000"
            className="stroke-white stroke-2 h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[650px] w-[250px] sm:w-[350px] md:w-[400px] lg:w-[500px] xl:w-[650px]"
          >
            <use href="/svg/prisma-complex.svg#three"></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default View2;
