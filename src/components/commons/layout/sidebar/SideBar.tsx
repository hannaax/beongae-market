import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { Favorite } from "@mui/icons-material"
import { useRecoilState } from "recoil"
import { cartState } from "../../../../commons/stores"

const Wrapper = styled.div``

const ProductsPicked = styled.div`
  width: 90px;
  height: 54px;
  border: 2px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`

const ProductsRecentlyVieved = styled.div`
  width: 90px;
  height: 167px;
  border: 2px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`

export default function SideBar() {
  // const [recentlyViewedItems, SetRecentlyViewedItems] = useState([])

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("recentlyViewedItems"))
  //   console.log(data)
  //   SetRecentlyViewedItems(data)
  // }, [])

  // console.log("items", recentlyViewedItems)

  // const ITEMS_LENGTH = recentlyViewedItems.length ?? 1
  return <Wrapper></Wrapper>
}
