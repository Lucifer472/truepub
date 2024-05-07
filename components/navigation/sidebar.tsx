"use client";

import Link from "next/link";
import { footerLinks } from "@/constant";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-full h-full flex justify-end items-center p-8">
      <div className="flex flex-col items-end justify-center gap-y-4">
        {footerLinks.map((f) => {
          const active = pathname === f.link;

          return (
            <Link
              href={f.link}
              key={f.label}
              className={`text-right hover:font-normal ${
                active ? "font-normal" : "font-extralight"
              }`}
            >
              {f.label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
