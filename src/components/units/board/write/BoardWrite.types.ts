import type { ChangeEvent, MouseEvent } from "react"
import { type ApolloQueryResult } from "@apollo/client"
import type { IQuery } from "../../../../commons/types/generated/types"

export interface IBoardWriteProps {
  isEdit: boolean
  data?: Pick<IQuery, "fetchBoard">
  refetch?: () => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoard">>>
}

export interface IBoardWriteUIProps {
  writerError: string
  passwordError: string
  titleError: string
  contentsError: string
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
  isActive: boolean
  isEdit: boolean
  data: any
  isOpen: boolean
  zipcode: string
  address: string
  addressDetail: string
}
