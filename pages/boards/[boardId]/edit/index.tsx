import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { FETCH_BOARD } from "../../../../src/components/units/board/detail/BoardDetail.queries"
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite"

export default function BoardEditPage(): JSX.Element {
  const router = useRouter()

  const { data, refetch } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  })

  return (
    <div>
      <BoardWrite isEdit={true} data={data} refetch={refetch} />
    </div>
  )
}
