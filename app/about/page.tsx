import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";

import tea from "@/public/tea.jpg";
import gogo from "@/public/gogo.jpg";
import Gallery from "./components/Gallery";
import Section from "@/components/Section";
import Link from "next/link";
import ConnectLinks from "@/components/ConnectLinks";
import { MdArrowOutward } from "react-icons/md";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Lmkhanh",
  description: "About",
};

const About = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-24 my-20">
      <Heading label="About" title="Just a quick glimpse." />
      <div className="lg:hidden mb-8">
        <div className="animate-in">
          <Image
            src={tea}
            alt={"me and lily"}
            width={324}
            height={139}
            className="relative h-60 inset-0 object-cover bg-gray-400 shadow-md pointer-events-none rounded-2xl -rotate-6"
            priority
          />
        </div>

        <div className="animate-in">
          <Image
            src={gogo}
            alt={"me and lily"}
            width={220}
            height={230}
            className="absolute inset-0 object-cover bg-gray-400
             shadow-md pointer-events-none rounded-2xl rotate-6 left-[45%]
              md:left-[60%] md:w-56 top-96"
            priority
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <Gallery />
      </div>
      <div
        className="flex flex-col gap-16 animate-in md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>Hello world, I&apos;m La Minh Khanh!</p>

            <p>
              I have a passion for design and am always looking for ways to
              incorporate it into my engineering work.
            </p>

            <p>
              I have a passion for programming, so in my free time I always look
              for and learn new things and start writing code.
            </p>
          </div>
        </Section>

        <Section heading="Connect" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              Have a question or just want to chat? Feel free to{" "}
              <Link
                href="mailto:laminhkhanhdev@gmail.com"
                className=" border-b border-primary text-muted-foreground"
              >
                email me
              </Link>
              . Try finding me anywhere else at @lmkhanh
            </p>
            <ul className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-2 animated-list">
              {ConnectLinks.map((link) => (
                <li className="transition-opacity col-span-1" key={link.label}>
                  <Link
                    href={link.href}
                    className=" transition-opacity no-underline w-full border rounded-lg p-4 border-muted-foreground inline-grid"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex gap-2 items-center">
                        <span className="text-xl">{link.icon}</span>
                        {link.label}
                      </div>
                      <MdArrowOutward />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
        <Section heading="Work" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              {new Date().getFullYear() - 2021}+ years of professional
              development experience.
            </p>

            <p>
              I started my career by teaching myself to code, which was
              difficult at first but increased my ability to learn and
              understand on my own. After that, I was able to do projects from
              small to large on my own, my goal was to be a full stack
              developer.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default About;
