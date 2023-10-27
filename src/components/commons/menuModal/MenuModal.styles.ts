import styled from "@emotion/styled"

export const ModalContainer = styled.div`
  display: none;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  /* transform: translate(-50%, -50%); */
  /* padding: 2.4rem; */
  padding: 25px 0rem;
  /* border-radius: 0.8rem; */
  width: 25vw;
  height: 100%;
  z-index: 100;
  @media (max-width: 800px) {
    display: block;
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
