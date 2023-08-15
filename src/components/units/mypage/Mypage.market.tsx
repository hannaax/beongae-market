import MypageUI from "./Mypage.presenter"
import * as S from "./Mypage.market.styles"
import Searchbars02 from "../../commons/searchbars/02/Searchbars02.container"
import { useQuery } from "@apollo/client"
import {
  FETCH_USEDITEMS_I_SOLD,
  FETCH_USEDITEMS_COUNT_I_SOLD,
  FETCH_USEDITEMS_I_PICKED,
  FETCH_USEDITEMS_COUNT_I_PICKED,
} from "./Mypage.market.queries"
import { useEffect } from "react"

export default function MypageMarket(props) {
  const { data } = useQuery(FETCH_USEDITEMS_I_SOLD)
  const { data: dataUseditemsCountISold } = useQuery(
    FETCH_USEDITEMS_COUNT_I_SOLD
  )

  const { data: dataUseditemsIPicked } = useQuery(FETCH_USEDITEMS_I_PICKED)
  const { data: fetchUseditemsIPicked } = useQuery(FETCH_USEDITEMS_I_PICKED)

  const { data: dataUseditemsCountIPicked } = useQuery(
    FETCH_USEDITEMS_COUNT_I_PICKED
  )

  useEffect(() => {
    if (props.data !== undefined) {
      console.log("props", props.data)
    }
  }, [props.data])

  return (
    <>
      <MypageUI>
        <div>
          <S.Wrapper>
            <S.Header>
              <S.Nav>
                <S.Categories></S.Categories>
                <S.Category>판매상품</S.Category>
                <S.DivisionLine>│</S.DivisionLine>
                <S.Category>찜</S.Category>
              </S.Nav>
              <Searchbars02 />
            </S.Header>
            <S.TableTop />
            <S.Row>
              <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
              <S.ColumnHeaderTitle>상품명</S.ColumnHeaderTitle>
              <S.ColumnHeaderBasic>판매가격</S.ColumnHeaderBasic>
              <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
            </S.Row>
            {/* {data.fetchUseditemsISold?.map((el, idx) => (
              <S.Row key={el._id}>
                <S.ColumnBasic>{idx + 1}</S.ColumnBasic>
                <S.ColumnTitle>{el._name}</S.ColumnTitle>
                <S.ColumnBasic>{el.price}</S.ColumnBasic>
                <S.ColumnBasic>1</S.ColumnBasic>
              </S.Row>
            ))} */}
            <S.TableBottom />
            <S.Footer></S.Footer>
          </S.Wrapper>
        </div>
      </MypageUI>
    </>
  )
}
