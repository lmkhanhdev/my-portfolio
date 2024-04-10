import { allProjects } from "@/.contentlayer/generated";
import MdxWrapper from "@/components/ui/mdxWrapper";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const Project = ({ params }: { params: any }) => {
  const post = allProjects.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-20 my-20">
      <article>
        <div className="flex animate-in flex-col gap-3">
          <div className="flex gap-3 text-muted-foreground">
            <p>{post.time}</p>
            {post.url && (
              <>
                <span>&middot;</span>
                <Link href={post.url} className="no-underline hover:underline">
                  Visit Project
                </Link>
              </>
            )}
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
            {post.title}
          </h1>
          <p
            className="animate-in text-muted-foreground"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            {post.description}
          </p>
        </div>

        <div className="h-12" />
        <div
          className="project prose animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <MdxWrapper code={post.body.code} />
        </div>
      </article>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-6">
          <h2>Tags</h2>
          <div className="flex flex-wrap gap-3 ">
            {post.tags &&
              post.tags.map((tag: string) => (
                <div
                  key={tag}
                  className="whitespace-nowrap rounded-lg bg-secondary px-4 py-1.5 text-sm text-muted-foreground"
                >
                  {tag}
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2>Contact</h2>
          <p className="max-w-lg text-muted-foreground">
            Need more project details, or interested in working together? Reach
            out to me directly at{" "}
            <a
              href="mailto:laminhkhanhdev@gmail.com"
              className="text-primary underline"
            >
              lmkhanh
            </a>
            . I&apos;d be happy to connect!{" "}
          </p>
        </div>

        <Link href="/projects" className="text-primary underline">
          ← All Projects
        </Link>
      </div>

      <div />
    </div>
  );
};

export default Project;
