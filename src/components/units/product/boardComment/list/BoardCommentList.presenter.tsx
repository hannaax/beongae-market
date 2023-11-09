import InfiniteScroll from "react-infinite-scroller"
import BoardCommentListUIItem from "./BoardCommentList.presenterItem"
import * as S from "./BoardCommentList.styles"

export default function BoardCommentListUI(props) {
  return (
    <S.Container2>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true || false}
      >
        {props.data?.fetchUseditemQuestions.map((el) => (
          <BoardCommentListUIItem key={el._id} el={el} />
        )) ?? <></>}
      </InfiniteScroll>
    </S.Container2>
  )
}
