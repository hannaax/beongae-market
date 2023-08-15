import * as S from "./BoardCommentWrite.styles"
import { Rate } from "antd"
import type { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types"

export default function BoardCommentWriteUI(
  props: IBoardCommentWriteUIProps
): JSX.Element {
  return (
    <S.Container>
      <S.Wrapper>
        {props.isEdit || (
          <div style={{ marginBottom: "20px" }}>
            <S.PencilIcon src="/images/boardComment/write/pencil.png" />
            <span style={{ fontWeight: "600" }}> 문의하기</span>
          </div>
        )}
        <S.ContentsWrapper>
          <S.Contents
            placeholder="이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeContents}
            value={props.contents}
          ></S.Contents>
          <S.BottomWrapper>
            <S.ContentsLength>0/100</S.ContentsLength>
            <S.Button
              onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
            >
              {props.isEdit ? "수정하기" : "문의하기"}
            </S.Button>
          </S.BottomWrapper>
        </S.ContentsWrapper>
      </S.Wrapper>
    </S.Container>
  )
}
