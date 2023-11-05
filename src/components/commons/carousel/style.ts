import styled from "@emotion/styled"

export const CarouselLayout = styled.div`
  position: relative;
  height: 450px;
  background-color: #f2f2f2;
  overflow: hidden;
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 30rem;
  }
`

export const ImgBox = styled.div<{ opacity: string }>`
  position: absolute;
  width: 125%;
  height: 100%;
  left: -15%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: ${(props) => (props.opacity === "active" ? "1" : "0")};
    transition: opacity ease-in-out 0.4s;
  }
`

export const ArrowBtn = styled.button<{ direct: string }>`
  position: absolute;
  left: ${(props) => props.direct === "left" && "0px"};
  right: ${(props) => props.direct === "right" && "0px"};
  top: 50%;
  transform: translateY(-50%);
  width: 100px;
  height: 100%;
  background: transparent;
  cursor: pointer;
`

export const DotBox = styled.div`
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`

export const DotBtn = styled.button<{ isActive: string }>`
  width: 10px;
  height: 10px;
  background-color: ${(props) =>
    props.isActive === "active" ? "#000000" : "#FFFFFF"};
  border-radius: 50%;
`

export const ArrowBtnDiv = styled.div<{ direct: string }>`
  width: 50px;
  height: 50px;
  background-color: #ccc;
  position: absolute;
  left: ${(props) => props.direct === "left" && "25px"};
  right: ${(props) => props.direct === "right" && "25px"};
  top: 44.5%;
  opacity: 25%;
  border-radius: 50%;
`
