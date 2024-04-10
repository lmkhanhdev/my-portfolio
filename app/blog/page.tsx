import Heading from "@/components/Heading";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Lmkhanh",
  description: "Blog",
};

const Blog = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-24 my-20">
      <Heading label="Blog" title="5 posts about code, design, more ..." />
    </div>
  );
};

export default Blog;
