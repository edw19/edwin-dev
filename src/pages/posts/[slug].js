import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import CustomLink from "../../components/CustomLink";
import mdxPrism from "mdx-prism";

const MDXComponents = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import("../../components/TestComponent")),
  Title: dynamic(() => import("../../components/blog/Title")),
  Paragraph: dynamic(() => import("../../components/blog/Paragraph")),
  Code: dynamic(() => import("../../components/blog/Code")),
  Grid: dynamic(() => import("../../components/blog/Grid")),
  Head,
};

export default function PostPage({ source, frontMatter }) {
  return (
    <>
      {/* <header>
        <nav>
          <Link href="/">
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header> */}
      <main className="sm:col-start-2 sm:col-span-6 md:col-start-3 md:col-span-7 lg:col-start-4 lg:col-span-7">
        <h1 className="text-4xl font-semibold">{frontMatter.title}</h1>
        <MDXRemote {...source} components={MDXComponents} />
      </main>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [
        require("remark-slug"),
        [
          require("remark-autolink-headings"),
          {
            linkProperties: {
              className: ["anchor"],
            },
          },
        ],
        require("remark-code-titles"),
      ],

      rehypePlugins: [mdxPrism],
    },
    target: ["esnext"],
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
