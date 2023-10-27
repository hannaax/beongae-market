import type { ChangeEvent } from "react"
import _ from "lodash"
import { useRouter } from "next/router"
import { SearchIcon, Searchbar, SearchbarInput } from "./Searchbars01.styles"

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

  return (
    <Searchbar>
      <SearchbarInput
        placeholder="검색어를 입력해 주세요."
        onChange={onChangeSearchbar}
      />
      <SearchIcon />
    </Searchbar>
  )
}
