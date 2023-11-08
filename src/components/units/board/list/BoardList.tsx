import type { ChangeEvent, MouseEvent } from "react"
import { useState } from "react"
import { useQuery } from "@apollo/client"
import { Favorite } from "@mui/icons-material"
import _ from "lodash"
import { useRouter } from "next/router"
import { v4 as uuidv4 } from "uuid"
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
  IBoardReturn,
} from "../../../../commons/types/generated/types"
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries"

import * as S from "./BoardList.styles"
import { elapsedTime } from "../../../commons/libraries/utils"
import Paginations01 from "../../../commons/paginations/01/Paginations01"
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01"

const SECRET = "@#$%"

export default function BoardList(): JSX.Element {
  const router = useRouter()
  const [keyword, setKeyword] = useState("")

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS)

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT)

  console.log("board", data)

  const [startPage, setStartPage] = useState(1)

  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
  const onClickMoveToBoardNew = (): void => {
    void router.push("/boards/new")
  }

  const onClickMoveToBoardDetail = (event: MouseEvent): void => {
    void router.push(`/boards/${event.currentTarget.id}`)
  }

  const onClickPage = (event: MouseEvent): void => {
    void refetch({ page: Number(event.currentTarget.id) })
  }

  const onClickPrevPage = (): void => {
    if (startPage === 1) return
    setStartPage((prev) => prev - 10)
    void refetch({ page: startPage - 10 })
  }

  const onClickNextPage = (): void => {
    if (startPage + 10 > lastPage) return
    setStartPage((prev) => prev + 10)
    void refetch({ page: startPage + 10 })
  }

  const searchDebounce = (value: string) => {
    // _.debounce(() => {
    //   value
    // }, 500)
  }

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    void refetch({ search: event.currentTarget.value, page: 1 })
    searchDebounce(event.currentTarget.value)
    // 디바운싱 최종 실행 후의 value 값을 저장하고,
    // title에 value 부분만 map에서 키워드 표시
    // '이것은 $$$$키워드$$$$입니다'
    // $$$$ 기준 split
  }

  const onChangeKeyword = (value: string) => {
    setKeyword(value)
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.FlexTop>
          <Searchbars01
            refetch={refetch}
            refetchBoardsCount={refetchBoardsCount}
            onChangeKeyword={onChangeKeyword}
          />
          <S.Button onClick={onClickMoveToBoardNew}>
            <S.PencilIcon src="/images/board/list/write.png" />
            <S.ButtonText>글쓰기</S.ButtonText>
          </S.Button>
        </S.FlexTop>
        <S.FlexMid>
          <S.TableTop />
          {data?.fetchBoards.map((el: IBoardReturn) => (
            <S.Row key={el._id}>
              <S.ColumnTitle id={el._id} onClick={onClickMoveToBoardDetail}>
                {el.title
                  .replaceAll(keyword, `${SECRET}${keyword}${SECRET}`)
                  .split(SECRET)
                  .map((el) => (
                    <S.TextToken key={uuidv4()} isMatched={keyword === el}>
                      {el}
                    </S.TextToken>
                  ))}
              </S.ColumnTitle>
              <S.ColumnContents>{el.contents}</S.ColumnContents>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <S.ColumnBasic>{el.writer}</S.ColumnBasic>
                  <span style={{ padding: "0 5px", color: "#aaa" }}>·</span>
                  <S.ColumnBasic>{elapsedTime(el.createdAt)}</S.ColumnBasic>
                </div>
                <S.ColumnBasic>
                  <Favorite fontSize="inherit" />
                  <span> {el.likeCount}</span>
                </S.ColumnBasic>
              </div>
            </S.Row>
          ))}
          <S.TableBottom />
        </S.FlexMid>
        <S.FlexBottom>
          <S.Footer>
            {/* <S.Div></S.Div> */}
            <Paginations01
              refetch={refetch}
              count={dataBoardsCount?.fetchBoardsCount}
            />
            {/* <S.Button onClick={onClickMoveToBoardNew}>
              <S.PencilIcon src="/images/board/list/write.png" />
              <S.ButtonText>글쓰기</S.ButtonText>
            </S.Button> */}
          </S.Footer>
        </S.FlexBottom>
      </S.Wrapper>
    </S.Container>
  )
}
