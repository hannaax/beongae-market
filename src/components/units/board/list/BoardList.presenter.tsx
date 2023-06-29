import type { MouseEvent } from "react"
import type { IBoardReturn } from "../../../../commons/types/generated/types"
import { getDate } from "../../../commons/libraries/utils"
import * as S from "./BoardList.styles"
import Paginations01 from "../../../commons/paginations/01/Paginations01"

interface IBoardListUIProps {
  data: any
  onClickMoveToBoardNew: (event: MouseEvent<HTMLButtonElement>) => void
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void
}

export default function BoardListUI(props: IBoardListUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row>
      {props.data?.fetchBoards.map((el: IBoardReturn) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnBasic>
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
          <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <Paginations01 refetch={props.refetch} count={props.count} />
      {/* <S.Pagination>
        <span onClick={props.onClickPrevPage}>이전페이지</span>
        {new Array(10).fill(1).map(
          (_, index) =>
            index + props.startPage <= props.lastPage && (
              <span
                id={String(index + props.startPage)}
                onClick={props.onClickPage}
                key={index + props.startPage}
                style={{ margin: "5px" }}
              >
                {index + props.startPage}
              </span>
            )
        )}
        <span onClick={props.onClickNextPage}>다음페이지</span>
      </S.Pagination> */}
      <S.Footer>
        <S.Button onClick={props.onClickMoveToBoardNew}>
          <S.PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  )
}
