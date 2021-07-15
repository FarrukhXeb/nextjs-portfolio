import { gql, GraphQLClient } from "graphql-request";
const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
const graphQLClient = new GraphQLClient(endpoint);
export const getPostsAndPortfolio = async () => {
  const query = gql`
    {
      posts {
        id
        title
        description
        date
        tags
        slug
        author {
          name
          image {
            url
            width
            height
          }
        }
      }
      portfolios {
        id
        title
        tags
        slug
        description
        date
        coverImage {
          url
          width
          height
        }
      }
    }
  `;
  return await graphQLClient.request(query);
};
export const getPortfolios = async () => {
  const query = gql`
    {
      portfolios {
        id
        title
        tags
        slug
        description
        date
        coverImage {
          url
          width
          height
        }
      }
    }
  `;
  return await graphQLClient.request(query);
};
export const getPosts = async () => {
  const query = gql`
    {
      posts {
        id
        title
        tags
        slug
        description
        date
      }
    }
  `;
  return await graphQLClient.request(query);
};
export const getPortfolioBySlug = async (slug) => {
  const query = gql`
    query Portfolio($slug: String) {
      portfolio(where: { slug: $slug }) {
        id
        title
        tags
        slug
        description
        date
        coverImage {
          url
          width
          height
        }
      }
    }
  `;
  return await graphQLClient.request(query, { slug });
};
export const getPostBySlug = async (slug) => {
  const query = gql`
    query Post($slug: String) {
      post(where: { slug: $slug }) {
        id
        title
        tags
        slug
        description
        content
        date
      }
    }
  `;
  return await graphQLClient.request(query, { slug });
};
