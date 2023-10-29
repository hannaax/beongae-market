import styled from "@emotion/styled"
import type { IQuery } from "../../src/commons/types/generated/types"
import { gql, useMutation, useQuery } from "@apollo/client"
import { useRecoilState } from "recoil"
import { useEffect, useState } from "react"
import Link from "next/link"
import Searchbars01 from "../../searchbars/01/Searchbars01"
import { useRouter } from "next/router"
import {
  PaidOutlined,
  Person,
  PersonOutline,
  Logout,
} from "@mui/icons-material"
import * as S from "./Header.styles"
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./Header.queries"
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
} from "../../../units/board/list/BoardList.queries"

export default function Header() {
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN)

  // const [logoutUser] = useMutation(LOGOUT_USER)

  const router = useRouter()

  //   useEffect(() => {
  //     if (localStorage.getItem("accessToken") === null) {
  //       alert("로그인 후 이용 가능합니다")
  //       void router.push("/section23/23-05-login-check-hoc")
  //     }
  //   }, [])
  // }

  const [keyword, setKeyword] = useState("")

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS)

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT)

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    void refetch({ search: event.currentTarget.value, page: 1 })
    searchDebounce(event.currentTarget.value)
    // 디바운싱 최종 실행 후의 value 값을 저장하고,
    // title에 value 부분만 map에서 키워드 표시
    // '이것은 $$$$키워드$$$$입니다'
    // $$$$ 기준 split
  }

  const onChangeKeyword = (value) => {
    setKeyword(value)
  }

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
        <Searchbars01
          refetch={refetch}
          refetchBoardsCount={refetchBoardsCount}
          onChangeKeyword={onChangeKeyword}
        />
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
                <Button4 style={{ paddingRight: "10px" }}>로그인</Button4>
              </Link>
              <Link href="/signup">
                <Button4>회원가입</Button4>
              </Link>
            </>
          )}
        </S.RightBody>
      </S.Wrapper>
    </>
  )
}
