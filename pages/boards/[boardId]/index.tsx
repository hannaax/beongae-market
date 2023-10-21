import BoardDetail from "../../../src/components/units/board/detail/BoardDetail"
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container"
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite"

export default function BoardDetailPage(): JSX.Element {
  return (
    <>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  )
}
