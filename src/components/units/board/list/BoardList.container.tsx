import { useQuery } from "@apollo/client"
import BoardListUI from "./BoardList.presenter"
import { useRouter } from "next/router"
import type { ChangeEvent, MouseEvent } from "react"
import { useState } from "react"
import _ from "lodash"
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types"
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries"

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
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
      onChangeSearch={onChangeSearch}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
      refetchBoardsCount={refetchBoardsCount}
    />
  )
}
