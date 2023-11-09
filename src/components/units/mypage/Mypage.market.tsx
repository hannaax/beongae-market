import { useQuery } from "@apollo/client"
import { FETCH_USEDITEMS_I_SOLD } from "./Mypage.market.queries"
import * as S from "./Mypage.market.styles"
import { getDate } from "../../commons/libraries/utils"

interface IProduct {
  _id: string
  images: []
  name: string
}

export default function MypageMarket() {
  const { data: dataUseditemsISold } = useQuery(FETCH_USEDITEMS_I_SOLD)

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        판매상품
        <S.ItemNumber style={{ color: "#bbb", fontWeight: "600" }}>
          {" "}
          {dataUseditemsISold?.fetchUseditemsISold?.length ?? 0}건
        </S.ItemNumber>
      </div>
      <S.Wrapper>
        {dataUseditemsISold?.fetchUseditemsISold.map((product: IProduct) => (
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
                {/* <S.SoldButton>판매완료</S.SoldButton> */}
              </S.ColumnBasic>
            </div>
          </S.Row>
        ))}
      </S.Wrapper>
    </>
  )
}
