import { useState } from "react"
import { useMutation } from "@apollo/client"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useRecoilState } from "recoil"
import * as yup from "yup"
import type {
  IMutation,
  IMutationCreateUserArgs,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types"
import { CREATE_USER, LOGIN_USER } from "./Signup.queries"
import * as S from "./Signup.styles"
import { accessTokenState } from "../../../commons/stores"

interface SignupProps {
  signin?: boolean
  onClickCreateUser?: () => void
  onClickLoginUser?: () => void
}

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

export default function Signup(props: SignupProps) {
  const [, setAccessToken] = useRecoilState(accessTokenState)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [isActive, setIsActive] = useState(false)

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER)

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER)

  const onClickCreateUser = async (data) => {
    if (email && password && name) {
      setIsActive(true)
    }
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      })
    } catch (error) {
      alert(error.message)
    }
  }

  interface LoginData {
    email: string
    password: string
  }

  const onClickLoginUser = async (data: LoginData) => {
    const result = await loginUser({
      variables: {
        email: data.email,
        password: data.password,
      },
    })
    const accessToken = result.data?.loginUser.accessToken
    if (accessToken === undefined) {
      alert("로그인에 실패했습니다. 다시 시도해주세요!")
      return
    }
    setAccessToken(accessToken)
    localStorage.setItem(
      "accessToken",
      result.data?.loginUser.accessToken ?? ""
    )
  }

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  })

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Title>{props.signin ? "로그인" : "회원가입"}</S.Title>
          <form
            onSubmit={handleSubmit(
              props.signin ? onClickLoginUser : onClickCreateUser
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
            <S.SubmitButton
              style={{ backgroundColor: formState.isValid ? "#ffc700" : "" }}
              onClick={
                props.signin ? props.onClickLoginUser : props.onClickCreateUser
              }
            >
              {props.signin ? "로그인" : "회원가입"}
            </S.SubmitButton>
          </form>
        </S.Wrapper>
      </S.Container>
    </>
  )
}
