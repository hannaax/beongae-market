import MypageUI from "./Mypage.presenter"
import * as S from "./Mypage.point.styles"

export default function MypagePoint() {
  return (
    <>
      <>
        <MypageUI>
          <div>
            <S.Wrapper>
              <S.Header>
                <S.Nav>
                  <S.Categories></S.Categories>
                  <S.Category>전체내역</S.Category>
                  <S.DivisionLine></S.DivisionLine>
                  <S.Category>충전내역</S.Category>
                  <S.DivisionLine></S.DivisionLine>
                  <S.Category>구매내역</S.Category>
                  <S.DivisionLine></S.DivisionLine>
                  <S.Category>판매내역</S.Category>
                </S.Nav>
              </S.Header>
              <S.TableTop />
              <S.Row>
                <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
                <S.ColumnHeaderTitle>내용</S.ColumnHeaderTitle>
                <S.ColumnHeaderBasic>거래 및 충전내역</S.ColumnHeaderBasic>
                <S.ColumnHeaderBasic>잔액</S.ColumnHeaderBasic>
              </S.Row>
              {/* {props.baskets?.map((el, i) => (
        <S.Row key={props.baskets[i]._id}>
          <S.ColumnBasic>이미지</S.ColumnBasic>
          <S.ColumnTitle>{props.baskets[i].name}</S.ColumnTitle>
          <S.ColumnBasic>{props.baskets[i].price}</S.ColumnBasic>
          <S.ColumnBasic>1</S.ColumnBasic>
        </S.Row>
      ))} */}
              <S.TableBottom />
              <S.Footer></S.Footer>
            </S.Wrapper>
          </div>
        </MypageUI>
      </>
    </>
  )
}
