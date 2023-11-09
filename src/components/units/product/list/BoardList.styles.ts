import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`
export const Wrapper = styled.div`
  width: 100%;
  margin: 100px 10vw;
  padding: 8px;
  @media (max-width: 800px) {
    margin: 100px 8vw;
  }
`
export const TableTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`

export const TableBottom = styled.div`
  border-bottom: 2px solid #ccc;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
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
  justify-content: center;
  padding-top: 50px;
`

export const PencilIcon = styled.img`
  width: 13px;
`

export const Button = styled.button`
  padding: 15px 22px;
  background-color: #ffc700;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  margin-left: 20px;
  cursor: pointer;
`

export const ButtonText = styled.span`
  display: inline-block;
  padding-left: 5px;
`

interface TextTokenProps {
  isMatched: boolean
}

export const TextToken = styled.span<TextTokenProps>`
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  border: 1px solid #ddd;
`

export const Img = styled.img`
  width: 100%;
  height: 200px;
  background-color: #eee;
`

export const Text = styled.div`
  width: 100%;
  padding: 10px;
`

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
