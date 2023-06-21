import { useQuery, gql } from "@apollo/client"
import BoardListUI from "./BoardList.presenter"
import { useRouter } from "next/router"

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

export default function BoardList() {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARDS)

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new")
  }

  const onClickMoveToBoardDetail = (event) => {
    router.push(`/boards/${event.target.id}`)
  }

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  )
}
