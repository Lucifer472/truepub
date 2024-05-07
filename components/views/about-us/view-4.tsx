import Image from "next/image";
import { companyHistory } from "@/constant";

const View4 = () => {
  return (
    <div className="w-full h-full md:grid md:grid-cols-2">
      <div className="col-span-1 w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-y-8 sm:gap-y-12 mt-24 sm:mt-32">
          {companyHistory.map((h, index) => (
            <div
              key={index}
              className="flex items-start justify-start gap-x-6 text-base xx:text-xl lg:text-2xl px-4 w-full"
            >
              <span className="text-yellow-400">{h.year}</span>
              <span className="">{h.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1 w-full h-full lg:px-6 hidden md:block">
        <Image
          src="/images/history.png"
          alt="History"
          width={650}
          height={650}
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

export default View4;
