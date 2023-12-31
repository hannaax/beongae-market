import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

export const Wrapper = styled.div`
  width: 100%;
  margin: 110px 15vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  @media (max-width: 800px) {
    margin: 110px 8vw;
  }
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
  line-height: 35px;
  border-bottom: 1px solid #ddd;
  padding: 10px 25px;
  cursor: pointer;
`

export const ColumnHeaderBasic = styled.div`
  font-weight: 800;
  cursor: default;
`

export const ColumnHeaderTitle = styled.div`
  font-weight: 800;
  cursor: default;
`

export const ColumnContents = styled.div``

export const ColumnBasic = styled.div`
  text-align: center;
  color: #aaa;
  font-size: 15px;
`

export const ColumnTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
`

export const Search = styled.input`
  width: 250px;
  height: 30px;
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  padding-top: 50px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const Div = styled.div`
  width: 20px;
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
