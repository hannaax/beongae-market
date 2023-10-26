import styled from "@emotion/styled"

export const Dimmer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 0.3);
  backdrop-filter: blur(10px);
`
