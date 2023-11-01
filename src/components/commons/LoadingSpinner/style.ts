import { css } from "@emotion/react"
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
  /* position: fixed; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  inset: 0;
  /* background-color: #000; */
  opacity: 0.9;
  z-index: 50;
`
export const Spinner = styled.div`
  /* width: 4rem;
  height: 4rem; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const CommonBounceCSS = css`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #ccc;
  position: absolute;
  opacity: 0.6;
  animation: loading-bounce 2s infinite ease-in-out;

  @keyframes loading-bounce {
    0%,
    100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }
`

export const DoubleBounce1 = styled.div`
  ${CommonBounceCSS};
`
export const DoubleBounce2 = styled.div`
  ${CommonBounceCSS};
  animation-delay: -1s;
`
