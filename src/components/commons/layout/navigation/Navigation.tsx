import { Fragment } from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  height: 64px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #0a0a0a;
  border-bottom: 1px solid #bbb;
`
const MenuItem = styled.div`
  margin: 0px 60px;
  cursor: pointer;
  :hover {
    font-weight: 600;
  }
`

const NAVIGATION_MENUS = [
  { name: "중고마켓", page: "/product" },
  { name: "커뮤니티", page: "/boards" },
]

export default function Navigation() {
  const router = useRouter()

  const onClickMenu = (event) => {
    void router.push(event.currentTarget.id)
  }

  return (
    // <Wrapper>
    //   {NAVIGATION_MENUS.map((el) => (
    //     <Fragment key={el.page}>
    //       <MenuItem id={el.page} onClick={onClickMenu}>
    //         {el.name}
    //       </MenuItem>
    //     </Fragment>
    //   ))}
    // </Wrapper>
    <></>
  )
}
