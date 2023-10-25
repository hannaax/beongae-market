import { useEffect } from "react"
import {
  FETCH_USEDITEMS_COUNT_I_SOLD,
  FETCH_USEDITEMS_I_SOLD,
} from "./Mypage.market.queries"
import { useQuery } from "@apollo/client"
import * as S from "./Mypage.market.styles"

export default function MypageMarket() {
  const { data: dataUseditemsISold } = useQuery(FETCH_USEDITEMS_I_SOLD)
  const { data: dataUseditemsCountISold } = useQuery(
    FETCH_USEDITEMS_COUNT_I_SOLD
  )

  useEffect(() => {
    console.log("sold", dataUseditemsISold?.fetchUseditemsISold)
  }, [])

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        판매상품
        <S.ItemNumber style={{ color: "#bbb", fontWeight: "600" }}>
          {" "}
          2건
        </S.ItemNumber>
      </div>
      <S.Wrapper>
        {dataUseditemsISold?.fetchUseditemsISold.map((product, idx) => (
          <S.Row key={product._id}>
            {product.images.length ? (
              <S.Img
                src={`https://storage.googleapis.com/${product.images.find(
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
              <S.ColumnTitle>{product.name}</S.ColumnTitle>
              <S.ColumnBasic>{product.price}</S.ColumnBasic>
              <S.ColumnBasic>1</S.ColumnBasic>
            </div>
          </S.Row>
        ))}
      </S.Wrapper>
    </>
  )
}
