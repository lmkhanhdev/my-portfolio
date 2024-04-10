import ConnectLinks from "@/components/ConnectLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links | Lmkhanh",
  description: "Links",
};

const Links = () => {
  return (
    <>
      <div className="flex flex-col mt-20">
        <div className="flex animate-in flex-col gap-12">
          <Image
            src="/avatar.png"
            alt=""
            width={100}
            height={100}
            className="bg-gray-200 dark:bg-gray-500 p-2 pb-0 rounded-[50%] animate-in mx-auto"
            style={{ "--index": 1 } as React.CSSProperties}
          />
          <div
            className="flex flex-col mx-auto text-center space-y-1 animate-in"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <h1 className="text-2xl font-bold capitalize animate-in">
              la minh khanh
            </h1>
            <p className="w-[60%] mx-auto text-md  text-slate-600 dark:text-slate-400 animate-in">
              Software engineer who loves building cool things with code. Find
              me elsewhere @lmkhanh
            </p>
          </div>
          <ul
            className="animated-list grid flex-grow animate-in grid-cols-1 gap-2 lg:gap-3"
            style={{ "--index": 3 } as React.CSSProperties}
          >
            {ConnectLinks.map((link) => (
              <li className="col-span-1 transition-opacity" key={link.label}>
                <Link
                  href={link.href}
                  className="inline-grid w-full rounded-lg bg-tertiary p-4 no-underline transition-opacity bg-secondary"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex gap-3">
                      <span className="text-xl">{link.icon}</span>
                      {link.label}
                    </div>
                    <MdArrowOutward size={18} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Links;
