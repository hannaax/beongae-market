import styled from "@emotion/styled"

export const Background = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
`

export const LoadingSpinner = styled.div`
  inset: 0;
  opacity: 0.9;
  z-index: 50;
`
export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
