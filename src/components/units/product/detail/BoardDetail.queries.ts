import { gql } from "@apollo/client"

// export const DELETE_BOARD = gql`
//   mutation deleteBoard($boardId: Int) {
//     deleteBoard(boardId: $boardId) {
//       message
//     }
//   }
// `

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      price
      tags
      images
      pickedCount
      useditemAddress {
        _id
      }
      buyer {
        name
      }
      seller {
        name
      }
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`

export const DELETE_USEDITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`

export const TOGGLE_USEDITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`
