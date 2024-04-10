import React from "react";
import { Metadata } from "next";
import Image from "next/image";

import Heading from "@/components/Heading";

import { FcMoneyTransfer } from "react-icons/fc";
import { RiExchangeDollarLine } from "react-icons/ri";
import { SiCoffeescript } from "react-icons/si";

import Mb from "@/public/LogoMB.png";
import QRMb from "@/public/QRMb.jpg";
import Momo from "@/public/logoMomo.png";
import QRMomo from "@/public/QRMOMO.jpg";

export const metadata: Metadata = {
  title: "Donate | Lmkhanh",
  description: "Donate",
};

const Donate = () => {
  return (
    <div className="space-y-20 my-20">
      <Heading
        label="Donate"
        title="If you cherish me, you can support me by donating below."
      />
      <ul className="animate-in grid md:grid-cols-2 grid-cols-1  gap-10 animated-list">
        <li className="border p-8 space-y-10 rounded-xl bg-muted cursor-pointer">
          <span className=" text-yellow-600">
            <RiExchangeDollarLine size={35} />
          </span>
          <div className="flex flex-col items-center">
            <Image src={Mb} width={150} height={150} alt="" priority />
            <p className="mt-3">
              Name: <span className="text-xl font-bold">La Minh Khanh</span>
            </p>
            <p>
              STK: <span className="text-xl font-bold">0349627790</span>
            </p>
          </div>
          <div className="flex justify-center">
            <Image src={QRMb} width={200} height={200} alt="" priority />
          </div>
        </li>
        <li className="border p-8 space-y-10 rounded-xl bg-muted cursor-pointer">
          <span className=" text-yellow-600">
            <FcMoneyTransfer size={35} />
          </span>
          <div className="flex flex-col items-center">
            <Image src={Momo} width={100} height={100} alt="" priority />
            <p className="mt-3">
              Name: <span className="text-xl font-bold">La Minh Khanh</span>
            </p>
          </div>
          <div className="flex justify-center">
            <Image src={QRMomo} width={250} height={250} alt="" priority />
          </div>
        </li>
      </ul>
      <footer className="flex justify-center items-center text-xl font-bold gap-4">
        Thank you for donating to me!{" "}
        <span className=" text-amber-500">
          <SiCoffeescript size={40} />
        </span>
      </footer>
    </div>
  );
};

export default Donate;
