import BoardCommentList from "../../../src/components/units/product/boardComment/list/BoardCommentList.container"
import BoardCommentWrite from "../../../src/components/units/product/boardComment/write/BoardCommentWrite"
import BoardDetail from "../../../src/components/units/product/detail/BoardDetail"

export default function ProductDetailPage(): JSX.Element {
  return (
    <div>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </div>
  )
}
