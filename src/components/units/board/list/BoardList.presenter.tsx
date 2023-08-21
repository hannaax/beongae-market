import type { MouseEvent } from "react"
import type { IBoardReturn } from "../../../../commons/types/generated/types"
import { elapsedTime, getDate } from "../../../commons/libraries/utils"
import * as S from "./BoardList.styles"
import Paginations01 from "../../../commons/paginations/01/Paginations01"
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container"
import { v4 as uuidv4 } from "uuid"
import { Favorite } from "@mui/icons-material"

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
        <S.FlexTop>
          <Searchbars01
            refetch={props.refetch}
            refetchBoardsCount={props.refetchBoardsCount}
            onChangeKeyword={props.onChangeKeyword}
          />
        </S.FlexTop>
        <S.FlexMid>
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
              <S.ColumnTitle
                id={el._id}
                onClick={props.onClickMoveToBoardDetail}
              >
                {el.title
                  .replaceAll(
                    props.keyword,
                    `${SECRET}${props.keyword}${SECRET}`
                  )
                  .split(SECRET)
                  .map((el) => (
                    <S.TextToken
                      key={uuidv4()}
                      isMatched={props.keyword === el}
                    >
                      {el}
                    </S.TextToken>
                  ))}
              </S.ColumnTitle>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <S.ColumnBasic>{el.writer}</S.ColumnBasic>
                  <span style={{ padding: "0 5px" }}>·</span>
                  <S.ColumnBasic>{elapsedTime(el.createdAt)}</S.ColumnBasic>
                </div>
                <S.ColumnBasic>
                  <Favorite fontSize="small" /> 1
                </S.ColumnBasic>
              </div>
            </S.Row>
          ))}
          <S.TableBottom />
        </S.FlexMid>
        <S.FlexBottom>
          <Paginations01 refetch={props.refetch} count={props.count} />
          <div>
            <S.Footer>
              <S.Button onClick={props.onClickMoveToBoardNew}>
                <S.PencilIcon src="/images/board/list/write.png" />글 작성하기
              </S.Button>
            </S.Footer>
          </div>
        </S.FlexBottom>
      </S.Wrapper>
    </S.Container>
  )
}
