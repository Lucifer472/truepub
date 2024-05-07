import { CurrentOpening } from "./current-opening";

const View3 = () => {
  return (
    <div className="w-full h-full md:grid md:grid-cols-4">
      <div className="col-span-1 w-full h-full bg-[url('/images/career.png')] bg-right bg-no-repeat bg-cover hidden md:block"></div>
      <div className="col-span-3 relative flex-col w-full h-full flex gap-y-4 items-start justify-center max-w-[90%] mx-auto md:pr-72">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight">
          with you, we can be even better!
        </h2>
        <p className="text-xs xs:text-sm sm:text-base font-extralight">
          Are you eager to work in an environment where you are given
          responsibility within an appealing playing field and where the sky is
          the limit? Don{"'"}t wait and apply to one of our available vacancies.
          If the right vacancy for you is not listed below but you are
          interested in working for us, submit your open application to
          career@truepubmedia.com
        </p>
        <CurrentOpening />
      </div>
    </div>
  );
};

export default View3;
