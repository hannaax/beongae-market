// import * as S from "./BoardCommentWrite.styles"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
`
const PencilIcon = styled.div``
const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
const Input = styled.input``
const Star = styled.div``
const ContentsWrapper = styled.div`
  position: relative;
`
const Contents = styled.textarea`
  width: 1200px;
  height: 100px;
`
const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 5px;
`
const ContentsLength = styled.div``
const Button = styled.button``

export default function BoardCommentWrite() {
  return (
    <Wrapper>
      <>
        <PencilIcon />
        <span>댓글</span>
      </>
      <InputWrapper>
        <Input placeholder="작성자"></Input>
        <Input placeholder="비밀번호"></Input>
        <Star>★</Star>
      </InputWrapper>
      <ContentsWrapper>
        <Contents placeholder="이에 대한 민형사상 책임은 게시자에게 있습니다."></Contents>
        <BottomWrapper>
          <ContentsLength>0/100</ContentsLength>
          <Button>등록하기</Button>
        </BottomWrapper>
      </ContentsWrapper>
    </Wrapper>
  )
}
