import { gql } from "@apollo/client"

export const FETCH_USEDITEMS_OF_THE_BEST = gql`
  query {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      images
      price
      pickedCount
      soldAt
    }
  }
`
