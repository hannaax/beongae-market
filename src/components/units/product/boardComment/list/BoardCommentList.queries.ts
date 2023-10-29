import { gql } from "@apollo/client"

export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`

export const FETCH_USEDITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      _id
      contents
      user {
        name
      }
      createdAt
    }
  }
`

// export const FETCH_USEDITEM_QUESTIONS = gql`
//   query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
//     fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
//       _id
//       contents
//       user {
//         name
//       }
//       createdAt
//     }
//   }
// `
