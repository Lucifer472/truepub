"use client";

import { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import RightArrow from "@/components/right-arrow";
import LeftArrow from "@/components/left-arrow";

import View1 from "@/components/views/about-us/view-1";
import View2 from "@/components/views/about-us/view-2";
import View3 from "@/components/views/about-us/view-3";
import View4 from "@/components/views/about-us/view-4";

import { useHeightState } from "@/state";

export const AboutUsView = () => {
  const [view, setView] = useState<1 | 2 | 3 | 4>(1);

  const innerWidth = window.innerWidth;

  const height = useHeightState((state) => state.height);

  useEffect(() => {
    setView(1);
  }, [height]);

  useEffect(() => {
    let startX: number | null = null;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (startX === null) return;

      const endX = e.changedTouches[0].clientX;
      const swipeDistance = startX - endX;

      if (Math.abs(swipeDistance) > 50) {
        if (swipeDistance < 0) {
          // @ts-ignore
          setView((prev) => (prev !== 1 ? prev - 1 : 1));
        } else {
          // @ts-ignore
          setView((prev) => (prev !== 4 ? prev + 1 : 4));
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="w-full h-full relative">
      <RightArrow setView={setView} isVisible={view !== 4} />
      <div
        className="overflow-hidden w-[400%] h-full transition-all duration-700 relative flex"
        style={{ transform: `translateX(-${view * 25 - 25}%)` }}
      >
        <View1 />
        <View2 />
        <View3 />
        <View4 />
      </div>
      <div
        className="absolute bottom-6 xl:top-[35%] right-[5%] transition-all duration-700"
        style={{
          opacity: `${view === 3 && innerWidth > 1279 ? "0" : "100%"}`,
        }}
      >
        <div className="hidden xl:flex flex-col items-center justify-center">
          <div className="flex flex-col items-end justify-end gap-y-0 w-full">
            <h2 className="text-[5rem] leading-[1em] font-extralight">.02</h2>
            <span className="text-yellow-400 leading-[1em] font-extralight text-[2rem]">
              About Us
            </span>
            <div className="h-[2px] w-[200px] mt-4 flex">
              <span
                className="bg-yellow-500 h-[2px] transition-all duration-500"
                style={{ width: `${(view - 1) * 33.33}%` }}
              ></span>
              <span
                className="bg-white h-[2px] transition-all duration-500"
                style={{ width: `${(4 - view) * 33.33}%` }}
              ></span>
            </div>
          </div>
          <div className="flex-col flex items-end justify-end gap-y-2 mt-8 w-full">
            <p
              className={`hover:font-semibold cursor-pointer ${
                view === 2 && "text-gray-500"
              }`}
              onClick={() => setView(2)}
            >
              OUR VALUES
            </p>
            <p
              className={`hover:font-semibold cursor-pointer ${
                view === 3 && "text-gray-500"
              }`}
              onClick={() => setView(3)}
            >
              GREAT PLACE TO WORK
            </p>
            <p
              className={`hover:font-semibold cursor-pointer ${
                view === 4 && "text-gray-500"
              }`}
              onClick={() => setView(4)}
            >
              HISTORY
            </p>
          </div>
        </div>
        <div className="flex xl:hidden items-center justify-center gap-x-2">
          <span>{view}/4</span>
          <button
            disabled={view === 1}
            // @ts-ignore
            onClick={() => setView((prev) => prev - 1)}
          >
            <BsArrowLeft
              className={`${view !== 1 ? "text-white" : "text-gray-700"}`}
            />
          </button>
          <button
            disabled={view === 4}
            // @ts-ignore
            onClick={() => setView((prev) => prev + 1)}
          >
            <BsArrowRight
              className={`${view !== 4 ? "text-white" : "text-gray-700"}`}
            />
          </button>
        </div>
      </div>
      <LeftArrow setView={setView} isVisible={view !== 1} />
    </div>
  );
};
