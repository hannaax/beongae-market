import { Rate } from "antd"
import InfiniteScroll from "react-infinite-scroller"
import BoardCommentListUIItem from "./BoardCommentList.presenterItem"

export default function BoardCommentListUI(props) {
  // console.log(data)
  // data?.fetchBoardComments?.map((el) => console.log(el))

  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true || false}
      >
        {props.data?.fetchBoardComments.map((el) => (
          <BoardCommentListUIItem key={el._id} el={el} />
        )) ?? <></>}
      </InfiniteScroll>
    </>
  )
}
