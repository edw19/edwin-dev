import Head from "next/head";
import Link from "next/link";

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
      <div className="grid grid-cols-1 bg-blue-400">
        <h1 className="">Edwin narváez</h1>
        <p>Front Developer</p>
      </div>
    </>
  );
}
