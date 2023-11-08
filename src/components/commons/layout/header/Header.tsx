import { useEffect, Fragment, useState } from "react"
import { gql, useMutation, useQuery } from "@apollo/client"
import styled from "@emotion/styled"
import {
  PaidOutlined,
  Person,
  PersonOutline,
  Logout,
  AddBusiness,
  AddBusinessOutlined,
} from "@mui/icons-material"
import MenuIcon from "@mui/icons-material/Menu"
import Link from "next/link"
import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import type { IQuery } from "../../src/commons/types/generated/types"
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./Header.queries"
import * as S from "./Header.styles"
import MenuModal from "../../menuModal/MenuModal"
import Searchbars01 from "../../searchbars/01/Searchbars01"

const NAVIGATION_MENUS = [
  // { name: "게시판2", page: "/boards2" },
  // { name: "고양이모음", page: "/openapis" },
  { name: "중고마켓", page: "/product" },
  { name: "커뮤니티", page: "/boards" },
  // { name: "마이페이지", page: "/mypage" },
]

export default function Header() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN)

  // console.log(data)
  const [logoutUser] = useMutation(LOGOUT_USER)

  const router = useRouter()
  const [openMenu, setOpenMenu] = useState(false)

  //   useEffect(() => {
  //     if (localStorage.getItem("accessToken") === null) {
  //       alert("로그인 후 이용 가능합니다")
  //       void router.push("/section23/23-05-login-check-hoc")
  //     }
  //   }, [])
  // }

  const onClickMenu = (event) => {
    void router.push(event.currentTarget.id)
  }

  const onClickLogout = () => {
    const token = localStorage.getItem("accessToken")
    console.log("token", token)
    void logoutUser()
    localStorage.removeItem("accessToken")
  }

  const test = () => {
    // void
    setOpenMenu(!openMenu)
    setIsModalOpen(!isModalOpen)
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleConfirm = () => {
    console.log("confirm")
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      {isModalOpen && (
        <MenuModal
          title="대회에 참가하시겠습니까?"
          confirmText="참가하기"
          cancelText="돌아가기"
          isOpen={isModalOpen}
          handleConfirm={handleConfirm}
          handleCancel={handleCancel}
          isLoading={isLoading}
        >
          {NAVIGATION_MENUS.map((el) => (
            <Fragment key={el.page}>
              <S.MenuItem id={el.page} onClick={onClickMenu}>
                {el.name}
              </S.MenuItem>
            </Fragment>
          ))}
        </MenuModal>
      )}
      <S.Container>
        <S.Wrapper>
          <S.MenuIcon>
            <MenuIcon onClick={test} />
          </S.MenuIcon>
          <div
            onClick={() => {
              void router.push("/")
            }}
          >
            <S.LogoWrapper>
              <S.Logo src="/images/logo_yellow.png"></S.Logo>
            </S.LogoWrapper>
          </div>
          <S.Menu>
            {NAVIGATION_MENUS.map((el) => (
              <Fragment key={el.page}>
                <S.MenuItem id={el.page} onClick={onClickMenu}>
                  {el.name}
                </S.MenuItem>
              </Fragment>
            ))}
          </S.Menu>

          <S.Test className="block">
            <div
              onClick={() => {
                void router.push("/")
              }}
            >
              <S.LogoMini src="/images/logo_yellow.png"></S.LogoMini>
            </div>
          </S.Test>
          <S.RightBody>
            {data?.fetchUserLoggedIn ? (
              <div style={{ display: "flex" }}>
                <a href="/product/new">
                  <a>
                    <S.Button1>판매하기</S.Button1>
                    <S.ResponsiveIcon>
                      <AddBusinessOutlined />
                    </S.ResponsiveIcon>
                  </a>
                </a>
                <S.DivisionLine>│</S.DivisionLine>{" "}
                <a href="/mypage">
                  <S.Button2> 내상점</S.Button2>
                  <S.ResponsiveIcon>
                    <PersonOutline />
                  </S.ResponsiveIcon>
                </a>
                <S.DivisionLine>│</S.DivisionLine>
                <a href="/">
                  <S.Button2 onClick={onClickLogout}>나가기</S.Button2>
                  <S.ResponsiveIcon>
                    <Logout />
                  </S.ResponsiveIcon>
                </a>
              </div>
            ) : (
              <>
                <Link href="/signin">
                  <S.SigninButton>로그인</S.SigninButton>
                </Link>
                <Link href="/signup">
                  <S.SignupButton>회원가입</S.SignupButton>
                </Link>
              </>
            )}
          </S.RightBody>
        </S.Wrapper>
      </S.Container>
    </>
  )
}
