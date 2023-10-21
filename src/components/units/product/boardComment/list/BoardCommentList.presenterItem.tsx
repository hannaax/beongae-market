import { useMutation } from "@apollo/client"
import * as S from "./BoardCommentList.styles"
import { PasswordModal } from "./BoardCommentList.styles"
import { useState } from "react"
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../../commons/types/generated/types"
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries"
import { useRouter } from "next/router"
import { getDate } from "../../../../commons/libraries/utils"
import type { ChangeEvent, MouseEvent } from "react"
import BoardCommentWrite from "../write/BoardCommentWrite"
import { QuestionAnswer } from "@mui/icons-material"

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
    // 기존 댓글들을 fetch로 불러오면 배열 형태
    // 아니면, 기존 댓글 개수만큼 배열 만들어서
    // 요소들에 다 false 넣기
    // arr[event.target.id]만 true로 바꾸기
    // true만 contents를 input창이랑 수정버튼 만들기
    // input에 기존입력글 들어있게 하기
    // input창 입력 후 수정버튼 누르면 입력값을 updatecomments로 전달
    // const commentsArr = Array.from(
    //   { length: data?.fetchBoardComments.length ?? 1 },
    //   () => false
    // )
    // console.log(event.currentTarget.id) // 왜 값이 idx가 아니지
    // commentsArr[event.currentTarget.id] = true
    // commentsArr.forEach((el) => {
    //   // el? "":""
    // })
    setIsEdit(true)
  }

  const showModal = () => {
    setIsOpen(true)
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

  console.log(props.data)

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
                {/* <S.UpdateIcon
                  src="/images/boardComment/list/option_update_icon.png/"
                  onClick={onClickUpdate}
                  id={props.el._id}
                />
                <S.DeleteIcon
                  src="/images/boardComment/list/option_delete_icon.png/"
                  onClick={showModal}
                /> */}
                <QuestionAnswer sx={{ color: "#bbb" }} />
              </S.OptionWrapper>
            </S.FlexWrapper>
            <S.DateString>{getDate(props.el?.createdAt)}</S.DateString>
          </S.ItemWrapper>
        </S.Container>
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
