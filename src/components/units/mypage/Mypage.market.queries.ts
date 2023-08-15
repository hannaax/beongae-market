import { gql } from "@apollo/client"

export const FETCH_USEDITEMS_COUNT_I_SOLD = gql`
  query {
    fetchUseditemsCountISold
  }
`

export const FETCH_USEDITEMS_COUNT_I_PICKED = gql`
  query {
    fetchUseditemsCountIPicked
  }
`

export const FETCH_USEDITEMS_I_SOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      price
      seller {
        _id
        name
      }
      soldAt
      createdAt
    }
  }
`

export const FETCH_USEDITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      price
      seller {
        name
      }
      soldAt
      createdAt
    }
  }
`
