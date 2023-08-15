import { Rate } from "antd"
import InfiniteScroll from "react-infinite-scroller"
import BoardCommentListUIItem from "./BoardCommentList.presenterItem"

export default function BoardCommentListUI(props) {
  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true || false}
      >
        {props.data?.fetchUseditemQuestions.map((el) => (
          <BoardCommentListUIItem key={el._id} el={el} />
        )) ?? <></>}
      </InfiniteScroll>
    </>
  )
}
