import { useQuery, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries"
import type { MouseEvent } from "react"

import * as S from "./BoardDetail.styles"
import { getDate } from "../../../commons/libraries/utils"
import ReactPlayer from "react-player"
import { Tooltip } from "antd"
import { ThumbUpAltOutlined, ThumbDownAltOutlined } from "@mui/icons-material"

export default function BoardDetail(): JSX.Element {
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  })

  const [deleteBoard] = useMutation(DELETE_BOARD)

  const onClickDelete = (event: MouseEvent): void => {
    void deleteBoard({
      variables: { boardId: Number(event.currentTarget.id) },
      refetchQueries: [
        { queries: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    })
  }

  const onClickMove = (): void => {
    void router.push(`/boards/${router.query.boardId}/edit`)
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.CardWrapper>
          <S.Header>
            <S.LeftHeader>
              <S.Avatar src="/images/avatar.png" />
              <S.Info>
                <S.Writer>{data?.fetchBoard?.writer}</S.Writer>
                <S.DateWrapper>
                  {/* <S.DateLabel>Date</S.DateLabel> */}
                  <S.Date>{getDate(data?.fetchBoard?.createdAt)}</S.Date>
                </S.DateWrapper>
              </S.Info>
            </S.LeftHeader>
            <S.RightHeader>
              <S.UrlCopyBtn>
                <img src="/images/board/detail/url.png" />
              </S.UrlCopyBtn>
              <Tooltip
                placement="topRight"
                title={`${data?.fetchBoard.boardAddress?.address ?? ""} ${
                  data?.fetchBoard.boardAddress?.addressDetail ?? ""
                }`}
              >
                <S.LocationBtn>
                  <img src="/images/board/detail/location.png" />
                </S.LocationBtn>
              </Tooltip>
            </S.RightHeader>
          </S.Header>
          <S.Body>
            <S.Title>{data?.fetchBoard?.title}</S.Title>
            <S.Contents>
              {data?.fetchBoard?.youtubeUrl && (
                <ReactPlayer url={data?.fetchBoard?.youtubeUrl} />
              )}
              {data?.fetchBoard?.images
                ?.filter((el) => el)
                .map((el) => (
                  <img
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                    alt=""
                  />
                ))}
              {data?.fetchBoard?.contents}
              {data?.fetchBoard?.address}
            </S.Contents>
          </S.Body>
          <S.LikeBtns>
            <S.LikeBtnWrapper>
              <S.LikeBtn>
                <ThumbUpAltOutlined sx={{ color: "#ffc700" }} />
              </S.LikeBtn>
              <S.LikeCount>{data?.fetchBoard?.likeCount}</S.LikeCount>
            </S.LikeBtnWrapper>
            <S.DislikeBtnWrapper>
              <S.DislikeBtn>
                <ThumbDownAltOutlined sx={{ color: "#aaa" }} />
              </S.DislikeBtn>
              <S.DislikeCount>{data?.fetchBoard?.dislikeCount}</S.DislikeCount>
            </S.DislikeBtnWrapper>
          </S.LikeBtns>
        </S.CardWrapper>
        <S.BottomWrapper>
          <S.BottomBtn>목록으로</S.BottomBtn>
          <S.BottomBtn onClick={onClickMove}>수정하기</S.BottomBtn>
          <S.BottomBtn id={data?.fetchBoard?.number} onClick={onClickDelete}>
            삭제하기
          </S.BottomBtn>
        </S.BottomWrapper>
      </S.Wrapper>
    </S.Container>
  )
}
