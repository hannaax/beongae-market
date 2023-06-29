import { useQuery, gql } from "@apollo/client"
import BoardListUI from "./BoardList.presenter"
import { useRouter } from "next/router"
import type { MouseEvent } from "react"
import { useState } from "react"

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`

export default function BoardList(): JSX.Element {
  const router = useRouter()
  const { data, refetch } = useQuery(FETCH_BOARDS)
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT)
  const [startPage, setStartPage] = useState(1)

  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
  const onClickMoveToBoardNew = (): void => {
    void router.push("/boards/new")
  }

  const onClickMoveToBoardDetail = (event: MouseEvent): void => {
    void router.push(`/boards/${(event.target as HTMLDivElement).id}`)
  }

  const onClickPage = (event): void => {
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
    />
  )
}
