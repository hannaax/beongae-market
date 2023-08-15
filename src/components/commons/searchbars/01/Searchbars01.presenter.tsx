import { SearchIcon, Searchbar, SearchbarInput } from "./Searchbars01.styles"

export default function Searchbars01UI(props) {
  return (
    <Searchbar>
      <SearchbarInput
        placeholder="상품명을 입력해 주세요."
        onChange={props.onChangeSearchbar}
      />
      <SearchIcon />
    </Searchbar>
  )
}
