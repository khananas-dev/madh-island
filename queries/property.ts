import { gql } from "@apollo/client";

export const GET_ALL_PROPERTIES = gql`
  {
    projects {
      id,
    }
  }
`;