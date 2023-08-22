import type { MouseEvent } from "react"
import type { IQuery } from "../../../../commons/types/generated/types"

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void
  onClickMove: (event: MouseEvent<HTMLButtonElement>) => void
}
