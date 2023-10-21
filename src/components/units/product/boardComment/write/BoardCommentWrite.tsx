import BoardCommentWriteUI from "./BoardCommentWrite.presenter"
import { useMutation } from "@apollo/client"
import {
  CREATE_BOARD_COMMENT,
  CREATE_USEDITEM_QUESTION,
} from "./BoardCommentWrite.queries"
import { useRouter } from "next/router"
import type { ChangeEvent } from "react"
import { useState } from "react"
import {
  FETCH_BOARD_COMMENTS,
  FETCH_USEDITEM_QUESTIONS,
} from "../list/BoardCommentList.queries"
import type {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types"

import * as S from "./BoardCommentWrite.styles"
import { Rate } from "antd"

export default function BoardCommentWrite(props): JSX.Element {
  const router = useRouter()
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT)
  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USEDITEM_QUESTION)

  const [writer, setWriter] = useState("")
  const [password, setPassword] = useState("")
  const [contents, setContents] = useState("")

  const [star, setStar] = useState(3)

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value)
  }
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value)
  }
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event.target.value)
  }

  const onClickWrite = async (): Promise<void> => {
    // 비로그인 상태 : 로그인 후 댓글 작성 가능 경고창
    // 로그인 상태 : 로그인한 이용자 데이터 받아와야함
    const result = await createUseditemQuestion({
      variables: {
        createUseditemQuestionInput: {
          contents,
        },
        useditemId: router.query.useditemId,
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM_QUESTIONS,
          variables: { useditemId: router.query.useditemId },
        },
      ],
    })
    console.log(result)
    setContents("")
  }

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
            onChange={onChangeContents}
            value={contents}
          ></S.Contents>
          <S.BottomWrapper>
            <S.ContentsLength>0/100</S.ContentsLength>
            <S.Button onClick={props.isEdit ? onClickUpdate : onClickWrite}>
              {props.isEdit ? "수정하기" : "문의하기"}
            </S.Button>
          </S.BottomWrapper>
        </S.ContentsWrapper>
      </S.Wrapper>
    </S.Container>
  )
}
