import { useState } from "react"
import type { ChangeEvent } from "react"
import { useRouter } from "next/router"
import BoardWriteUI from "./BoardWrite2.presenter"
import { Modal } from "antd"
import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite"
import { firebaseApp } from "../../../../../src/components/commons/libraries/firebase"

interface IBoardWriteProps {
  isEdit: boolean
  data: any
}

export default function BoardWrite2(props: IBoardWriteProps): JSX.Element {
  const router = useRouter()

  const [isActive, setIsActive] = useState(false)

  const [writer, setWriter] = useState("")
  const [password, setPassword] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")

  const [writerError, setWriterError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [titleError, setTitleError] = useState("")
  const [contentsError, setContentsError] = useState("")

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value)
    if (event.target.value !== "") {
      setWriterError("")
    }
    if (event.target.value && password && title && contents) {
      setIsActive(true)
    }
  }

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    if (event.target.value !== "") {
      setPasswordError("")
    }
    if (writer && event.target.value && title && contents) {
      setIsActive(true)
    }
  }

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
    if (event.target.value !== "") {
      setTitleError("")
    }
    if (writer && password && event.target.value && contents) {
      setIsActive(true)
    }
  }

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value)
    if (event.target.value !== "") {
      setContentsError("")
    }
    if (writer && password && title && event.target.value) {
      setIsActive(true)
    }
  }

  const onClickSubmit = async () => {
    const board = collection(getFirestore(firebaseApp), "board")

    const result = await addDoc(board, {
      writer,
      title,
      contents,
    })
    console.log(result)
  }

  const onClickUpdate = async () => {
    // if (!title && !contents) {
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
    // try {
    //   const result = await updateBoard({
    //     variables: {
    //       boardId: router.query.boardId,
    //       password,
    //       updateBoardInput,
    //     },
    //   })
    //   void router.push(`/boards/${result.data.updateBoard._id}`)
    //   console.log(result)
    // } catch (error) {
    //   Modal.error({ content: error.message })
    // }
  }

  const [isOpen, setIsOpen] = useState(false)

  const showZipcodeModal = (): void => {
    setIsOpen(true)
  }

  const handleOk = (): void => {
    setIsOpen(false)
  }

  const handleCancel = (): void => {
    setIsOpen(false)
  }

  return (
    <BoardWriteUI
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
      isOpen={isOpen}
      showZipcodeModal={showZipcodeModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
    />
  )
}
