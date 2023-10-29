import { gql } from "@apollo/client"

export const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        amount
      }
      createdAt
    }
  }
`

// export const UPDATE_USER = gql`
//   mutation updateUser(
//     $boardId: ID!
//     $password: String
//     $updateUserInput: UpdateUserInput!
//   ) {
//     updateUser(
//       boardId: $boardId
//       password: $password
//       updateUserInput: $updateUserInput
//     ) {
//       _id
//     }
//   }
// `
