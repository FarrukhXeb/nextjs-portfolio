import { useRouter } from "next/router";

import { getPostBySlug, getPosts } from "../../lib/data";

function Blog({ post }) {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}

export const getStaticPaths = async () => {
  const { posts } = await getPosts();
  return {
    paths: posts.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const { post } = await getPostBySlug(slug);
  return {
    props: {
      post,
    },
  };
};

export default Blog;
