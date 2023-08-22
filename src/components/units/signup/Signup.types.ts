import type { MouseEvent } from "react"

export interface ISignupUIProps {
  signin: boolean
  onClickCreateUser: (event: MouseEvent<HTMLButtonElement>) => void
  onClickLoginUser: (event: MouseEvent<HTMLButtonElement>) => void
  isActive: boolean
}
