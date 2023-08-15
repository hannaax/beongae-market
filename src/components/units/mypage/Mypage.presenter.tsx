import * as S from "./Mypage.styles"
import useMoveToPage from "../../hooks/useMoveToPage"
import {
  AccountCircle,
  SavingsOutlined,
  ShoppingCartOutlined,
  StoreOutlined,
} from "@mui/icons-material"
import { elapsedTime } from "../../commons/libraries/utils"
import React from "react"

export default function MypageUI(props) {
  const { onClickMoveToPage } = useMoveToPage()

  const { children, data } = props

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.LeftWrapper>
            <S.InfoWrapper>
              <S.AvatarWrapper>
                <AccountCircle sx={{ color: "#bbb", fontSize: "100px" }} />
                <S.Name>{props.data?.fetchUserLoggedIn.name}</S.Name>
              </S.AvatarWrapper>
              <S.DefaultInfo>
                <p>
                  <SavingsOutlined sx={{ color: "#ffc700" }} />{" "}
                  <strong>포인트</strong>{" "}
                  {props.data?.fetchUserLoggedIn.userPoint.amount}
                </p>
                <p>
                  <StoreOutlined sx={{ color: "#ffc700" }} />{" "}
                  <strong>상점오픈일</strong>{" "}
                  {elapsedTime(props.data?.fetchUserLoggedIn.createdAt)}
                </p>
              </S.DefaultInfo>
              <S.Navigation>
                <S.LI onClick={onClickMoveToPage("/mypage/market")}>
                  <ShoppingCartOutlined sx={{ color: "#ffc700" }} /> 내 장터
                </S.LI>
                <S.LI onClick={onClickMoveToPage("/mypage/point")}>
                  <SavingsOutlined sx={{ color: "#ffc700" }} /> 내 포인트
                </S.LI>
                <S.LI onClick={onClickMoveToPage("/mypage/profile")}>
                  <AccountCircle sx={{ color: "#ffc700" }} /> 내 프로필
                </S.LI>
              </S.Navigation>
            </S.InfoWrapper>
          </S.LeftWrapper>
          {/* <S.RightWrapper>{props.children}</S.RightWrapper> */}
          <S.RightWrapper>
            {/* {React.cloneElement(children, { data })} */}
            {children && React.cloneElement(children, { props: data })}

            {/* {children && React.cloneElement(children, { props: data })}
            (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { test: data });
    }
    return child; */}
          </S.RightWrapper>
        </S.Wrapper>
      </S.Container>
      0
    </>
  )
}
