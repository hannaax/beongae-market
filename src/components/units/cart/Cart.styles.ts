import styled from "@emotion/styled"

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`
export const TableTop = styled.div`
  border-top: 2px solid #ccc;
  margin-top: 20px;
`

export const TableBottom = styled.div`
  border-bottom: 2px solid #ccc;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
`

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
  font-weight: 800;
  cursor: default;
`

export const ColumnHeaderTitle = styled.div`
  width: 60%;
  text-align: center;
  font-weight: 800;
  cursor: default;
`

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`

export const ColumnTitle = styled.div`
  width: 60%;
  text-align: center;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: yellow;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  cursor: pointer;
`

interface TextTokenProps {
  isMatched: boolean
}

export const TextToken = styled.span<TextTokenProps>`
  color: ${(props) => (props.isMatched ? "red" : "black")};
`
