import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Wrapper = styled.div`
  /* width: 1200px; */
  margin: 100px 250px;
  height: 100%;
  width: 100%;
`

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  padding-left: 8px;
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
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Item = styled.div`
  margin: 10px;
  border: 1px solid #ddd;
  cursor: pointer;
`

export const Img = styled.img`
  width: 100%;
  height: 200px;
  background-color: #eee;
`

export const Text = styled.div`
  padding: 10px;
`

export const Name = styled.div`
  font-size: 16px;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Price = styled.div`
  font-size: 20px;
  font-weight: 700;
`

export const PostInfo = styled.div`
  color: #aaa;
`

export const Writer = styled.div``

export const CreatedAt = styled.div``

export const Like = styled.div``
