import styled from "@emotion/styled"

// export const Wrapper = styled.div`
//   padding: 72px 48px;
//   width: 100%;
//   border: solid 1px #ddd;
// `

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
  /* border-top: 2px solid #ccc; */
  margin-top: 20px;
`

export const TableBottom = styled.div`
  /* border-bottom: 2px solid #ccc; */
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  /* display: grid; */
  height: 150px;
  line-height: 52px;
  /* border-bottom: 1px solid #ccc; */
  border: 1px solid #ddd;
  cursor: pointer;
`

// export const ColumnHeaderBasic = styled.div`
//   width: 200px;
//   text-align: center;
//   font-weight: 600;
//   cursor: default;
// `

// export const ColumnHeaderTitle = styled.div`
//   width: 200px;
//   text-align: center;
//   font-weight: 600;
//   cursor: default;
// `

export const Img = styled.img`
  width: 150px;
  height: 150px;
`

export const ColumnBasic = styled.div`
  width: 100%;
  text-align: center;
`

export const ColumnTitle = styled.div`
  width: 100%;
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
  /* :hover {
    background-color: #f5f2fc;
  } */
`

export const TextToken = styled.span`
  color: ${(props) => (props.isMatched ? "red" : "black")};
`
