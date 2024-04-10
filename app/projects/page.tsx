import Heading from "@/components/Heading";
import React from "react";
import { Metadata } from "next";
import clsx from "clsx";
import Link from "next/link";
import Halo from "@/components/ui/halo";
import Image from "next/image";
import { allProjects } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "Projects | Lmkhanh",
  description: "Projects",
};

const Project = () => {
  const projects = allProjects;
  return (
    <div className="flex flex-col gap-16 md:gap-24 my-20">
      <Heading
        label="Projects"
        title="Here are some of the projects I've worked on."
      />
      <ul
        className="animate-in flex flex-col animated-list"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        {projects.map((project, i) => (
          <li
            key={project.slug}
            className={clsx(
              "py-6 flex flex-col md:flex-row gap-4 md:gap-6 transition-opacity first:pt-0 last:pb-0"
            )}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="w-full md:w-2/5 aspect-video bg-tertiary rounded-lg border border-secondary overflow-clip select-none"
            >
              <Halo strength={10}>
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full "
                />
              </Halo>
            </Link>
            <div className="w-full md:w-3/5 space-y-2">
              <div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-primary font-medium hover:underline"
                >
                  {project.title}
                </Link>
                <time className="text-muted-foreground"> · {project.time}</time>
              </div>

              <p className="line-clamp-3 text-muted-foreground">
                {project.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
