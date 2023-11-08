import type { MouseEvent, useState } from "react"
import { useQuery, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types"
import BoardCommentListUI from "./BoardCommentList.presenter"
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries"

// const DELETE_BOARD_COMMENTS = gql``

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

  return (
    <BoardCommentListUI
      data={data}
      // onClickDelete={onClickDelete}
      // showModal={showModal}
      // handleOk={handleOk}
      // handleCancel={handleCancel}
      // isOpen={isOpen}
      // onChangeDeletePw={onChangeDeletePw}
      loadFunc={onLoadMore}
      // onClickUpdate={onClickUpdate}
    />
  )
}
