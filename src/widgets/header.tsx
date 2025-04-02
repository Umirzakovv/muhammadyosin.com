"use client";

import { CirclePlus, CircleUserRound, House, Moon, Sun } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Tooltip } from "../shared/tooltip";
import { usePathname } from "next/navigation";
import Button from "../shared/button";

interface NavLink {
  id: number;
  href: string;
  toolTipText: string;
  icon: React.JSX.Element;
}

const navLinks: NavLink[] = [
  {
    id: 1,
    href: "/",
    toolTipText: "Home",
    icon: <House />,
  },
  {
    id: 2,
    href: "/about",
    toolTipText: "About",
    icon: <CircleUserRound />,
  },
];

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const currentPath = usePathname();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="flex justify-between items-center px-4 bg-white shadow-md rounded-xl w-[560px] h-16 fixed top-4 z-10">
      <nav>
        <ul className="flex items-center gap-4">
          {navLinks.map((item) => {
            return (
              <Tooltip key={item.id} text={item.toolTipText}>
                <li
                  className={`rounded-full p-2 ${
                    currentPath === item.href ? "bg-[#f7f7f7]" : "bg-white"
                  } `}
                >
                  <Link href={item.href}>
                    {React.cloneElement(item.icon, {
                      color: currentPath === item.href ? "#373737" : "#9b9b9b",
                    })}
                  </Link>
                </li>
              </Tooltip>
            );
          })}
        </ul>
      </nav>
      <div className="flex items-center gap-5">
        {isDarkMode ? (
          <Tooltip text="Dark Mode">
            <button className="cursor-pointer" onClick={toggleDarkMode}>
              <Moon color="#373737" />
            </button>
          </Tooltip>
        ) : (
          <Tooltip text="Light Mode">
            <button className="cursor-pointer" onClick={toggleDarkMode}>
              <Sun color="#373737" />
            </button>
          </Tooltip>
        )}
        <Link href="/contact">
          <Button type="primary" prefix={<CirclePlus size={16} />}>
            Hire me
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
