import Head from "next/head";
import Link from "next/link";
import Layout from "../src/components/layout/layout";
import LayoutBlog from "../src/components/layout/main-layout";

export default function Post({ children, frontMatter }) {
  const { title } = frontMatter;
  return (
    <Layout>
      <LayoutBlog>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="mt-6">
          <h1 className="text-2xl">{title}</h1>
          <div>{children}</div>
          <p>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </p>
          <p>{frontMatter?.publishDate}</p>
        </main>
      </LayoutBlog>
    </Layout>
  );
}
