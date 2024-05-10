"use client";

import ClientWrappers from "@/components/wrappers/client-wrapper";
import Logo from "@/components/logo";

import { NavBtn } from "@/components/navigation/nav-links";
import { usePathname } from "next/navigation";
import { useHeightState, useNavbarState, useSectionChangeState } from "@/state";
import { useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();

  const isOpen = useNavbarState((state) => state.open);

  const setHeight = useHeightState((state) => state.setHeight);
  const setIndex = useSectionChangeState((state) => state.setCurrentSectionIdx);

  useEffect(() => {
    setHeight(0);
    setIndex("#home");

    return () => {
      setHeight(0);
      setIndex("#home");
    };
  }, [pathname, setHeight, setIndex]);

  if (pathname === "/") {
    return (
      <header
        className={`fixed top-4 md:top-12 left-0 z-50 w-full h-16 flex items-center justify-center px-4 2xl:px-0 `}
      >
        <ClientWrappers>
          <div className="container h-16 flex items-center justify-between">
            <Logo />
            <NavBtn />
          </div>
        </ClientWrappers>
      </header>
    );
  } else {
    return (
      <header
        className={`fixed py-4 lg:py-0 top-0 lg:top-12 left-0 z-50 w-full h-16 flex items-center justify-center px-4 2xl:px-0 ${
          isOpen ? "bg-transparent" : "bg-white lg:bg-transparent"
        }`}
      >
        <ClientWrappers>
          <div className="container h-16 flex items-center justify-between">
            <Logo />
            <NavBtn />
          </div>
        </ClientWrappers>
      </header>
    );
  }
};

export default Navbar;
