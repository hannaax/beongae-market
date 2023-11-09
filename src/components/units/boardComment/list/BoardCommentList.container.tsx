import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import type {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types"
import BoardCommentListUI from "./BoardCommentList.presenter"
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries"

export default function BoardCommentList() {
  const router = useRouter()
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  })
  // const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENTS)

  const onLoadMore = (): void => {
    if (!data) return
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchBoardComments.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          }
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        }
      },
    })
  }

  return <BoardCommentListUI data={data} loadFunc={onLoadMore} />
}
