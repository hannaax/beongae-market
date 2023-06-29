import styled from "@emotion/styled"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 25px 50px;
`
const Logo = styled.img`
  width: 120px;
`
const User = styled.div``

export default function Header() {
  return (
    <Wrapper>
      {/* <Logo src="/images/logo.png"></Logo> */}로고
      <User>유저</User>
    </Wrapper>
  )
}
