import { useForm } from "react-hook-form"
import * as S from "./Signup.styles"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import type { ISignupUIProps } from "./Signup.types"
// import { ReactComponent as Kakao } from "./images/login/kakao.svg"
// import { ReactComponent as Google } from "./images/login/google.svg"

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다")
    .required("이메일은 필수 입력입니다"),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자입니다")
    .max(15, "비밀번호는 최대 15자입니다")
    .required("비밀번호는 필수 입력입니다"),
})

export default function SignupUI(props: ISignupUIProps) {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  })
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <h1>{props.signin ? "로그인" : "회원가입"}</h1>
          <form
            onSubmit={handleSubmit(
              props.signin ? props.onClickLoginUser : props.onClickCreateUser
            )}
            style={{ width: "100%" }}
          >
            <S.Input type="text" placeholder="이메일" {...register("email")} />
            <S.ErrorMessage>{formState.errors.email?.message}</S.ErrorMessage>
            <S.Input
              type="password"
              placeholder="비밀번호"
              {...register("password")}
            />
            <S.ErrorMessage>
              {formState.errors.password?.message}
            </S.ErrorMessage>
            {/* {props.signin ? "" : <Input {...register(name)} />} */}
            <S.SubmitButton
              style={{ backgroundColor: formState.isValid ? "#ffc700" : "" }}
              // isActive={props.isActive}
              onClick={
                props.signin ? props.onClickLoginUser : props.onClickCreateUser
              }
            >
              {props.signin ? "로그인" : "회원가입"}
            </S.SubmitButton>
            {/* <S.SubmitButton
              style={{
                backgroundColor: "#fff",
                border: "1px solid #999",
              }}
            >
              카카오 로그인
            </S.SubmitButton>
            <S.SubmitButton
              style={{
                backgroundColor: "#fff",
                border: "1px solid #999",
              }}
            >
              구글 로그인
            </S.SubmitButton> */}
          </form>
        </S.Wrapper>
      </S.Container>
    </>

    // ===========================

    /* <Input
type="text"
placeholder="이메일"
onChange={props.onChangeEmail}
/>
<Input
type="password"
placeholder="비밀번호"
onChange={props.onChangePassword}
/>
{props.signin ? (
""
) : (
<Input
  type="text"
  placeholder="이름"
  onChange={props.onChangePassword}
/>
)}
<SubmitButton
isActive={props.isActive}
onClick={
  props.signin ? props.onClickLoginUser : props.onClickCreateUser
}
>
{props.signin ? "로그인" : "회원가입"}
</SubmitButton> */
  )
}
