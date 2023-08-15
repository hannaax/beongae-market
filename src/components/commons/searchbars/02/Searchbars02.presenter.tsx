import { SearchIcon, Searchbar, SearchbarInput } from "./Searchbars02.styles"

export default function Searchbars02UI(props) {
  return (
    <Searchbar>
      <SearchIcon />
      <SearchbarInput
        placeholder="검색어를 입력해 주세요."
        onChange={props.onChangeSearchbar}
      />
    </Searchbar>
  )
}
