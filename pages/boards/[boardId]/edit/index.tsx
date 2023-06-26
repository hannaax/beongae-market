import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container"
import { useRouter } from "next/router"
import { FETCH_BOARD } from "../../../../src/components/units/board/detail/BoardDetail.queries"
import { useQuery } from "@apollo/client"

export default function BoardEditPage(): JSX.Element {
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  })

  return (
    <div>
      <BoardWrite isEdit={true} data={data} />
    </div>
  )
}
