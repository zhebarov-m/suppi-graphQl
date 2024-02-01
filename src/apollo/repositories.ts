import {gql} from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query SearchRepositories($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 25,) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          ... on Repository {
            id
            name
            url
          }
        }
      }
    }
  }
`;
