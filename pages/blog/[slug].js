import { useRouter } from "next/router";

import BlogSingle from "../../components/BlogSingle";
import BreadCrumbs from "../../components/BreadCrumbs";
import { getPostBySlug } from "../../lib/data";
function Blog({ post }) {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;
  return (
    <>
      <BreadCrumbs pageTitle={post.title} pageSub={"Blog Details"} />
      <BlogSingle post={post} />
    </>
  );
}

// export const getStaticPaths = async () => {
//   const { posts } = await getPosts();
//   return {
//     paths: posts.map(({ slug }) => ({
//       params: {
//         slug,
//       },
//     })),
//     fallback: false,
//   };
// };

// export const getStaticProps = async (ctx) => {
//   const { slug } = ctx.params;
//   const { post } = await getPostBySlug(slug);
//   return {
//     props: {
//       post,
//     },
//   };
// };
export const getServerSideProps = async (ctx) => {
  const { slug } = ctx.params;
  const { post } = await getPostBySlug(slug);
  return {
    props: {
      post,
    },
  };
};
export default Blog;
