import styled from "@emotion/styled"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 25px 50px;
`
const Logo = styled.div``
const User = styled.div``

export default function Header() {
  return (
    <Wrapper>
      <Logo>로고</Logo>
      <User>유저</User>
    </Wrapper>
  )
}
