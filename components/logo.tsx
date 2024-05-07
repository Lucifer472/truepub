"use client";
import { useHeightState, useNavbarState, useSectionChangeState } from "@/state";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = ({ width, height }: { width?: number; height?: number }) => {
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

  const src =
    window.innerWidth < 1024 && pathname !== "/"
      ? "/logo-dark.png"
      : "/logo.png";

  return (
    <Link href={"/"} onClick={handleReset}>
      {isOpen ? (
        <Image
          src={"/logo.png"}
          alt="Logo"
          width={width ? width : 500}
          height={height ? height : 500}
        />
      ) : (
        <Image
          src={src}
          alt="Logo"
          width={width ? width : 500}
          height={height ? height : 500}
        />
      )}
    </Link>
  );
};

export default Logo;
