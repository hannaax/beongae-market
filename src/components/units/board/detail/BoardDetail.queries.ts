import { gql } from "@apollo/client"

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
      youtubeUrl
      likeCount
      dislikeCount
      boardAddress {
        zipcode
        address
        addressDetail
      }
      images
    }
  }
`

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: Int) {
    deleteBoard(boardId: $boardId) {
      message
    }
  }
`
