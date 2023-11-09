import styled from "@emotion/styled"

export const WrapperHeader = styled.div`
  margin-bottom: 15px;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const Nav = styled.div`
  width: 200px;
  height: 30px;
  display: flex;
`

export const Categories = styled.ul``

export const Category = styled.li``

export const DivisionLine = styled.div``

export const TableTop = styled.div`
  margin-top: 20px;
`

export const TableBottom = styled.div``

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 150px;
  line-height: 28px;
  border: 1px solid #ddd;
  cursor: pointer;
`

export const Img = styled.img`
  width: 150px;
  height: 150px;
`

export const ColumnBasic = styled.div`
  width: 100%;
`

export const ColumnTitle = styled.div`
  width: 100%;
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

export const ItemNumber = styled.span`
  display: inline-block;
  margin-bottom: 3.5px;
  margin-left: 8px;
`

export const Div = styled.span`
  display: inline-block;
  margin-top: 1px;
`

export const Date = styled.span`
  display: inline-block;
  font-size: 14px;
  color: gray;
`

export const SoldButton = styled.button`
  background-color: #eee;
  padding: 2px 4px;
`
