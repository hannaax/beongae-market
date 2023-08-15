import { gql } from "@apollo/client"

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`

export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`

// export const FETCH_USEDITEM_QUESTIONS = gql``

// export const FETCH_USEDITEM_QUESTION_ANSWERS = gql``

// export const DELETE_USERITEM_QUESTION = gql``

// export const DELETE_USERITEM_QUESTION_ANSWER = gql``
