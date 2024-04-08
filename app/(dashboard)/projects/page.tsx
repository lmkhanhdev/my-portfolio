import Heading from "@/components/Heading";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Lmkhanh",
  description: "Projects",
};

const Project = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-24 my-20">
      <Heading
        label="Projects"
        title="Here are some of the projects I've worked on."
      />
    </div>
  );
};

export default Project;
