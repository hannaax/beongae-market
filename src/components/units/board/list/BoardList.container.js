import { useQuery, gql } from "@apollo/client"
import BoardListUI from "./BoardList.presenter"

const FETCH_BOARDS = gql`
    query{
        fetchBoards(
            message
        )
    }
    `

export default function BoardList() {
  const { data } = useQuery(FETCH_BOARDS)

  return <BoardListUI />
}
