import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import type { ChangeEvent, MouseEvent } from "react"
import { useState } from "react"
import _ from "lodash"
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
  IBoardReturn,
} from "../../../../commons/types/generated/types"
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries"

import { elapsedTime } from "../../../commons/libraries/utils"
import * as S from "./BoardList.styles"
import Paginations01 from "../../../commons/paginations/01/Paginations01"
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01"
import { v4 as uuidv4 } from "uuid"
import { Favorite } from "@mui/icons-material"

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
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <S.ColumnBasic>{el.writer}</S.ColumnBasic>
                  <span style={{ padding: "0 5px" }}>·</span>
                  <S.ColumnBasic>{elapsedTime(el.createdAt)}</S.ColumnBasic>
                </div>
                <S.ColumnBasic>
                  <Favorite fontSize="small" /> 1
                </S.ColumnBasic>
              </div>
            </S.Row>
          ))}
          <S.TableBottom />
        </S.FlexMid>
        <S.FlexBottom>
          <Paginations01
            refetch={refetch}
            count={dataBoardsCount?.fetchBoardsCount}
          />
          <div>
            <S.Footer>
              <S.Button onClick={onClickMoveToBoardNew}>
                <S.PencilIcon src="/images/board/list/write.png" />글 작성하기
              </S.Button>
            </S.Footer>
          </div>
        </S.FlexBottom>
      </S.Wrapper>
    </S.Container>
  )
}
