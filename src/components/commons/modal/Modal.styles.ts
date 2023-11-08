import styled from "@emotion/styled"

export const Dimmer = styled.div`
  display: none;
  position: fixed;
  inset: 0;
  z-index: 8;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 0.3);
  @media (max-width: 800px) {
    display: block;
  }
`
