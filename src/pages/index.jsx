import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Edwin Narváez - Blog</title>
        <meta
          name="description"
          content="React, Nextjs, Graphql, Nodejs y más"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sm:col-start-1 sm:col-span-5 md:col-start-2 md:col-span-5 lg:col-start-3 mx-2">
        {posts.map((post) => (
          <li
            key={post.filePath}
            className="hover:bg-gray-100 p-4 rounded-md list-none py-2"
          >
            <Link
              as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
              href={`/posts/[slug]`}
            >
              <a className=" text-xl font-semibold">{post.data.title}</a>
            </Link>
            <div className="">{post.data.description}</div>
            <p className="text-gray-400 font-light text-xs text-right">
              {post.data?.publish}
            </p>
          </li>
        ))}
      </div>
      <div className="hidden sm:block sm:col-span-3 bg-yellow-100 md:col-span-3 text-center bg-gray-100 py-4">
        <h1 className="mb-4 font-bold">Últimas Publicaciones</h1>
        {posts.map((post) => (
          <Link
          key={post.filePath}
            as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
            href={`/posts/[slug]`}
          >
            <a className="hover:text-blue-100 ">{post.data.title}</a>
          </Link>
        ))}
      </div>
    </>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
