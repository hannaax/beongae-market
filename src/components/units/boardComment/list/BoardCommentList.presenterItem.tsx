import { useState } from "react"
import type { ChangeEvent } from "react"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types"
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries"
import * as S from "./BoardCommentList.styles"
import { PasswordModal } from "./BoardCommentList.styles"
import { getDate } from "../../../commons/libraries/utils"
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

  const onClickWriteEdit = async (event): void => {
    setIsEdit(true)

    try {
      const result = await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: "test",
            rating: 3,
          },
          password,
          boardCommentId: event.currentTarget.id,
        },
      })
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  const showModal = () => {
    setIsOpen(true)
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

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
        <S.ItemWrapper key={props.el._id}>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterRateWrapper>
                <S.Writer>{props.el.writer}</S.Writer>
                <S.Star value={props.el.rating} disabled />
              </S.WriterRateWrapper>
              <S.Contents>{props.el.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.UpdateIcon
                src="/images/boardComment/list/option_update_icon.png/"
                onClick={onClickWriteEdit}
                id={props.el._id}
              />
              <S.DeleteIcon
                src="/images/boardComment/list/option_delete_icon.png/"
                onClick={showModal}
                id={props.el._id}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{getDate(props.el?.createdAt)}</S.DateString>
        </S.ItemWrapper>
      ) : (
        <BoardCommentWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          el={props.el}
          id={props.el._id}
        />
      )}
    </>
  )
}
