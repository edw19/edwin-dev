import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import { useRouter } from "next/router";

export default function Home({ posts }) {
  const router = useRouter();
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
      {/* <h3 className="text-indigo-500 font-extrabold">Publicaciones</h3> */}
      <div className="sm:col-start-1 sm:col-span-7 md:col-start-3 md:col-span-5">
        {posts.map((post) => (
          <li key={post.filePath} className=" list-none py-2 p-1 mb-1">
            <Link
              as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
              href={`/posts/[slug]`}
            >
              <a className=" font-semibold">{post.data.title}</a>
            </Link>
            <div className="">{post.data.description}</div>
            <p className="text-gray-400 font-light text-xs text-right">
              {post.data?.publish}
            </p>
          </li>
        ))}
      </div>
      <div className="hidden sm:block bg-yellow-100 md:col-span-3 text-center">here go to Navigate</div>
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
