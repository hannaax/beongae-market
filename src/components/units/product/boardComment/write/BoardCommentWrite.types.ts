import type { ChangeEvent, Dispatch, SetStateAction } from "react"

export interface IBoardCommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
  onClickWrite: () => void
  setStar: Dispatch<SetStateAction<number>>
}
