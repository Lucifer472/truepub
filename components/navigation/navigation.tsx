"use client";
import Link from "next/link";
import { TiSocialLinkedin } from "react-icons/ti";
import { PiInstagramLogoBold } from "react-icons/pi";
import { IoLogoFacebook } from "react-icons/io";

import { useNavbarState } from "@/state";
import { footerLinks, navigationLinks } from "@/constant";

import { NavLink } from "@/components/navigation/nav-links";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, setOpen] = useNavbarState((state) => [
    state.open,
    state.setClose,
  ]);

  useEffect(() => {
    setOpen();
  }, [pathname, setOpen]);

  return (
    <section
      className={`w-full h-full section bg-gradient-to-r from-primary-1 to-primary-2 top-0 left-0 z-[40] ${
        isOpen ? "fixed" : "hidden"
      }`}
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-y-8 sm:gap-y-0 container">
        <div className="flex flex-col mt-24 sm:mt-36 lg:mt-46 items-start  lg:grid lg:grid-cols-2 w-full sm:h-full">
          <div className="col-span-1 flex items-start justify-center flex-col">
            <ul className="flex flex-col w-full gap-y-8">
              {navigationLinks.map((l, index) => (
                <NavLink
                  key={index}
                  link={l.link}
                  label={l.label}
                  index={index + 1}
                />
              ))}
            </ul>
          </div>
          <div className="col-span-1 lg:h-full w-full hidden sm:flex flex-col ml-12 md:ml-32 mt-6 lg:items-end justify-center">
            <div className="w-[320px] flex flex-col gap-y-4 mr-24">
              <p className="text-white font-light">
                © 2024 Truepub Media Solution Kudasan Gandhinagar Gujarat India.
              </p>
              <div className="flex items-center justify-start gap-x-2">
                <Link href={"/"}>
                  <TiSocialLinkedin className="text-white text-4xl" />
                </Link>
                <Link href={"/"}>
                  <PiInstagramLogoBold className="text-white text-4xl" />
                </Link>
                <Link href={"/"}>
                  <IoLogoFacebook className="text-white text-4xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full sm:items-center sm:justify-center ml-24 pb-12">
          <ul className="flex flex-col sm:flex-row items-center justify-center gap-y-2 gap-x-4">
            <li>
              <p>© 2024 Truepubmedia</p>
            </li>
            {footerLinks.map((f, index) => (
              <li key={index} className="text-left w-full sm:w-fit">
                <Link href={f.link} className="text-left sm:text-center">
                  {f.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
