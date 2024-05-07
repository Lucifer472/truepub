"use client";

import { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import RightArrow from "@/components/right-arrow";
import LeftArrow from "@/components/left-arrow";

import { useHeightState } from "@/state";
import View1 from "@/components/views/teamwork/view-1";
import View2 from "@/components/views/teamwork/view-2";
import View3 from "@/components/views/teamwork/view-3";

export const TeamWorkView = () => {
  const [view, setView] = useState<1 | 2 | 3>(1);
  const height = useHeightState((state) => state.height);
  const innerWidth = window.innerWidth;

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
          setView((prev) => (prev !== 3 ? prev + 1 : 3));
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
    <div className="w-full h-full bg-background-blue relative">
      <RightArrow setView={setView} isVisible={view !== 3} />
      <div
        className="overflow-hidden w-[300%] h-full transition-all duration-700 relative flex"
        style={{ transform: `translateX(-${view * 33.3333 - 33.3333}%)` }}
      >
        <View1 />
        <View2 />
        <View3 />
      </div>
      <div
        className="absolute bottom-6 xl:top-[35%] right-[5%] transition-all duration-700"
        style={{
          opacity: `${view === 3 && innerWidth > 1279 ? "0" : "100%"}`,
        }}
      >
        <div className="hidden xl:flex flex-col items-center justify-center">
          <div className="flex flex-col items-end justify-end gap-y-0 w-full">
            <h2 className="text-[5rem] leading-[1em] font-extralight">.04</h2>
            <span className="text-yellow-400 leading-[1em] font-extralight text-[2rem]">
              TEAM WORK
            </span>
            <div className="h-[2px] w-[200px] mt-4 flex">
              <span
                className="bg-yellow-500 h-[2px] transition-all duration-500"
                style={{ width: `${(view - 1) * 50}%` }}
              ></span>
              <span
                className="bg-white h-[2px] transition-all duration-500"
                style={{ width: `${(3 - view) * 50}%` }}
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
              EXPERTS TEAM
            </p>
            <p
              className={`hover:font-semibold cursor-pointer ${
                view === 3 && "text-gray-500"
              }`}
              onClick={() => setView(3)}
            >
              CELEBRATING SUCCESS
            </p>
          </div>
        </div>
        <div className="flex xl:hidden items-center justify-center gap-x-2">
          <span>{view}/3</span>
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
            disabled={view === 3}
            // @ts-ignore
            onClick={() => setView((prev) => prev + 1)}
          >
            <BsArrowRight
              className={`${view !== 3 ? "text-white" : "text-gray-700"}`}
            />
          </button>
        </div>
      </div>
      <LeftArrow setView={setView} isVisible={view !== 1} />
    </div>
  );
};
