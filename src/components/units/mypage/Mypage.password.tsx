import * as S from "./Mypage.password.styles"

export default function PasswordChange() {
  return (
    <S.Wrapper>
      {/* <S.Header>비밀번호 변경</S.Header> */}
      <S.Body>
        <S.InputWrapper>
          <S.Label>현재 비밀번호</S.Label>
          <S.Input type="password" placeholder="현재 비밀번호를 입력해주세요" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>새 비밀번호</S.Label>
          <S.Input type="password" placeholder="새 비밀번호를 입력해주세요" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>새 비밀번호 확인</S.Label>
          <S.Input type="password" placeholder="새 비밀번호를 확인해주세요" />
        </S.InputWrapper>

        <p></p>
        <S.SubmitButton>비밀번호 변경</S.SubmitButton>
      </S.Body>
    </S.Wrapper>
  )
}
