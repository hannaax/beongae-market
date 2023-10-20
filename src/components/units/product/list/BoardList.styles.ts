import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`
export const Wrapper = styled.div`
  width: 100%;
  margin: 100px;
  padding: 8px;
`
export const TableTop = styled.div`
  /* border-top: 2px solid #ccc;
  margin-top: 20px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
`

export const TableBottom = styled.div`
  border-bottom: 2px solid #ccc;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  /* height: 52px;
  line-height: 52px; */
  border-bottom: 1px solid #ccc;

  :hover {
    color: #027efa;
  }
`

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
  font-weight: 800;
`

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
  font-weight: 800;
`

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
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

export const States = styled.div``

export const State = styled.span`
  padding-right: 10px;
`

export const DateSearch = styled.div``

export const ItemWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Item = styled.div`
  margin: 10px;
`

export const Img = styled.img`
  width: 200px;
  height: 200px;
`

export const Text = styled.div``

export const Name = styled.div`
  font-size: 16px;
`

export const Price = styled.div`
  font-size: 20px;
  font-weight: 700;
`

export const PostInfo = styled.div`
  color: #bbb;
  font-size: 14px;
`

export const Writer = styled.div``

export const CreatedAt = styled.div``

export const Like = styled.div``
