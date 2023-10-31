import { useMutation } from "@apollo/client"
import { useState } from "react"
import { CREATE_USER, LOGIN_USER } from "./Signup.queries"
import type {
  IMutation,
  IMutationCreateUserArgs,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types"
import { Modal } from "antd"
import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { accessTokenState } from "../../../commons/stores"

import { useForm } from "react-hook-form"
import * as S from "./Signup.styles"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
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

export default function Signup(props) {
  const router = useRouter()
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

  const onChangeEmail = (event) => {
    setEmail(event.currentTarget.value)
  }
  const onChangePassword = (event) => {
    setPassword(event.currentTarget.value)
  }
  const onChangeName = (event) => {
    setName(event.currentTarget.value)
  }

  const onClickCreateUser = async (data) => {
    console.log(data)
    // if (!email) {
    //   Modal.error({
    //     content: "이메일을 입력해주세요",
    //   })
    // }
    // if (!password) {
    //   Modal.error({
    //     content: "비밀번호를 입력해주세요",
    //   })
    // }
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
      // 성공 시 로그인페이지로 이동
      console.log(result)
      // void router.push("/signin")
    } catch (error) {
      alert(error.message)
    }
  }

  const onClickLoginUser = async (data) => {
    console.log(data)
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
    console.log(accessToken)
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
  )
}
