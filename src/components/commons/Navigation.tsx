import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { Fragment } from "react"

const Wrapper = styled.div`
  height: 64px;
  background-color: #5729ff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
`
const MenuItem = styled.div`
  margin: 0px 60px;
  cursor: pointer;
  :hover {
    color: orange;
  }
`

const NAVIGATION_MENUS = [
  { name: "게시판2", page: "/boards2" },
  { name: "고양이모음", page: "/openapis" },
  { name: "자유게시판", page: "/boards" },
  { name: "중고마켓", page: "/markets" },
  { name: "마이페이지", page: "/mypages" },
]

export default function Navigation() {
  const router = useRouter()

  const onClickMenu = (event) => {
    router.push(event.currentTarget.id)
  }

  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <MenuItem id={el.page} onClick={onClickMenu}>
            {el.name}
          </MenuItem>
        </Fragment>
      ))}
      {/* <Ul>
        <Li>자유게시판</Li>
        <Li>중고마켓</Li>
        <Li>마이페이지</Li>
      </Ul> */}
    </Wrapper>
  )
}
