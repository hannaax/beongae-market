import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { vistiedPageState } from "../../../src/commons/stores"

export default function useMoveToPage() {
  const router = useRouter()
  const [visitedPage, setVisitedPage] = useRecoilState(vistiedPageState)

  const onClickMoveToPage = (path: string) => () => {
    setVisitedPage(path)
    void router.push(path)
  }

  return {
    visitedPage,
    onClickMoveToPage,
  }
}
