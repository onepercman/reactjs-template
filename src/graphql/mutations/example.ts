import { gql } from "@apollo/client"

export const exampleMutation = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`
