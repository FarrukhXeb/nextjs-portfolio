import Link from "next/link";

import { getPostsAndPortfolio } from "../lib/data";

export const getServerSideProps = async () => {
  const data = await getPostsAndPortfolio();
  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  return (
    <>
      <div>
        <h1>Hello from Dev</h1>
        {data?.portfolios?.map((portfolio) => (
          <div key={portfolio.id}>
            <Link href={`/portfolio/${portfolio.slug}`}>
              <a>
                <h3>{portfolio.title}</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div>
        {data?.posts?.map((post) => (
          <div key={post.id}>
            <Link href={`/blog/${post.slug}`}>
              <a>
                <h3>{post.title}</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
