"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

import { getHashFromUrl } from "@/lib/utils";
import { navigationLinks } from "@/constant";
import {
  useHeightState,
  useOpeningChangeState,
  useSectionChangeState,
} from "@/state";

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [height, setHeight, setMinusHeight] = useHeightState((state) => [
    state.height,
    state.setPlusHeight,
    state.setMinusHeight,
  ]);
  const setIndex = useSectionChangeState((state) => state.setCurrentSectionIdx);
  const isJob = useOpeningChangeState((state) => state.opening);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const handleScroll = (e: any) => {
      e.preventDefault();
      if (isJob === 0) {
        const hash = getHashFromUrl(window.location.href);
        const currentIndex = navigationLinks.findIndex(
          (item) => item.link === hash
        );
        const screenHeight = window.innerHeight;

        if (timeoutId === null) {
          const scrollDirection = e.deltaY > 0 ? "down" : "up";
          if (scrollDirection === "down") {
            if (hash !== navigationLinks[navigationLinks.length - 1].link) {
              router.push(`${navigationLinks[currentIndex + 1].link}`);
              setIndex(`${navigationLinks[currentIndex + 1].link}`);
              setHeight(screenHeight);
            }
          } else {
            if (hash !== navigationLinks[0].link) {
              router.push(`${navigationLinks[currentIndex - 1].link}`);
              setIndex(`${navigationLinks[currentIndex - 1].link}`);
              setMinusHeight(screenHeight);
            }
          }
          timeoutId = setTimeout(() => {
            timeoutId = null;
          }, 700);
        }
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [router, setHeight, setMinusHeight, isJob, setIndex]);

  useEffect(() => {
    let startY: number | null = null;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (startY === null) return;
      if (isJob === 0) {
        const endY = e.changedTouches[0].clientY;
        const swipeDistance = startY - endY;
        const hash = getHashFromUrl(window.location.href);
        const currentIndex = navigationLinks.findIndex(
          (item) => item.link === hash
        );
        const screenHeight = window.innerHeight;

        // Check if the swipe distance is significant
        if (Math.abs(swipeDistance) > 50) {
          // Adjust this threshold as needed
          if (swipeDistance > 0) {
            // Swipe up
            if (hash !== navigationLinks[navigationLinks.length - 1].link) {
              setIndex(`${navigationLinks[currentIndex + 1].link}`);
              router.push(`${navigationLinks[currentIndex + 1].link}`);
              setHeight(screenHeight);
            }
          } else {
            // Swipe down
            if (hash !== navigationLinks[0].link) {
              router.push(`${navigationLinks[currentIndex - 1].link}`);
              setIndex(`${navigationLinks[currentIndex - 1].link}`);
              setMinusHeight(screenHeight);
            }
          }
        }
      }

      startY = null;
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [router, setHeight, setMinusHeight, isJob, setIndex]);

  useEffect(() => {
    const hash = getHashFromUrl(window.location.href);
    setIndex(hash);
    const mainHeight =
      navigationLinks.findIndex((item) => item.link === hash) *
      window.innerHeight;

    setHeight(mainHeight);
  }, [setHeight, setIndex]);

  return (
    <div
      className="relative touch-none h-full duration-700"
      style={{ transform: `translateY(-${height}px)` }}
    >
      {children}
    </div>
  );
};

export default dynamic(() => Promise.resolve(MainWrapper), { ssr: false });
