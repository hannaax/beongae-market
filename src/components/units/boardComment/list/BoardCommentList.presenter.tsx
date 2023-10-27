import { Rate } from "antd"
import InfiniteScroll from "react-infinite-scroller"
import BoardCommentListUIItem from "./BoardCommentList.presenterItem"
import type { IBoardCommentListUIProps } from "./BoardCommentList.types"
import * as S from "./BoardCommentList.styles"

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  // console.log(data)
  // data?.fetchBoardComments?.map((el) => console.log(el))

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
