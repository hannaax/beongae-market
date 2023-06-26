import styled from "@emotion/styled"

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: yellow;
`
const Li = styled.li`
  list-style: none;
  padding: 10px;
`

export default function Header() {
  return (
    <>
      <Ul>
        <Li>자유게시판</Li>
        <Li>중고마켓</Li>
        <Li>마이페이지</Li>
      </Ul>
    </>
  )
}
