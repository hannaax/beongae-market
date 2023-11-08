import InfiniteScroll from "react-infinite-scroller"
import type { IBoardCommentListUIProps } from "./BoardCommentList.types"
import BoardCommentListUIItem from "./BoardCommentList.presenterItem"
import * as S from "./BoardCommentList.styles"

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <S.Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true || false}
      >
        {props.data?.fetchBoardComments.map((el) => (
          <BoardCommentListUIItem key={el._id} el={el} />
        )) ?? <></>}
      </InfiniteScroll>
    </S.Wrapper>
  )
}
