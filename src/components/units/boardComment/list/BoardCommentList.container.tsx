import { useQuery, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import BoardCommentListUI from "./BoardCommentList.presenter"
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries"
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types"
import { useState } from "react"

// const DELETE_BOARD_COMMENTS = gql``

export default function BoardCommentList() {
  const [isOpen, setIsOpen] = useState(false)
  const [deletePw, setDeletePw] = useState("")

  const router = useRouter()
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  })
  // const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENTS)

  const showModal = () => {
    setIsOpen(true)
  }

  const handleOk = () => {
    setIsOpen(false)
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

  const onClickDelete = () => {
    showModal()
    // deletePw가 BoardWrite의 pw와 일치하면
    // deleteBoard 실행
  }

  const onChangeDeletePw = (event) => {
    setDeletePw(event.target.value)
  }

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
      onClickDelete={onClickDelete}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isOpen={isOpen}
      onChangeDeletePw={onChangeDeletePw}
      loadFunc={onLoadMore}
    />
  )
}
