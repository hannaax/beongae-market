import { useQuery, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import BoardDetailUI from "./BoardDetail.presenter"
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries"

export default function BoardDetail() {
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  })

  const [deleteBoard] = useMutation(DELETE_BOARD)

  const onClickDelete = (event) => {
    deleteBoard({
      variables: { number: Number(event.target.id) },
      refetchQueries: [{ queries: FETCH_BOARD }],
    })
  }

  return <BoardDetailUI data={data} onClickDelete={onClickDelete} />
}
