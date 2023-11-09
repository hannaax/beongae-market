import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { v4 as uuidv4 } from "uuid"
import { FETCH_USEDITEMS_OF_THE_BEST } from "./Home.queries"

import * as S from "./Home.styles"

export default function Home(props) {
  const { data } = useQuery(FETCH_USEDITEMS_OF_THE_BEST)

  const router = useRouter()

  const onClickMoveToBoardDetail = (event: MouseEvent): void => {
    void router.push(`/product/${event.currentTarget.id}`)
  }

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Title>인기상품</S.Title>
          <S.ItemWrap>
            {data?.fetchUseditemsOfTheBest.map((product) => (
              <S.Item
                key={uuidv4()}
                id={product._id}
                onClick={onClickMoveToBoardDetail}
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
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#eee",
                    }}
                  ></div>
                )}
                <S.Text>
                  <S.Name>{product.name}</S.Name>
                  <S.Price>{product.price.toLocaleString()}원</S.Price>
                  <S.PostInfo>
                    <S.CreatedAt>{product.createdAt}</S.CreatedAt>
                    <S.Like>♥ {product.pickedCount}</S.Like>
                  </S.PostInfo>
                </S.Text>
              </S.Item>
            ))}
          </S.ItemWrap>
        </S.Wrapper>
      </S.Container>
    </>
  )
}
