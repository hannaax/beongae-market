import Searchbars02UI from "./Searchbars02.presenter"
import type { ChangeEvent } from "react"
import _ from "lodash"

export default function Searchbars02(props): JSX.Element {
  const getDebounce = _.debounce((value) => {
    void props.refetch({ search: value, page: 1 })
    void props.refetchBoardsCount({ search: value })
    props.onChangeKeyword(value)
  }, 500)

  const onChangeSearchbar = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.target.value)
  }

  return <Searchbars02UI onChangeSearchbar={onChangeSearchbar} />
}
