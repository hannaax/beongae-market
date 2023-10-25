import { type MouseEvent, useState } from "react"
import type { IBoardReturn } from "../../../../commons/types/generated/types"
import { elapsedTime, getDate } from "../../../commons/libraries/utils"
import * as S from "./BoardList.styles"
import Paginations01 from "../../../commons/paginations/01/Paginations01"
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01"
import { v4 as uuidv4 } from "uuid"
import { Create, Favorite } from "@mui/icons-material"
import Link from "next/link"
import InfiniteScroll from "react-infinite-scroller"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

interface IBoardListUIProps {
  data: any
  onClickMoveToBoardNew: (event: MouseEvent<HTMLButtonElement>) => void
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void
}

const SECRET = "@#$%"

export default function BoardListUI(props: IBoardListUIProps): JSX.Element {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  // const images = props.shoppingData?.map((product) => {
  //   return product.image
  // })

  return (
    <S.Container>
      <S.Wrapper>
        <S.TableTop>
          <S.States>
            {/* <S.State>판매중상품</S.State>
            <S.State>판매된상품</S.State> */}
          </S.States>
          <Searchbars01
            refetch={props.refetch}
            // refetchBoardsCount={props.refetchBoardsCount}
            // onChangeKeyword={props.onChangeKeyword}
          />
          {/* <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          /> */}
          <S.DateSearch></S.DateSearch>
        </S.TableTop>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true || false}
        >
          <S.ItemWrap>
            {props.data?.fetchUseditems.map((product, i) => (
              <S.Item
                key={uuidv4()}
                id={product._id}
                onClick={props.onClickMoveToBoardDetail}
              >
                {product.images.length ? (
                  <S.Img
                    src={`https://storage.googleapis.com/${product.images.find(
                      (img) => img
                    )}`}
                  />
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
                  <S.Price>{product.price.toLocaleString()}원</S.Price>
                  <S.PostInfo>
                    <S.CreatedAt>{elapsedTime(product.createdAt)}</S.CreatedAt>
                    {/* <S.Like>
                    <Favorite fontSize="small" /> {product.pickedCount}
                  </S.Like> */}
                  </S.PostInfo>
                </S.Text>
                {/* <button onClick={props.onClickMoveToCart(product)} id={product._id}>
              +
            </button> */}
              </S.Item>
            ))}
          </S.ItemWrap>
        </InfiniteScroll>
        <Paginations01 refetch={props.refetch} count={props.count} />
        {/* <S.Footer>
        <Link href="/product/new">
          <S.Button>
            <Create fontSize="small" />
            <a>상품 등록</a>
          </S.Button>
        </Link>
      </S.Footer> */}
      </S.Wrapper>
    </S.Container>
  )
}
