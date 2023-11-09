import type { MouseEvent } from "react"
import { useState } from "react"
import { useQuery } from "@apollo/client"
import { Favorite } from "@mui/icons-material"
import _ from "lodash"
import { useRouter } from "next/router"
import { v4 as uuidv4 } from "uuid"
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
  IBoardReturn,
} from "../../../../commons/types/generated/types"
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries"

import * as S from "./BoardList.styles"
import { elapsedTime } from "../../../commons/libraries/utils"
import Paginations01 from "../../../commons/paginations/01/Paginations01"
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01"

const SECRET = "@#$%"

export default function BoardList(): JSX.Element {
  const router = useRouter()
  const [keyword, setKeyword] = useState("")

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS)

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT)

  const onClickMoveToBoardNew = (): void => {
    void router.push("/boards/new")
  }

  const onClickMoveToBoardDetail = (event: MouseEvent): void => {
    void router.push(`/boards/${event.currentTarget.id}`)
  }

  const onChangeKeyword = (value: string) => {
    setKeyword(value)
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.FlexTop>
          <Searchbars01
            refetch={refetch}
            refetchBoardsCount={refetchBoardsCount}
            onChangeKeyword={onChangeKeyword}
          />
          <S.Button onClick={onClickMoveToBoardNew}>
            <S.PencilIcon src="/images/board/list/write.png" />
            <S.ButtonText>글쓰기</S.ButtonText>
          </S.Button>
        </S.FlexTop>
        <S.FlexMid>
          <S.TableTop />
          {data?.fetchBoards.map((el: IBoardReturn) => (
            <S.Row key={el._id}>
              <S.ColumnTitle id={el._id} onClick={onClickMoveToBoardDetail}>
                {el.title
                  .replaceAll(keyword, `${SECRET}${keyword}${SECRET}`)
                  .split(SECRET)
                  .map((el) => (
                    <S.TextToken key={uuidv4()} isMatched={keyword === el}>
                      {el}
                    </S.TextToken>
                  ))}
              </S.ColumnTitle>
              <S.ColumnContents>{el.contents}</S.ColumnContents>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <S.ColumnBasic>{el.writer}</S.ColumnBasic>
                  <span style={{ padding: "0 5px", color: "#aaa" }}>·</span>
                  <S.ColumnBasic>{elapsedTime(el.createdAt)}</S.ColumnBasic>
                </div>
                <S.ColumnBasic>
                  <Favorite fontSize="inherit" />
                  <span> {el.likeCount}</span>
                </S.ColumnBasic>
              </div>
            </S.Row>
          ))}
          <S.TableBottom />
        </S.FlexMid>
        <S.FlexBottom>
          <S.Footer>
            <Paginations01
              refetch={refetch}
              count={dataBoardsCount?.fetchBoardsCount}
            />
          </S.Footer>
        </S.FlexBottom>
      </S.Wrapper>
    </S.Container>
  )
}
