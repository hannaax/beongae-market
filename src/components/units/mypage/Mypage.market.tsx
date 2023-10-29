import { useEffect } from "react"
import {
  FETCH_USEDITEMS_COUNT_I_SOLD,
  FETCH_USEDITEMS_I_SOLD,
} from "./Mypage.market.queries"
import { useQuery } from "@apollo/client"
import * as S from "./Mypage.market.styles"
import { getDate } from "../../commons/libraries/utils"

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
          {dataUseditemsISold?.fetchUseditemsISold.length ?? 0}건
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
              <S.ColumnBasic>
                <strong>{product.price}</strong>
                <S.Div>원</S.Div>
              </S.ColumnBasic>
              <S.ColumnBasic>
                <S.Date>{getDate(product.createdAt)}</S.Date>
              </S.ColumnBasic>
              <S.ColumnBasic>
                <S.SoldButton>판매완료</S.SoldButton>
                {/* 이 버튼 누르면 판매완료로 바뀜
                즉, fetchUsedItems의 soldAt이 null에서 판매완료를 누른 시점으로 바뀜
                soldAt이 null이면 판매중 제품 // 판매완료 후에 포인트 적립됨
                중고마켓 fetch 필터링?
                 */}
              </S.ColumnBasic>
            </div>
          </S.Row>
        ))}
      </S.Wrapper>
    </>
  )
}
