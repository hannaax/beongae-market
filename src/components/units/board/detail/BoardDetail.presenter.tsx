import * as S from "./BoardDetail.styles"
import { getDate } from "../../../commons/libraries/utils"
import type { MouseEvent } from "react"
import ReactPlayer from "react-player"
import { Tooltip } from "antd"
import { SDK_VERSION } from "firebase/app"

interface IBoardDetailUIProps {
  data?: any
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void
  onClickMove: (event: MouseEvent<HTMLButtonElement>) => void
}

export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
  return (
    <S.Container>
      <S.Wrapper>
        <S.CardWrapper>
          <S.Header>
            <S.LeftHeader>
              <S.Avatar src="/images/avatar.png" />
              <S.Info>
                <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
                <S.DateWrapper>
                  <S.DateLabel>Date</S.DateLabel>
                  <S.Date>{getDate(props.data?.fetchBoard?.createdAt)}</S.Date>
                </S.DateWrapper>
              </S.Info>
            </S.LeftHeader>
            <S.RightHeader>
              <S.UrlCopyBtn>
                <img src="/images/board/detail/url.png" />
              </S.UrlCopyBtn>
              <Tooltip
                placement="topRight"
                title={`${props.data?.fetchBoard.boardAddress?.address ?? ""} ${
                  props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
                }`}
              >
                <S.LocationBtn>
                  <img src="/images/board/detail/location.png" />
                </S.LocationBtn>
              </Tooltip>
            </S.RightHeader>
          </S.Header>
          <S.Body>
            <S.Title>{props.data?.fetchBoard?.title}</S.Title>
            <S.Contents>
              {props.data?.fetchBoard?.youtubeUrl && (
                <ReactPlayer url={props.data?.fetchBoard?.youtubeUrl} />
              )}
              {props.data?.fetchBoard?.images
                ?.filter((el) => el)
                .map((el) => (
                  <img
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                    alt=""
                  />
                ))}
              {props.data?.fetchBoard?.contents}
              {props.data?.fetchBoard?.address}
            </S.Contents>
          </S.Body>
          <S.LikeBtns>
            <S.LikeBtnWrapper>
              <S.LikeBtn>
                <img src="/images/board/detail/like.png" />
              </S.LikeBtn>
              <S.LikeCount>좋아요 수</S.LikeCount>
            </S.LikeBtnWrapper>
            <S.DislikeBtnWrapper>
              <S.DislikeBtn>
                <img src="/images/board/detail/dislike.png" />
              </S.DislikeBtn>
              <S.DislikeCount>싫어요 수</S.DislikeCount>
            </S.DislikeBtnWrapper>
          </S.LikeBtns>
        </S.CardWrapper>
        <S.BottomWrapper>
          <S.BottomBtn>목록으로</S.BottomBtn>
          <S.BottomBtn onClick={props.onClickMove}>수정하기</S.BottomBtn>
          <S.BottomBtn
            id={props.data?.fetchBoard?.number}
            onClick={props.onClickDelete}
          >
            삭제하기
          </S.BottomBtn>
        </S.BottomWrapper>
      </S.Wrapper>
    </S.Container>
  )
}
