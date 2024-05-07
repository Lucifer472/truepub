"use client";

import { useEffect, useState } from "react";

const ImageSlider = ({ imgs }: { imgs: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev < imgs.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, [imgs.length]);

  return (
    <div className="w-full overflow-hidden h-full relative">
      <div
        className="w-full h-full flex transition-all duration-700"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {imgs.map((i, index) => (
          <div
            key={index}
            className="w-full h-full bg-no-repeat bg-center flex-shrink-0 basis-full"
            style={{
              backgroundImage: `url(${i})`,
            }}
          ></div>
        ))}
      </div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 bottom-6 left-1/2 w-full">
        <div className="flex items-center justify-center gap-x-4 w-full">
          {imgs.map((_i, number) => (
            <button
              key={number}
              onClick={() => setIndex(number)}
              className="w-4 h-4 flex items-center justify-center"
            >
              <span
                className={`rounded-full bg-white block cursor-pointer z-50 relative hover:w-4 hover:h-4 transition-all duration-300 ${
                  number === index ? "w-4 h-4" : "w-2 h-2"
                }`}
              ></span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
