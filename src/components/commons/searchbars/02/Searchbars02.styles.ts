import { Search } from "@mui/icons-material"
import styled from "@emotion/styled"

export const Searchbar = styled.div`
  width: 300px;
  height: 45px;
  /* background-color: #f5f2fc; */
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ccc;
`

export const SearchIcon = styled(Search)`
  font-size: 20px;
  cursor: pointer;
`

export const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  margin: 0px 20px;
`
