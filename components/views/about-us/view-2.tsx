const View2 = () => {
  return (
    <div className="w-full h-full grid grid-cols-3">
      <div className="col-span-1 w-full h-full bg-[url('/images/earth.jpg')] bg-right bg-no-repeat bg-cover"></div>
      <div className="col-span-2 w-full h-full flex items-center justify-center">
        <p className="md:max-w-[750px] mx-8 sm:mx-16 md:ml-32 md:mr-32 xl:mr-80  text-justify text-[1rem] md:text-[1.5rem] lg:text-[2rem] font-extralight">
          We are always searching. Searching for new possibilities and
          opportunities, searching for ways to improve results, searching for
          even more effective solutions. Where others stick to the beaten path,
          we choose the road less traveled by. If that road does not exist yet,
          we will simple chart our own course.
        </p>
      </div>
    </div>
  );
};

export default View2;
