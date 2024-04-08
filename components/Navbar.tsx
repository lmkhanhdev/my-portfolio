"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavProps {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
  iconStyles?: string;
}

const Navbar: React.FC<NavProps> = ({ containerStyles, linkStyles }) => {
  const pathname = usePathname();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const links = [
    { path: "/about", name: "About", active: pathname === "/about" },
    { path: "/blog", name: "Blog", active: pathname === "/blog" },
    { path: "/projects", name: "Projects", active: pathname === "/projects" },
  ];
  return (
    <nav className={`${containerStyles}`}>
      {isClient &&
        links.map((link, index) => {
          const { path, name, active } = link;
          return (
            <Link
              href={path}
              key={index}
              className={`capitalize ${linkStyles} ${
                active
                  ? "px-2.5 py-1 rounded-md bg-gray-300 dark:bg-gray-700 transition-all text-gray-800 dark:text-white"
                  : ""
              }`}
            >
              {name}
            </Link>
          );
        })}
    </nav>
  );
};

export default Navbar;
