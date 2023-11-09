import type { ChangeEvent } from "react"
import _ from "lodash"
import { SearchIcon, Searchbar, SearchbarInput } from "./Searchbars01.styles"

interface Searchbars01Props {
  refetch: any
}

export default function Searchbars01(props: Searchbars01Props): JSX.Element {
  const getDebounce = _.debounce((value) => {
    void props.refetch({ search: value, page: 1 })
  }, 500)

  const onChangeSearchbar = (event: ChangeEvent<HTMLInputElement>): void => {
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
