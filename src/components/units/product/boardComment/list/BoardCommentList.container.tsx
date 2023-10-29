import { useQuery, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import BoardCommentListUI from "./BoardCommentList.presenter"
import {
  FETCH_BOARD_COMMENTS,
  FETCH_USEDITEM_QUESTIONS,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from "./BoardCommentList.queries"
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types"
import { MouseEvent, useState } from "react"
import type {
  IQueryFetchUseditemQuestionAnswersArgs,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../../commons/types/generated/types"

// const DELETE_BOARD_COMMENTS = gql``

export default function BoardCommentList() {
  const router = useRouter()
  // const { data, fetchMore } = useQuery<
  //   Pick<IQuery, "fetchBoardComments">,
  //   IQueryFetchBoardCommentsArgs
  // >(FETCH_BOARD_COMMENTS, {
  //   variables: { boardId: router.query.boardId },
  // })

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: router.query.useditemId },
  })

  console.log("questions", data)

  // const { data2, fetchMore2 } = useQuery<
  //   Pick<IQuery, "fetchUseditemQuestionAnswers">,
  //   IQueryFetchUseditemQuestionAnswersArgs
  // >(FETCH_USEDITEM_QUESTION_ANSWERS, {
  //   variables: { useditemQuestionId: data?.fetchUseditemQuestions._id },
  // })

  // console.log("answers", data2)

  // const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENTS)

  const onLoadMore = (): void => {
    if (!data) return
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditemQuestions.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions) {
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          }
        }
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
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
