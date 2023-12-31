import { keyframes } from "@emotion/react"
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
  height: 80px;
  padding: 25px 100px;
  position: fixed;
  top: 0;
  z-index: 5;
  background-color: #fff;
  box-shadow: 0 0 8px #ccc;
  border-bottom: 1px solid #ddd;

  @media (max-width: 1000px) {
    padding: 30px;
  }
`

export const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 800px) {
    /* width: 100%; */
    display: flex;
    justify-content: center;
  }
`

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 800px) {
    /* width: 100%; */
    display: flex;
    justify-content: center;
    display: none;
  }
`

export const Logo = styled.img`
  width: 140px;
`

export const LogoMini = styled.img`
  width: 110px;
  cursor: pointer;
`

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  @media (max-width: 800px) {
    position: absolute;
    top: 78px;
    left: 0px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    display: none;
    border-top: 1px solid #ccc;
    padding: 20px 0;
    width: 22%;
    height: 1000px;

    /* &.block {
      display: block;
    } */
  }
`

export const Test = styled.div`
  display: none;
  @media (max-width: 800px) {
    &.block {
      display: block;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`

export const MenuItem = styled.div`
  margin: 0px 30px;
  cursor: pointer;
  font-weight: 500;
  /* :hover {
    font-weight: 600;
  } */
  @media (max-width: 800px) {
    padding: 10px 0;
    display: flex;
    justify-content: center;
  }
`

export const RightBody = styled.div`
  display: flex;
  align-items: center;
`

export const Button1 = styled.div`
  padding: 10px 2px;
  width: 63px;
  display: block;
  cursor: pointer;
  @media (max-width: 800px) {
    display: none;
  }
`

export const Button2 = styled.div`
  padding: 10px 2px;
  width: 49px;
  display: block;
  cursor: pointer;
  @media (max-width: 800px) {
    display: none;
  }
`

export const ResponsiveIcon = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
    padding-top: 8px;
  }
`

export const Button3 = styled.div`
  padding: 10px 5px;
  width: 55px;
  cursor: pointer;
`

export const SigninButton = styled.div`
  padding: 10px 5px;
  width: 55px;
  cursor: pointer;
`

export const SignupButton = styled.div`
  padding: 10px 5px;
  width: 75px;
`

export const DivisionLine = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
`

export const Img = styled.img`
  width: 20px;
`
