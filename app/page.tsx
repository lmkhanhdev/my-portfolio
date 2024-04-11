import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function Home() {
  return (
    <>
      <div className=" h-dvh mt-20">
        <div className=" space-y-6">
          <div>
            <Image
              src="/avatar.png"
              alt=""
              width={100}
              height={100}
              className="dark:bg-[#101111] rounded-[50%]"
              priority
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold capitalize ">la minh khanh</h1>
          </div>

          <p className="max-w-lg  text-muted-foreground">
            Good evening! I&apos;m a programmer who loves building new things.
            With a keen eye for detail and a knack for creative problem-solving,
            I&apos;m enthusiastic about contributing to innovative projects. My
            commitment to continuous learning ensures I stay at the forefront of
            technology.
          </p>
          <ul className="animated-list flex  flex-col gap-2 text-secondary md:flex-row md:gap-6">
            <li className="transition-opacity">
              <Link
                href="/links"
                className="flex items-center gap-x-2 capitalize text-md
               text-slate-600 dark:text-slate-400"
              >
                <MdArrowOutward />
                <span>contact</span>
              </Link>
            </li>
            <li className="transition-opacity ">
              <Link
                href="mailto:laminhkhanhdev@gmail.com"
                className="flex items-center gap-x-2 capitalize text-md
               text-slate-600 dark:text-slate-400"
              >
                <MdArrowOutward />
                <span>get newsletter</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
