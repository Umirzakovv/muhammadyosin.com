import { CircleUserRound, House } from "lucide-react";
import Link from "next/link";
import React from "react";

interface NavLink {
  id: number;
  href: string;
  icon: React.JSX.Element;
}

const Header: React.FC = () => {
  const navLinks: NavLink[] = [
    {
      id: 1,
      href: "/",
      icon: <House />,
    },
    {
      id: 2,
      href: "/",
      icon: <CircleUserRound />,
    },
  ];
  const isActive = true;
  return (
    <header className="flex justify-between items-center px-4 bg-white shadow-md rounded-lg w-[560px] h-16 fixed top-4 z-10">
      <nav>
        <ul className="flex items-center gap-4">
          {navLinks.map((item) => {
            return (
              <li
                key={item.id}
                className={`rounded-full p-2 ${
                  isActive ? "bg-[#f7f7f7]" : "bg-white"
                } `}
              >
                <Link href="/" title="Home">
                  {item.icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button>Hire me</button>
    </header>
  );
};

export default Header;
