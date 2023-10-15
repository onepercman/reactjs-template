import { gql } from "@apollo/client"

export const exampleQuery = gql`
  query GetDogs {
    dogs {
      id
      name
    }
  }
`
