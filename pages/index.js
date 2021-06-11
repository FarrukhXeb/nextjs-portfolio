import Head from "next/head";
import Link from "next/link";

import { getPostsAndPortfolio } from "../lib/data";

export const getStaticProps = async () => {
  const data = await getPostsAndPortfolio();
  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Portfolio App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
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
    </div>
  );
}
