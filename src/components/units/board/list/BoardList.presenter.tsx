import type { MouseEvent } from "react"
import type { IBoardReturn } from "../../../../commons/types/generated/types"
import { getDate } from "../../../commons/libraries/utils"
import * as S from "./BoardList.styles"
import Paginations01 from "../../../commons/paginations/01/Paginations01"
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container"
import { v4 as uuidv4 } from "uuid"

interface IBoardListUIProps {
  data: any
  onClickMoveToBoardNew: (event: MouseEvent<HTMLButtonElement>) => void
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void
}

const SECRET = "@#$%"

export default function BoardListUI(props: IBoardListUIProps): JSX.Element {
  return (
    <S.Container>
      <S.Wrapper>
        <Searchbars01
          refetch={props.refetch}
          refetchBoardsCount={props.refetchBoardsCount}
          onChangeKeyword={props.onChangeKeyword}
        />
        <S.TableTop />
        {/* <S.Row>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row> */}
        {props.data?.fetchBoards.map((el: IBoardReturn) => (
          <S.Row key={el._id}>
            {/* <S.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnBasic> */}
            <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
              {el.title
                .replaceAll(props.keyword, `${SECRET}${props.keyword}${SECRET}`)
                .split(SECRET)
                .map((el) => (
                  <S.TextToken key={uuidv4()} isMatched={props.keyword === el}>
                    {el}
                  </S.TextToken>
                ))}
            </S.ColumnTitle>
            <div style={{ display: "flex" }}>
              <S.ColumnBasic>{el.writer}</S.ColumnBasic>
              <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
            </div>
          </S.Row>
        ))}
        <S.TableBottom />
        <Paginations01 refetch={props.refetch} count={props.count} />
        <S.Footer>
          <S.Button onClick={props.onClickMoveToBoardNew}>
            <S.PencilIcon src="/images/board/list/write.png" />
            게시물 등록하기
          </S.Button>
        </S.Footer>
      </S.Wrapper>
    </S.Container>
  )
}
