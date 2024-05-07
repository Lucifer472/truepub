"use client";

import { navigationLinks } from "@/constant";
import { useHeightState, useNavbarState, useSectionChangeState } from "@/state";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";

export const NavLink = ({
  link,
  label,
  index,
}: {
  link: string;
  label: string;
  index: number;
}) => {
  const [setIsOpen] = useNavbarState((state) => [state.setIsOpen]);
  const [current, setCurrent] = useSectionChangeState((state) => [
    state.currentSectionIdx,
    state.setCurrentSectionIdx,
  ]);

  const [setHeight, setMinusHeight] = useHeightState((state) => [
    state.setPlusHeight,
    state.setMinusHeight,
  ]);

  const active = current === link;
  const screenHeight = window.innerHeight;

  const handleNavigate = () => {
    const currentIndex = navigationLinks.findIndex((l) => l.link === current);
    const navigateIndex = navigationLinks.findIndex((l) => l.link === link);

    console.log(screenHeight * (navigateIndex - currentIndex));

    if (currentIndex !== 0 && navigateIndex < currentIndex) {
      setMinusHeight(screenHeight * (currentIndex - navigateIndex));
    } else if (currentIndex !== navigationLinks.length - 1) {
      setHeight(screenHeight * (navigateIndex - currentIndex));
    }
  };

  return (
    <li className="flex items-center justify-start gap-x-4">
      <div className="w-0 md:w-28 lg:w-36 xl:w-48 2xl:w-80 px-4">
        {active && (
          <div className="w-0 md:w-28 lg:w-36 xl:w-48 2xl:w-80 h-[2px] bg-white"></div>
        )}
      </div>
      <Link
        href={`/${link}`}
        onClick={() => {
          handleNavigate();
          setCurrent(link);
          setIsOpen();
        }}
        className="space-x-2 text-2xl lg:text-4xl font-light"
      >
        <span>{`.0${index}`}</span>
        <span>{label}</span>
      </Link>
    </li>
  );
};

export const NavBtn = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useNavbarState((state) => [
    state.open,
    state.setIsOpen,
  ]);

  return (
    <button onClick={setIsOpen}>
      {isOpen ? (
        <MdClose
          className={`text-5xl ${pathname !== "/" && !isOpen && "text-black"}`}
        />
      ) : (
        <BiMenu
          className={`text-5xl ${pathname !== "/" && !isOpen && "text-black"}`}
        />
      )}
    </button>
  );
};
