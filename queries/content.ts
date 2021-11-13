import { gql } from "@apollo/client";

export const GET_ABOUT_US = gql`
  {
    aboutUs {
        image
        content
      }
  }
`;