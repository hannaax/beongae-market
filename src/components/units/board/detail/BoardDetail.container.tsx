import { useQuery, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import BoardDetailUI from "./BoardDetail.presenter"
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries"
import type { MouseEvent } from "react"

export default function BoardDetail(): JSX.Element {
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  })

  const [deleteBoard] = useMutation(DELETE_BOARD)

  const onClickDelete = (event: MouseEvent): void => {
    void deleteBoard({
      variables: { boardId: Number(event.currentTarget.id) },
      refetchQueries: [
        { queries: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    })
  }

  const onClickMove = (): void => {
    void router.push(`/boards/${router.query.boardId}/edit`)
  }

  return (
    <BoardDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickMove={onClickMove}
    />
  )
}
