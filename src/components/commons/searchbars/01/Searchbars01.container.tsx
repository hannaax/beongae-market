import Searchbars01UI from "./Searchbars01.presenter"
import type { ChangeEvent } from "react"
import _ from "lodash"
import { useRouter } from "next/router"

export default function Searchbars01(props): JSX.Element {
  const getDebounce = _.debounce((value) => {
    void props.refetch({ search: value, page: 1 })
    // void props.refetchBoardsCount({ search: value })
    // props.onChangeKeyword(value)
  }, 500)

  const router = useRouter()

  const onChangeSearchbar = (event: ChangeEvent<HTMLInputElement>): void => {
    // setTimeout(() => {
    //   void router.push("/boards")
    // }, 1000)
    getDebounce(event.target.value)
  }

  return <Searchbars01UI onChangeSearchbar={onChangeSearchbar} />
}
