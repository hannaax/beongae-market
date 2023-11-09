import { useState } from "react"
import type { ChangeEvent } from "react"
import { useMutation, useQuery } from "@apollo/client"
import { QuestionAnswer, SubdirectoryArrowRight } from "@mui/icons-material"
import { useRouter } from "next/router"
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../../commons/types/generated/types"
import {
  DELETE_BOARD_COMMENT,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from "./BoardCommentList.queries"
import * as S from "./BoardCommentList.styles"
import { PasswordModal } from "./BoardCommentList.styles"
import { getDate } from "../../../../commons/libraries/utils"
import BoardCommentWrite from "../write/BoardCommentWrite"

export default function BoardCommentListUIItem(props) {
  const router = useRouter()
  const [isEdit, setIsEdit] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [password, setPassword] = useState("")

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT)

  const onClickDelete = async () => {
    try {
      await deleteBoardComment({
        variables: {
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
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const onClickUpdate = (): void => {
    setIsEdit(true)
  }

  const showModal = () => {
    setIsOpen(true)
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

  const [isAnswerWrite, setIsAnswerWrite] = useState(false)
  const [isAnswerList, setIsAnswerList] = useState(false)

  const onClickWriteAnswer = () => {
    setIsAnswerWrite(true)
  }

  const { data: answersData, fetchMoreAnswer } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.el._id },
  })

  return (
    <>
      {isOpen && (
        <PasswordModal
          title="비밀번호 입력"
          open={true}
          onOk={onClickDelete}
          onCancel={handleCancel}
        >
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </PasswordModal>
      )}
      {!isEdit ? (
        <>
          <S.Container>
            <S.ItemWrapper key={props.el._id}>
              <S.FlexWrapper>
                <S.Avatar src="/images/avatar.png" />
                <S.MainWrapper>
                  <S.WriterRateWrapper>
                    <S.Writer>{props.el.user.name}</S.Writer>
                  </S.WriterRateWrapper>
                  <S.Contents>{props.el.contents}</S.Contents>
                </S.MainWrapper>
                <S.OptionWrapper>
                  <S.QusetionAnswerButton onClick={onClickWriteAnswer}>
                    <QuestionAnswer sx={{ color: "#bbb" }} />
                  </S.QusetionAnswerButton>
                </S.OptionWrapper>
              </S.FlexWrapper>
              <S.DateString>{getDate(props.el?.createdAt)}</S.DateString>
            </S.ItemWrapper>
          </S.Container>
          {answersData?.fetchUseditemQuestionAnswers?.length !== 0
            ? answersData?.fetchUseditemQuestionAnswers?.map((el) => (
                <S.Container key={el._id}>
                  <S.ItemWrapper key={el._id}>
                    <S.FlexWrapper>
                      <S.ArrowRight>
                        <SubdirectoryArrowRight fontSize="inherit" />
                      </S.ArrowRight>
                      <S.Avatar src="/images/avatar.png" />
                      <S.MainWrapper>
                        <S.WriterRateWrapper>
                          <S.Writer>{el.user.name}</S.Writer>
                        </S.WriterRateWrapper>
                        <S.Contents>{el.contents}</S.Contents>
                      </S.MainWrapper>
                      <S.OptionWrapper>
                        <S.QusetionAnswerButton onClick={onClickWriteAnswer}>
                          <QuestionAnswer sx={{ color: "#bbb" }} />
                        </S.QusetionAnswerButton>
                      </S.OptionWrapper>
                    </S.FlexWrapper>
                    <S.DateStringAnswer>
                      {getDate(el?.createdAt)}
                    </S.DateStringAnswer>
                  </S.ItemWrapper>
                </S.Container>
              ))
            : null}
          {isAnswerWrite && (
            <BoardCommentWrite
              isEdit={isEdit}
              isAnswerWrite={isAnswerWrite}
              setIsAnswerWrite={setIsAnswerWrite}
              setIsAnswerList={setIsAnswerList}
              onClickUpdate={onClickUpdate}
              el={props.el}
            />
          )}
        </>
      ) : (
        <BoardCommentWrite
          isEdit={isEdit}
          onClickUpdate={onClickUpdate}
          el={props.el}
        />
      )}
    </>
  )
}
