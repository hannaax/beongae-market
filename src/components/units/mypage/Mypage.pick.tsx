import { useQuery } from "@apollo/client"
import {
  FETCH_USEDITEMS_COUNT_I_PICKED,
  FETCH_USEDITEMS_I_PICKED,
} from "./Mypage.market.queries"
import * as S from "./Mypage.market.styles"
import { useEffect } from "react"
import { getDate } from "../../commons/libraries/utils"

export default function MypagePick() {
  const { data: dataUseditemsIPicked } = useQuery(FETCH_USEDITEMS_I_PICKED)

  const { data: dataUseditemsCountIPicked } = useQuery(
    FETCH_USEDITEMS_COUNT_I_PICKED
  )

  useEffect(() => {
    console.log("pick", dataUseditemsIPicked)
  }, [])

  return (
    <>
      <div>
        찜
        <S.ItemNumber style={{ color: "#bbb", fontWeight: "600" }}>
          {" "}
          {dataUseditemsIPicked?.fetchUseditemIPicked?.length ?? 0}건
        </S.ItemNumber>
      </div>
      <S.Wrapper>
        {dataUseditemsIPicked?.fetchUseditemIPicked?.map((product, idx) => (
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
              <S.ColumnBasic>{getDate(product.createdAt)}</S.ColumnBasic>
            </div>
          </S.Row>
        ))}
      </S.Wrapper>
    </>
  )
}
