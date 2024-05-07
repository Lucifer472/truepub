"use client";
import { BsArrowUp } from "react-icons/bs";
import { useRouter } from "next/navigation";

import { getHashFromUrl } from "@/lib/utils";
import { navigationLinks } from "@/constant";
import { useHeightState } from "@/state";

const UpArrow = () => {
  const router = useRouter();
  const setHeight = useHeightState((state) => state.setMinusHeight);

  const handleUpArrow = () => {
    const hash = getHashFromUrl(window.location.href);
    const screenHeight = window.innerHeight;
    const currentIndex = navigationLinks.findIndex(
      (item) => item.link === hash
    );

    console.log(hash !== navigationLinks[0].link);
    if (hash !== navigationLinks[0].link) {
      router.push(`${navigationLinks[currentIndex - 1].link}`);
      setHeight(screenHeight);
    }
  };

  return (
    <div className="h-12 absolute top-0 -translate-x-1/2 left-1/2 z-[99999] hidden md:flex items-center justify-center">
      <button
        onClick={handleUpArrow}
        className="bg-btn-color border-none cursor-pointer w-12 h-12 flex items-center justify-center"
      >
        <BsArrowUp className="font-semibold text-2xl" />
      </button>
    </div>
  );
};

export default UpArrow;
