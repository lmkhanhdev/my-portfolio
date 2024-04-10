import fs from "fs";
import path from "path";

import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files"; // eslint-disable-line
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";

const getSlug = (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, "");

const projectComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
  },
  image: {
    type: "string",
    resolve: (doc) => {
      const imagePath = path.join(
        process.cwd(),
        "public",
        "projects",
        `${getSlug(doc)}/FURNITURE1.png`
      );
      return fs.existsSync(imagePath)
        ? `/projects/${getSlug(doc)}/FURNITURE1.png`
        : null;
    },
  },
  og: {
    type: "string",
    resolve: (doc) => `/projects/${getSlug(doc)}/FURNITURE1.png`,
  },
};

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `project/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    time: { type: "string", required: true },
    url: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" } },
  },
  computedFields: projectComputedFields,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Project],
  mdx: {
    rehypePlugins: [rehypePrism, rehypeSlug],
  },
});
