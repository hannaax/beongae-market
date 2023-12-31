import styled from "@emotion/styled"
import { Search } from "@mui/icons-material"

export const Searchbar = styled.div`
  width: 40vw;
  height: 50px;
  border: 3px solid #ffc700;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1000px) {
    width: 45vw;
  }
`

export const SearchIcon = styled(Search)`
  font-size: 24px;
  color: #0c0c0c;
  margin-right: 10px;
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
