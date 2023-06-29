import { css } from "@emotion/react"

export const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    font-family: myfont;
  }

  @font-face {
    font-family: "myfont";
    src: url("/fonts/NanumGothic.ttf");
  }
`
