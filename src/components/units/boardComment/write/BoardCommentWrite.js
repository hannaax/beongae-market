// import * as S from "./BoardCommentWrite.styles"

export default function BoardCommentWrite() {
  return (
    // <Wrapper>
    //   <Title></Title>
    //   <Wrapper2>
    //     <Info>
    //       <WriterInput></WriterInput>
    //       <PassWordInput></PassWordInput>
    //       <StarValue></StarValue>
    //     </Info>
    //     <Body>
    //       <Content></Content>
    //       <SubmitButton></SubmitButton>
    //     </Body>
    //   </Wrapper2>
    // </Wrapper>
    <Wrapper>
      <>
        <PencilIcon />
        <span>댓글</span>
      </>
      <InputWrapper>
        <Input></Input>
        <Input></Input>
        <Star></Star>
      </InputWrapper>
      <ContentsWrapper>
        <Contents></Contents>
        <BottomWrapper>
          <ContentsLength></ContentsLength>
          <Button></Button>
        </BottomWrapper>
      </ContentsWrapper>
    </Wrapper>
  )
}
