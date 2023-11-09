import { type MouseEvent } from "react"
import InfiniteScroll from "react-infinite-scroller"
import { v4 as uuidv4 } from "uuid"
import * as S from "./BoardList.styles"
import { elapsedTime } from "../../../commons/libraries/utils"
import Paginations01 from "../../../commons/paginations/01/Paginations01"
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01"
import "react-datepicker/dist/react-datepicker.css"

interface IBoardListUIProps {
  data: any
  onClickMoveToBoardNew: (event: MouseEvent<HTMLButtonElement>) => void
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void
  keyword: string
  refetch: (keyword: string) => void
  onLoadMore: () => void
  count: number
}

const SECRET = "@#$%"

export default function BoardListUI(props: IBoardListUIProps): JSX.Element {
  return (
    <S.Container>
      <S.Wrapper>
        <S.TableTop>
          <S.States></S.States>
          <Searchbars01 refetch={props.refetch} />
          <a href="/product/new">
            <S.Button>
              <S.PencilIcon src="/images/board/list/write.png" />
              <S.ButtonText>판매하기</S.ButtonText>
            </S.Button>
          </a>
          <S.DateSearch></S.DateSearch>
        </S.TableTop>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true || false}
        >
          <S.ItemWrap>
            {props.data?.fetchUseditems.map((product) => (
              <S.Item
                key={uuidv4()}
                id={product._id}
                onClick={props.onClickMoveToBoardDetail}
              >
                {product.images.length ? (
                  <S.Img
                    src={`https://storage.googleapis.com/${product.images.find(
                      (img: string) => img
                    )}`}
                  />
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
                  </S.PostInfo>
                </S.Text>
              </S.Item>
            ))}
          </S.ItemWrap>
        </InfiniteScroll>
        <S.Footer>
          <Paginations01 refetch={props.refetch} count={props.count} />
        </S.Footer>
      </S.Wrapper>
    </S.Container>
  )
}
