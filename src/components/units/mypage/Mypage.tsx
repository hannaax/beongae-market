import { useQuery } from "@apollo/client"
import useMoveToPage from "../../hooks/useMoveToPage"
import { FETCH_USER_LOGGED_IN } from "./Mypage.queries"
import type { IQuery } from "../../../commons/types/generated/types"

import * as S from "./Mypage.styles"

import {
  AccountCircle,
  SavingsOutlined,
  ShoppingCartOutlined,
  StoreOutlined,
} from "@mui/icons-material"
import { elapsedTime } from "../../commons/libraries/utils"
import React, { useState } from "react"
import MypageMarket from "./Mypage.market"
import MypagePick from "./Mypage.pick"
import RecentlyViewedItems from "./Mypage.recentlyview"
import PasswordChange from "./Mypage.password"

export default function Mypage() {
  const { onClickMoveToPage } = useMoveToPage()

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN)

  const [activeIndex, setActiveIndex] = useState(1)

  const tabs = [
    {
      tabTitle: "판매상품",
      tabCont: <MypageMarket />,
    },
    {
      tabTitle: "찜",
      tabCont: <MypagePick />,
    },
    {
      tabTitle: "최근본상품",
      tabCont: <RecentlyViewedItems />,
    },
    {
      tabTitle: "비밀번호 변경",
      tabCont: <PasswordChange />,
    },
  ]

  const tabClickHandler = (index) => {
    setActiveIndex(index)
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.AvatarWrapper>
            <AccountCircle sx={{ color: "#bbb", fontSize: "100px" }} />
            <S.Name>{data?.fetchUserLoggedIn.name}</S.Name>
          </S.AvatarWrapper>
          <S.DefaultInfo>
            <p>
              <SavingsOutlined sx={{ color: "#ffc700" }} />{" "}
              <strong>포인트</strong> 　　
              <S.Info>{data?.fetchUserLoggedIn.userPoint.amount}</S.Info>
            </p>
            <S.Div />
            <p>
              <StoreOutlined sx={{ color: "#ffc700" }} />{" "}
              <strong>상점오픈일</strong>{" "}
              <S.Info>{elapsedTime(data?.fetchUserLoggedIn.createdAt)}</S.Info>
            </p>
          </S.DefaultInfo>
        </S.Header>
        <div style={{ height: "400px" }}>
          <S.Tabmenu>
            <S.Ul>
              {tabs.map((section, index) => (
                <S.Li
                  key={index}
                  onClick={() => {
                    tabClickHandler(index)
                  }}
                >
                  {section.tabTitle}
                </S.Li>
              ))}
            </S.Ul>
          </S.Tabmenu>
          <div>{tabs[activeIndex].tabCont}</div>
        </div>
      </S.Wrapper>
    </S.Container>
  )
}
