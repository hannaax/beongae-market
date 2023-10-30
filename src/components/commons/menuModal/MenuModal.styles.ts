import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"

const move = keyframes`
  from {
    left: -50%;
  }
  to {
    left: 0%;
  }`

export const ModalContainer = styled.div`
  display: none;
  background-color: #fff;
  position: fixed;
  top: 0;
  padding: 25px 0;
  width: 30vw;
  height: 100%;
  z-index: 100;

  @media (max-width: 800px) {
    display: block;
    font-size: 18px;
    animation: ${move} 0.5s 0s 1;
  }
  @media (max-width: 500px) {
    width: 150px;
  }
`

export const ModalTitle = styled.h4`
  margin-top: 0;
  display: flex;
  justify-content: center;
`

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  button + button {
    margin-left: 1rem;
  }
`
