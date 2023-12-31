import type { ChangeEvent } from "react"
import { useState } from "react"
import { useMutation } from "@apollo/client"

import { Rate } from "antd"
import { useRouter } from "next/router"
import type {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types"
import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries"
import * as S from "./BoardCommentWrite.styles"
import {
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "../list/BoardCommentList.queries"

export default function BoardCommentWrite(props): JSX.Element {
  const router = useRouter()
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT)

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT)

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
    await createBoardComment({
      variables: {
        createBoardCommentInput: {
          writer,
          password,
          contents,
          rating: star,
        },
        boardId: router.query.boardId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query.boardId },
        },
      ],
    })
    setWriter("")
    setPassword("")
    setContents("")
  }

  const onClickUpdate = async () => {
    try {
      const result = await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: "test",
            rating: 3,
          },
          password,
          boardCommentId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      })
      props.setIsEdit(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <S.Container>
      <S.Wrapper>
        {props.isEdit || (
          <>
            <S.PencilIcon src="/images/boardComment/write/pencil.png" />
            <S.Title>댓글</S.Title>
          </>
        )}

        <S.InputWrapper>
          <S.Input
            placeholder="작성자"
            onChange={onChangeWriter}
            value={writer !== "" ? writer : props.el?.writer ?? ""}
            readOnly={props.isEdit}
            defaultValue={props.data?.fetchBoard.writer}
          ></S.Input>
          <S.Input
            type="password"
            placeholder="비밀번호"
            onChange={onChangePassword}
            value={password}
          ></S.Input>
          <S.RateInput>
            <Rate onChange={setStar} />
          </S.RateInput>
        </S.InputWrapper>
        <S.ContentsWrapperDiv>
          <S.ContentsWrapper>
            <S.Contents
              placeholder="댓글을 남겨주세요."
              onChange={onChangeContents}
              value={contents}
            ></S.Contents>
            <S.BottomWrapper>
              <S.ContentsLength>0/100</S.ContentsLength>
              <S.Button onClick={props.isEdit ? onClickUpdate : onClickWrite}>
                {props.isEdit ? "수정하기" : "등록하기"}
              </S.Button>
            </S.BottomWrapper>
          </S.ContentsWrapper>
        </S.ContentsWrapperDiv>
      </S.Wrapper>
    </S.Container>
  )
}
