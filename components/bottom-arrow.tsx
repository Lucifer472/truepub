"use client";
import { BsArrowDown } from "react-icons/bs";
import { useRouter } from "next/navigation";

import { getHashFromUrl } from "@/lib/utils";
import { navigationLinks } from "@/constant";
import { useHeightState } from "@/state";

const BottomArrow = () => {
  const router = useRouter();
  const setHeight = useHeightState((state) => state.setPlusHeight);

  const handleDownArrow = () => {
    const hash = getHashFromUrl(window.location.href);
    const screenHeight = window.innerHeight;
    const currentIndex = navigationLinks.findIndex(
      (item) => item.link === hash
    );
    if (hash !== navigationLinks[navigationLinks.length - 1].link) {
      router.push(`${navigationLinks[currentIndex + 1].link}`);
      setHeight(screenHeight);
    }
  };

  return (
    <div className="h-12 absolute -translate-x-1/2  bottom-0 left-1/2 z-30 hidden md:flex items-center justify-center">
      <button
        onClick={handleDownArrow}
        className="bg-btn-color border-none cursor-pointer w-12 h-12 flex items-center justify-center"
      >
        <BsArrowDown className="font-semibold text-2xl" />
      </button>
    </div>
  );
};

export default BottomArrow;
