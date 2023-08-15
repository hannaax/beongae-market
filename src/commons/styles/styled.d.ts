import "@emotion/react"

type colors = "black" | "white" | "yellow" | "red"

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      [key in colors]: string
    }
  }
}
