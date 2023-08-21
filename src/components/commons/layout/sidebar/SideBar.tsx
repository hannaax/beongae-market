import { useRecoilState } from "recoil"
import { cartState } from "../../../../commons/stores"
import styled from "@emotion/styled"
import { Favorite } from "@mui/icons-material"
import { useEffect, useState } from "react"

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
  const [recentlyViewedItems, SetRecentlyViewedItems] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("recentlyViewedItems"))
    console.log(data)
    SetRecentlyViewedItems(data)
  }, [])

  console.log("items", recentlyViewedItems)

  const ITEMS_LENGTH = recentlyViewedItems.length ?? 1
  return (
    <Wrapper>
      {/* <ProductsPicked>
        <p>찜한 상품</p>
        <p>
          <Favorite sx={{ fontSize: "13px" }} /> 1
        </p>
      </ProductsPicked>
      <ProductsRecentlyVieved>
        <p>최근본 상품</p>
        <div>
          <div>{recentlyViewedItems[ITEMS_LENGTH - 1]?.fetchUseditem.name}</div>
          <div>{recentlyViewedItems[ITEMS_LENGTH - 2]?.fetchUseditem.name}</div>
          <div>{recentlyViewedItems[ITEMS_LENGTH - 3]?.fetchUseditem.name}</div>
        </div>
      </ProductsRecentlyVieved> */}
    </Wrapper>
  )
}
