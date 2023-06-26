import { useQuery, gql } from "@apollo/client"
import BoardListUI from "./BoardList.presenter"
import { useRouter } from "next/router"
import type { MouseEvent } from "react"

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      createdAt
    }
  }
`

export default function BoardList(): JSX.Element {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARDS)

  const onClickMoveToBoardNew = (): void => {
    void router.push("/boards/new")
  }

  const onClickMoveToBoardDetail = (event: MouseEvent): void => {
    void router.push(`/boards/${(event.target as HTMLDivElement).id}`)
  }

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  )
}
