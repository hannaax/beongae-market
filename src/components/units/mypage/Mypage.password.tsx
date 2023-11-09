import { useMutation } from "@apollo/client"
import { useForm } from "react-hook-form"
import { RESET_USER_PASSWORD } from "./Mypage.password.queries"
import * as S from "./Mypage.password.styles"
import {
  type IMutation,
  type IMutationResetUserPasswordArgs,
} from "../../../commons/types/generated/types"

export default function PasswordChange() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm()

  const [resetUserPassword] = useMutation<
    Pick<IMutation, "resetUserPassword">,
    IMutationResetUserPasswordArgs
  >(RESET_USER_PASSWORD)

  const submitForm = (formValues: SignUpForm) => {
    // const { emailAuthNumber, passwordConfirm, ...rest } = formValues
    // console.log({ ...rest })
    // signUpMutation.mutate({ ...rest })
  }

  const watchedPassword = watch("password")

  return (
    <form>
      <S.Wrapper onSubmit={handleSubmit(submitForm)}>
        {/* <S.Header>비밀번호 변경</S.Header> */}
        <S.Body>
          <S.InputWrapper>
            <S.Label>현재 비밀번호</S.Label>
            <S.Input
              type="password"
              placeholder="현재 비밀번호를 입력해주세요"
              {...register("nowPassword", {
                required: "현재 비밀번호를 입력해주세요.",
              })}
            />
          </S.InputWrapper>
          <div>{errors.nowPassword?.message as string}</div>
          <S.InputWrapper>
            <S.Label>새 비밀번호</S.Label>
            <S.Input
              type="password"
              placeholder="새 비밀번호를 입력해주세요"
              {...register("newPassword", {
                required: "새 비밀번호를 입력해주세요.",
              })}
            />
          </S.InputWrapper>
          <div>{errors.newPassword?.message as string}</div>
          <S.InputWrapper>
            <S.Label>새 비밀번호 확인</S.Label>
            <S.Input
              type="password"
              placeholder="새 비밀번호를 입력해주세요"
              {...register("passwordConfirm", {
                required: "새 비밀번호를 입력해주세요.",
                validate: (value) =>
                  value === watchedPassword || "비밀번호가 일치하지 않습니다.",
              })}
            />
          </S.InputWrapper>
          <div>{errors.passwordConfirm?.message as string}</div>

          <p></p>
          <S.SubmitButton type="submit">비밀번호 변경</S.SubmitButton>
        </S.Body>
      </S.Wrapper>
    </form>
  )
}
