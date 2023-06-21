import styled from "@emotion/styled"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
  margin: 10px;
`
const Avatar = styled.img`
  width: 35px;
  height: 35px;
`
const Right = styled.div``
const Head = styled.div`
  display: flex;
  flex-direction: row;
`
const Writer = styled.div``
const Star = styled.div``
const Contents = styled.div``
const Bottom = styled.div``
const CreatedAt = styled.div``

export default function BoardCommentList() {
  return (
    <Wrapper>
      <Avatar src="/images/avatar.png" />
      <Right>
        <Head>
          <Writer>hanna</Writer>
          <Star>★</Star>
        </Head>
        <Contents>감사합니다.</Contents>
        <Bottom>
          <CreatedAt>2023/06/21</CreatedAt>
        </Bottom>
      </Right>
    </Wrapper>
  )
}
