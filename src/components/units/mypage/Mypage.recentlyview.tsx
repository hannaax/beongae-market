import { useEffect, useState } from "react"
import * as S from "./Mypage.market.styles"
import { getDate } from "../../commons/libraries/utils"

export default function RecentlyViewedItems() {
  const [recentlyViewedItems, SetRecentlyViewedItems] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("recentlyViewedItems"))
    console.log(data)
    SetRecentlyViewedItems(data)
  }, [])

  console.log("items", recentlyViewedItems)

  return (
    <>
      {" "}
      <S.WrapperHeader>
        최근본상품
        <S.ItemNumber style={{ color: "#bbb", fontWeight: "600" }}>
          {" "}
          {recentlyViewedItems?.length ?? 0}건
        </S.ItemNumber>
      </S.WrapperHeader>
      <S.Wrapper>
        {recentlyViewedItems?.map((product, idx) => (
          <S.Row key={product.fetchUseditem?._id}>
            {product.fetchUseditem?.images.length ? (
              <S.Img
                src={`https://storage.googleapis.com/${product.fetchUseditem?.images.find(
                  (img) => img
                )}`}
              />
            ) : (
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "#eee",
                }}
              ></div>
            )}

            {/* <div style={{ width: "200px", background: "#ddd" }}>이미지</div> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "15px",
              }}
            >
              <S.ColumnTitle>{product.fetchUseditem?.name}</S.ColumnTitle>
              <S.ColumnBasic>
                <strong>{product.fetchUseditem?.price}</strong>
                <S.Div>원</S.Div>
              </S.ColumnBasic>
              <S.ColumnBasic>
                {getDate(product.fetchUseditem?.createdAt)}
              </S.ColumnBasic>
            </div>
          </S.Row>
        ))}
      </S.Wrapper>
    </>
  )
}
