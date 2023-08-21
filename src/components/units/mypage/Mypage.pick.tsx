import { useQuery } from "@apollo/client"
import {
  FETCH_USEDITEMS_COUNT_I_PICKED,
  FETCH_USEDITEMS_I_PICKED,
} from "./Mypage.market.queries"
import * as S from "./Mypage.market.styles"
import { useEffect } from "react"

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
        찜<span style={{ color: "#bbb", fontWeight: "600" }}> 2건</span>
      </div>
      <S.Wrapper>
        {dataUseditemsIPicked?.fetchUseditemIPicked.map((product, idx) => (
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
