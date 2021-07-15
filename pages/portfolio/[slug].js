import Head from "next/head";

import { getPortfolioBySlug } from "../../lib/data";
// import { useRouter } from "next/router";

function Portfolio({ portfolio }) {
  // const router = useRouter();
  // if (router.isFallback) return <div>Loading...</div>;
  return (
    <div>
      <Head>
        <title>{portfolio.title}</title>
      </Head>
      <h1 className="text-2xl font-bold font-sans">{portfolio.title}</h1>
      <p className="text-md">{portfolio.description}</p>
      <div className="flex">
        {portfolio.tags.map((tag) => (
          <div className="text-gray-400 text-xs mr-1" key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

// export const getStaticPaths = async () => {
//   const { portfolios } = await getPortfolios();
//   return {
//     paths: portfolios.map(({ slug }) => ({
//       params: {
//         slug,
//       },
//     })),
//     fallback: false,
//   };
// };

// export const getStaticProps = async (ctx) => {
//   const { slug } = ctx.params;
//   const { portfolio } = await getPortfolioBySlug(slug);
//   return {
//     props: {
//       portfolio,
//     },
//   };
// };

export const getServerSideProps = async (ctx) => {
  const { slug } = ctx.params;
  const { portfolio } = await getPortfolioBySlug(slug);
  return {
    props: {
      portfolio,
    },
  };
};

export default Portfolio;
