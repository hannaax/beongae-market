import * as S from "./Cart.styles"

export default function CartUI(props) {
  console.log(props.baskets)
  return (
    <S.Wrapper>
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>이미지</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>상품명</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>가격</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>수량</S.ColumnHeaderBasic>
      </S.Row>
      {props.baskets?.map((el, i) => (
        <S.Row key={props.baskets[i]._id}>
          <S.ColumnBasic>이미지</S.ColumnBasic>
          <S.ColumnTitle>{props.baskets[i].name}</S.ColumnTitle>
          <S.ColumnBasic>{props.baskets[i].price}</S.ColumnBasic>
          <S.ColumnBasic>1</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <S.Button>결제하기</S.Button>
      </S.Footer>
    </S.Wrapper>
  )
}
