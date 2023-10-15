import { gql } from "@apollo/client"

export const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      name
    }
  }
`
