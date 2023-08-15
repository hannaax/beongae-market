import { useMutation } from "@apollo/client"
import SignupUI from "./signup.presenter"
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
import { Modal } from "antd"
import { toast } from "react-toastify"

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
            name: "짱아",
          },
        },
      })
      // 성공 시 로그인페이지로 이동
      console.log(result)
      // void router.push("/signin")
    } catch (error) {
      toast(error.message)
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

  return (
    <SignupUI
      signin={props.signin}
      onChangeEmail={onChangeEmail}
      inChangePassword={onChangePassword}
      onChangeName={onChangeName}
      onClickCreateUser={onClickCreateUser}
      onClickLoginUser={onClickLoginUser}
      isActive={isActive}
    />
  )
}
