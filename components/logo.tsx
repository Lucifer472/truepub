"use client";
import { Roboto } from "next/font/google";
import { useHeightState, useNavbarState, useSectionChangeState } from "@/state";
import Link from "next/link";
import { usePathname } from "next/navigation";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500"],
});

const Logo = () => {
  const setHeight = useHeightState((state) => state.setHeight);
  const setCurrent = useSectionChangeState(
    (state) => state.setCurrentSectionIdx
  );

  const pathname = usePathname();

  const handleReset = () => {
    setHeight(0);
    setCurrent("#home");
  };

  const isOpen = useNavbarState((state) => state.open);
  const isBlack = window.innerWidth < 1024 && pathname !== "/";

  return (
    <Link href={"/"} onClick={handleReset}>
      {isOpen ? (
        <h1
          className={`text-2xl sm:text-3xl md:text-4xl font-bold ${roboto.className}`}
        >
          TRUEPUB MEDIA
        </h1>
      ) : (
        <h1
          className={`text-2xl sm:text-3xl md:text-4xl font-bold ${
            isBlack ? "text-black" : "text-white"
          } ${roboto.className}`}
        >
          TRUEPUB MEDIA
        </h1>
      )}
    </Link>
  );
};

export default Logo;
