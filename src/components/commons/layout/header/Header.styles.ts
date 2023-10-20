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
  box-shadow: 0 0 8px #ddd;

  @media (max-width: 1000px) {
    padding: 30px;
  }
`

export const MenuIcon = styled.div`
  display: none;
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
  @media (max-width: 800px) {
    /* width: 100%; */
    display: flex;
    justify-content: center;
  }
`

export const Logo = styled.img`
  width: 150px;
`

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  @media (max-width: 800px) {
    position: absolute;
    top: 100px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    display: none;

    &.block {
      display: block;
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
`

export const RightBody = styled.div`
  display: flex;
  align-items: center;
`

export const Button1 = styled.div`
  padding: 10px 5px;
  width: 75px;
`

export const Button2 = styled.div`
  padding: 10px 5px;
  width: 55px;
`

export const Button3 = styled.div`
  padding: 10px 5px;
  width: 55px;
`

export const DivisionLine = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
`

export const Img = styled.img`
  width: 20px;
`
