import type { MouseEvent } from "react"
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types"
import type { ApolloQueryResult } from "@apollo/client"

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">
  dataBoardsCount?: Pick<IQuery, "fetchBoardsCount">
  keyword: string
  onClickMoveToBoardNew: (event: MouseEvent<HTMLButtonElement>) => void
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void
  onChangeKeyword: (value: string) => void
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>
  refetchBoardsCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>
}
