import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";

function blog({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <li key={post.filePath}>
          <Link
            as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
            href={`/posts/[slug]`}
          >
            <a>{post.data.title}</a>
          </Link>
        </li>
      ))}
    </div>
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

export default blog;
