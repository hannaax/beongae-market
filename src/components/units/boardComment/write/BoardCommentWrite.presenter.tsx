import * as S from "./BoardCommentWrite.styles"
import { Rate } from "antd"
import type { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types"

export default function BoardCommentWriteUI(
  props: IBoardCommentWriteUIProps
): JSX.Element {
  return (
    <S.Wrapper>
      {props.isEdit || (
        <>
          <S.PencilIcon src="/images/boardComment/write/pencil.png" />
          <span style={{ fontWeight: "bold" }}> 댓글</span>
        </>
      )}

      <S.InputWrapper>
        <S.Input
          placeholder="작성자"
          onChange={props.onChangeWriter}
          value={props.writer !== "" ? props.writer : props.el?.writer ?? ""}
          readOnly={props.isEdit}
          defaultValue={props.data?.fetchBoard.writer}
        ></S.Input>
        <S.Input
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangePassword}
          value={props.password}
        ></S.Input>
        <S.RateInput>
          <Rate onChange={props.setStar} />
          {/* <Rate onChange={props.setStar} value={props.star} />
          {props.star ? <span className="ant-rate-text">{star - 1}</span> : ""} */}
        </S.RateInput>
      </S.InputWrapper>
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
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  )
}
