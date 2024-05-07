const View2 = () => {
  return (
    <div className="w-full lg:h-full lg:grid lg:grid-cols-2">
      <div className="col-span-1 w-full h-full bg-[url('/images/teamwork-2.png')] bg-right bg-no-repeat bg-cover hidden lg:block"></div>
      <div className="col-span-1 w-full lg:h-full flex-col flex items-start gap-y-4 justify-center mt-32 lg:mt-0">
        <h2 className="md:max-w-[750px] mx-8 sm:mx-16 md:ml-32 md:mr-32 xl:mr-80 text-left text-xl sm:text-3xl">
          EXPERT TEAMS
        </h2>
        <p className="md:max-w-[750px] mx-8 sm:mx-16 md:ml-32 md:mr-32 xl:mr-80 text-justify text-sm xs:text-base sm:text-lg md:text-xl font-light">
          Every day, more than two hundred million pages are accessed, with
          billions of logs. We develop and manage all those high-traffic sites
          with exceptional care and in a tailor-made manner that conforms to our
          high quality standard. No two websites are ever exactly the same. It
          is essential that everything works well, down to the smallest details.
          <br />
          <br />
          Our expert teams work together closely to come up with the best
          solutions. For example, our development experts work on the responsive
          acquisition platform and search engine technology that we developed in
          house. Our IT operations experts work on our high-end IT
          infrastructure and security platform. Our traffic & acquisition team
          uses various bidding strategies to achieve the best results. This is
          Champions League-level performance with Media spend in excess of €1
          million per day.
        </p>
      </div>
    </div>
  );
};

export default View2;
