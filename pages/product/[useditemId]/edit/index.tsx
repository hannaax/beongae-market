import BoardWrite from "../../../../src/components/units/product/write/BoardWrite"
import { useRouter } from "next/router"
import { FETCH_USEDITEM } from "../../../../src/components/units/product/detail/BoardDetail.queries"
import { useQuery } from "@apollo/client"

export default function ProductEditPage(): JSX.Element {
  const router = useRouter()

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  })

  return (
    <div>
      <BoardWrite isEdit={true} data={data} />
    </div>
  )
}
