import { benefits } from "@/constant";
import Image from "next/image";

const View2 = () => {
  return (
    <div className="w-full h-full md:grid md:grid-cols-4">
      <div className="col-span-1 w-full h-full bg-[url('/images/career.png')] bg-right bg-no-repeat bg-cover hidden md:block"></div>
      <div className="col-span-3 flex-col w-full h-full flex gap-y-4 items-start justify-center max-w-[90%] mx-auto md:pr-72">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight">
          our culture
        </h2>
        <p className="text-xs xs:text-sm sm:text-base font-extralight">
          Our team is curious, pragmatic and collegial. We take what we do very
          seriously; ourselves, however, not so much. We are a flat organisation
          and we check our egos at the door. That makes us fast and effective.
          <br />
          <br />
          You can read more about what we do, how we do it and how we celebrate
          our successes under Teamwork.
        </p>
        <div className="flex w-full flex-wrap items-center justify-between gap-y-8">
          {benefits.map((b) => (
            <div
              className="w-[30%] flex flex-col items-center md:items-start justify-start gap-y-2"
              key={b.label}
            >
              <Image
                src={`/svg/${b.img}`}
                alt={b.label}
                width={60}
                height={60}
              />
              <span className="text-center md:text-left">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default View2;
