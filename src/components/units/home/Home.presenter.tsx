import * as S from "./Home.styles"
import { v4 as uuidv4 } from "uuid"

export default function HomeUI(props) {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Title>인기상품</S.Title>
          <S.ItemWrap>
            {props.data?.fetchUseditemsOfTheBest.map((product) => (
              <S.Item
                key={uuidv4()}
                id={product._id}
                onClick={props.onClickMoveToBoardDetail}
              >
                {product.images[0] && product.images[1] ? (
                  <S.Img
                    src={`https://storage.googleapis.com/${product.images[0]}`}
                  ></S.Img>
                ) : product.images[0] ? (
                  <S.Img
                    src={`https://storage.googleapis.com/${product.images[0]}`}
                  ></S.Img>
                ) : product.images[1] ? (
                  <S.Img
                    src={`https://storage.googleapis.com/${product.images[1]}`}
                  ></S.Img>
                ) : product.images[2] ? (
                  <S.Img
                    src={`https://storage.googleapis.com/${product.images[2]}`}
                  ></S.Img>
                ) : (
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      backgroundColor: "#eee",
                    }}
                  ></div>
                )}
                <S.Text>
                  <S.Name>{product.name}</S.Name>
                  <S.Price>{product.price}원</S.Price>
                  <S.PostInfo>
                    <S.CreatedAt>{product.createdAt}</S.CreatedAt>
                    <S.Like>♥ {product.pickedCount}</S.Like>
                  </S.PostInfo>
                </S.Text>
              </S.Item>
            ))}
          </S.ItemWrap>
          {/* <Paginations01 refetch={props.refetch} count={props.count} /> */}
        </S.Wrapper>
      </S.Container>
    </>
  )
}
