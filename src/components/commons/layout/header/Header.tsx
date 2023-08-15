import styled from "@emotion/styled"
import type { IQuery } from "../../src/commons/types/generated/types"
import { gql, useMutation, useQuery } from "@apollo/client"
import { useRecoilState } from "recoil"
import { useEffect } from "react"
import Link from "next/link"
import Searchbars01 from "../../searchbars/01/Searchbars01.container"
import { useRouter } from "next/router"
import {
  PaidOutlined,
  Person,
  PersonOutline,
  Logout,
} from "@mui/icons-material"
import * as S from "./Header.styles"
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./Header.queries"

export default function Header() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN)

  // console.log(data)
  const [logoutUser] = useMutation(LOGOUT_USER)

  const router = useRouter()

  //   useEffect(() => {
  //     if (localStorage.getItem("accessToken") === null) {
  //       alert("로그인 후 이용 가능합니다")
  //       void router.push("/section23/23-05-login-check-hoc")
  //     }
  //   }, [])
  // }

  return (
    <>
      <S.Wrapper>
        <div
          onClick={() => {
            void router.push("/")
          }}
        >
          <S.Logo src="/images/logo_yellow.png"></S.Logo>
        </div>
        {/* <Searchbars01 /> */}
        <S.RightBody>
          {data?.fetchUserLoggedIn ? (
            <div style={{ display: "flex" }}>
              <Link href="/product/new">
                <S.HeaderIcon>
                  <S.Img src="/images/header/sell.png" alt="" /> 판매하기
                </S.HeaderIcon>
              </Link>
              <S.DivisionLine>│</S.DivisionLine>
              <Link href="/mypage">
                <S.HeaderIcon>
                  {" "}
                  <S.Img src="/images/header/mystore.png" alt="" /> 내상점
                </S.HeaderIcon>
              </Link>
              <S.DivisionLine>│</S.DivisionLine>
              <Link href="#">
                <S.HeaderIcon>
                  {" "}
                  <Logout /> 로그아웃
                </S.HeaderIcon>
              </Link>
            </div>
          ) : (
            <>
              <Link href="/signin">
                <span style={{ paddingRight: "10px" }}>로그인</span>
              </Link>
              <Link href="/signup">
                <span>회원가입</span>
              </Link>
            </>
          )}
        </S.RightBody>
      </S.Wrapper>
    </>
  )
}
