import type { MouseEvent } from "react"
import type { IBoardReturn } from "../../../../commons/types/generated/types"
import { getDate } from "../../../commons/libraries/utils"
import * as S from "./BoardList.styles"
import Paginations01 from "../../../commons/paginations/01/Paginations01"
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container"
import { v4 as uuidv4 } from "uuid"
import { Create, Favorite } from "@mui/icons-material"
import Link from "next/link"

interface IBoardListUIProps {
  data: any
  onClickMoveToBoardNew: (event: MouseEvent<HTMLButtonElement>) => void
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void
}

const SECRET = "@#$%"

export default function BoardListUI(props: IBoardListUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.TableTop>
        <S.States>
          <S.State>판매중상품</S.State>
          <S.State>판매된상품</S.State>
        </S.States>
        <S.DateSearch>날짜 검색</S.DateSearch>
      </S.TableTop>
      <S.ItemWrap>
        {props.data?.fetchUseditems.map((product) => (
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
              <S.Name>
                {product.name
                  .replaceAll(
                    props.keyword,
                    `${SECRET}${props.keyword}${SECRET}`
                  )
                  .split(SECRET)
                  .map((el) => (
                    <S.TextToken
                      key={uuidv4()}
                      isMatched={props.keyword === el}
                    >
                      {el}
                    </S.TextToken>
                  ))}
              </S.Name>
              <S.Price>{product.price}원</S.Price>
              <S.PostInfo>
                <S.CreatedAt>{product.createdAt}</S.CreatedAt>
                <S.Like>
                  <Favorite fontSize="small" /> {product.pickedCount}
                </S.Like>
              </S.PostInfo>
            </S.Text>
            {/* <button onClick={props.onClickMoveToCart(product)} id={product._id}>
              +
            </button> */}
          </S.Item>
        ))}
      </S.ItemWrap>
      <Paginations01 refetch={props.refetch} count={props.count} />
      <S.Footer>
        <Link href="/product/new">
          <S.Button>
            <Create fontSize="small" />
            <a>상품 등록</a>
          </S.Button>
        </Link>
      </S.Footer>
    </S.Wrapper>
  )
}
