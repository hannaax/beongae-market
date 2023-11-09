import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import type { IQueryFetchUseditemQuestionsArgs } from "../../../../../commons/types/generated/types"
import type { IQuery } from "../../../../commons/types/generated/types"
import BoardCommentListUI from "./BoardCommentList.presenter"
import { FETCH_USEDITEM_QUESTIONS } from "./BoardCommentList.queries"

export default function BoardCommentList() {
  const router = useRouter()
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: router.query.useditemId },
  })

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

  return <BoardCommentListUI data={data} loadFunc={onLoadMore} />
}
