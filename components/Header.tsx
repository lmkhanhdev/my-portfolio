import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggler";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-4 bg-white dark:bg-background sticky top-0 z-30 transition-all w-full ">
      <div className="mx-auto w-full max-w-screen-md px-2.5 md:px-20">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo.jpg"
              alt=""
              width={50}
              height={50}
              className=" rounded-md"
            />
          </Link>
          <div className="flex items-center justify-center gap-x-6">
            <Navbar
              containerStyles="hidden xl:flex gap-x-16 items-center"
              linkStyles="relative transition-all text-md text-gray-500 hover:dark:text-gray-200 hover:text-gray-900"
            />
          </div>
          <div className="flex items-center justify-end gap-x-4">
            <ThemeToggle />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
