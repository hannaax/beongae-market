import { useMutation } from "@apollo/client"
import * as S from "./BoardCommentList.styles"
import { PasswordModal } from "./BoardCommentList.styles"
import { useState } from "react"
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types"
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentList.queries"
import { useRouter } from "next/router"
import { getDate } from "../../../commons/libraries/utils"
import type { ChangeEvent, MouseEvent } from "react"
import BoardCommentWrite from "../write/BoardCommentWrite"

export default function BoardCommentListUIItem(props) {
  const router = useRouter()
  const [isEdit, setIsEdit] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [password, setPassword] = useState("")

  // const [updateBoardComment] = useMutation<
  //   Pick<IMutation, "updateBoardComment">,
  //   IMutationUpdateBoardCommentArgs
  // >(UPDATE_BOARD_COMMENT)

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
    // if (
    //   !title &&
    //   !contents &&
    //   !youtubeUrl &&
    //   !address &&
    //   !addressDetail &&
    //   !zipcode &&
    //   !isChangedFiles
    // ) {
    //   Modal.warning({ content: "수정한 내용이 없습니다." })
    //   return
    // }

    // if (!password) {
    //   Modal.warning({ content: "비밀번호를 입력해주세요." })
    //   return
    // }
    // const updateBoardInput = {}
    // if (title) updateBoardInput.title = title
    // if (contents) updateBoardInput.contents = contents
    // if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl
    // if (zipcode || address || addressDetail) {
    //   updateBoardInput.boardAddress = {}
    //   if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode
    //   if (address) updateBoardInput.boardAddress.address = address
    //   if (addressDetail)
    //     updateBoardInput.boardAddress.addressDetail = addressDetail
    // }
    // if (isChangedFiles) updateBoardInput.images = fileUrls

    try {
      // if (typeof router.query.boardId !== "string") {
      //   alert("시스템에 문제가 있습니다.")
      //   return
      // }

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
      // void router.push(`/boards/${result.data.updateBoard._id}`)
      console.log(result)
    } catch (error) {
      console.log(error)
      // Modal.error({ content: error.message })
    }
  }

  // const onClickUpdate = async (event) => {
  //   console.log("id", event.currentTarget.id)
  //   console.log("props", props.el._id)
  //   try {
  //     const result = await updateBoardComment({
  //       variables: {
  //         updateBoardCommentInput: {
  //           contents: "test",
  //           rating: 3,
  //         },
  //         password,
  //         boardCommentId: props.el._id,
  //       },
  //       refetchQueries: [
  //         {
  //           query: FETCH_BOARD_COMMENTS,
  //           variables: { boardId: router.query.boardId },
  //         },
  //       ],
  //     })
  //     setIsEdit(false)
  //     // void router.push(`/boards/${result.data.updateBoard._id}`)
  //     console.log(result)
  //   } catch (error) {
  //     console.log(error)
  //     // Modal.error({ content: error.message })
  //   }
  // }

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
