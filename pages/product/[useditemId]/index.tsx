import BoardCommentList from "../../../src/components/units/product/boardComment/list/BoardCommentList.container"
import BoardCommentWrite from "../../../src/components/units/product/boardComment/write/BoardCommentWrite.container"
import BoardDetail from "../../../src/components/units/product/detail/BoardDetail.container"

export default function ProductDetailPage(): JSX.Element {
  return (
    <div>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </div>
  )
}
