import type { ChangeEvent } from "react"
import { useState } from "react"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import type {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types"
import {
  CREATE_USEDITEM_QUESTION,
  CREATE_USEDITEM_QUESTION_ANSWER,
} from "./BoardCommentWrite.queries"
import * as S from "./BoardCommentWrite.styles"
import {
  FETCH_USEDITEM_QUESTIONS,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from "../list/BoardCommentList.queries"

interface IBoardCommentWriteProps {
  isEdit?: boolean
  isAnswerWrite?: boolean
  isAnswerList?: boolean
  setIsAnswerWrite: (value: boolean) => void
  setIsAnswerList: (value: boolean) => void
  el: {
    _id: string
  }
}

export default function BoardCommentWrite(
  props: IBoardCommentWriteProps
): JSX.Element {
  const router = useRouter()
  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USEDITEM_QUESTION)

  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USEDITEM_QUESTION_ANSWER)

  const [contents, setContents] = useState("")

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
    setContents("")
  }

  const onClickWriteAnswer = async (): Promise<void> => {
    props.setIsAnswerWrite(false)
    props.setIsAnswerList(true)

    const result = await createUseditemQuestionAnswer({
      variables: {
        createUseditemQuestionAnswerInput: {
          contents,
        },
        useditemQuestionId: props.el._id,
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM_QUESTION_ANSWERS,
          variables: { useditemQuestionId: props.el._id },
        },
      ],
    })
  }

  return (
    <>
      {!props.isAnswerWrite ? (
        <S.Container>
          <S.Wrapper>
            {props.isEdit || (
              <div style={{ marginBottom: "20px" }}>
                <S.PencilIcon src="/images/boardComment/write/pencil.png" />
                <S.Title> 문의</S.Title>
              </div>
            )}
            <S.ContentsWrapper>
              <S.Contents
                placeholder="문의글을 남겨주세요."
                onChange={onChangeContents}
                value={contents}
              ></S.Contents>
              <S.BottomWrapper>
                <S.ContentsLength>{contents.length}/100</S.ContentsLength>
                <S.Button onClick={props.isEdit ? onClickUpdate : onClickWrite}>
                  {props.isEdit ? "수정하기" : "문의하기"}
                </S.Button>
              </S.BottomWrapper>
            </S.ContentsWrapper>
          </S.Wrapper>
        </S.Container>
      ) : (
        <S.Container>
          <S.Wrapper>
            <S.ContentsWrapper>
              <S.Contents
                placeholder="답글을 남겨주세요."
                onChange={onChangeContents}
                value={contents}
              ></S.Contents>
              <S.BottomWrapper>
                <S.ContentsLength>{contents.length}/100</S.ContentsLength>
                <S.Button
                  onClick={props.isEdit ? onClickUpdate : onClickWriteAnswer}
                >
                  {props.isEdit ? "수정하기" : "답글달기"}
                </S.Button>
              </S.BottomWrapper>
            </S.ContentsWrapper>
          </S.Wrapper>
        </S.Container>
      )}
    </>
  )
}
