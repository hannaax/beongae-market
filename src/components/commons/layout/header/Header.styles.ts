import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 25px 100px;
  position: fixed;
  top: 0;
  z-index: 3;
  background-color: #fff;
  @media (max-width: 1000px) {
    padding: 30px;
  }
`
export const Logo = styled.img`
  width: 150px;
`

export const Menu = styled.div`
  display: flex;
  font-size: 20px;
  @media (max-width: 800px) {
    display: none;
  }
`

export const MenuItem = styled.div`
  margin: 0px 30px;
  cursor: pointer;
  font-weight: 500;
  /* :hover {
    font-weight: 600;
  } */
`

export const RightBody = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderIcon = styled.div`
  padding: 10px;
`

export const DivisionLine = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
`

export const Img = styled.img`
  width: 20px;
`
