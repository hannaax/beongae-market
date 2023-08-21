import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`

export const Wrapper = styled.div`
  width: 100%;
  margin: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
`

export const FlexTop = styled.div`
  display: flex;
  justify-content: center;
`

export const FlexMid = styled.div`
  margin: 40px 0;
`
export const FlexBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TableTop = styled.div`
  border-top: 2px solid #ccc;
  margin-top: 20px;
`

export const TableBottom = styled.div`
  border-bottom: 2px solid #ddd;
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 45px;
  border-bottom: 1px solid #ddd;
  padding: 10px 25px;
  cursor: pointer;
`

export const ColumnHeaderBasic = styled.div`
  /* width: 10%; */
  /* text-align: center; */
  font-weight: 800;
  cursor: default;
`

export const ColumnHeaderTitle = styled.div`
  /* width: 70%; */
  /* text-align: center; */
  font-weight: 800;
  cursor: default;
`

export const ColumnBasic = styled.div`
  /* width: 10%; */
  text-align: center;
  /* padding-right: 15px; */
  color: #aaa;
`

export const ColumnTitle = styled.div`
  /* width: 70%; */
  /* text-align: center; */
  font-size: 18px;
  font-weight: 600;
`

export const Search = styled.input`
  width: 250px;
  height: 30px;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`

export const PencilIcon = styled.img``

export const Button = styled.button`
  width: 171px;
  height: 52px;
  /* background-color: ${({ theme }) => theme.colors.yellow}; */
  background-color: #ffc700;
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
