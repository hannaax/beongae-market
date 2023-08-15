import { gql } from "@apollo/client"

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      price
      images
      pickedCount
      seller {
        name
      }
      soldAt
      createdAt
      updatedAt
    }
  }
`
