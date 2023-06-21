import { useState } from "react"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries"
import BoardWriteUI from "./BoardWrite.presenter"

export default function BoardWrite(props) {
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

  const [createBoard] = useMutation(CREATE_BOARD)
  const [updateBoard] = useMutation(UPDATE_BOARD)

  const onChangeWriter = (event) => {
    setWriter(event.target.value)
    if (event.target.value !== "") {
      setWriterError("")
    }
    if (event.target.value && password && title && contents) {
      setIsActive(true)
    }
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
    if (event.target.value !== "") {
      setPasswordError("")
    }
    if (writer && event.target.value && title && contents) {
      setIsActive(true)
    }
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
    if (event.target.value !== "") {
      setTitleError("")
    }
    if (writer && password && event.target.value && contents) {
      setIsActive(true)
    }
  }

  const onChangeContents = (event) => {
    setContents(event.target.value)
    if (event.target.value !== "") {
      setContentsError("")
    }
    if (writer && password && title && event.target.value) {
      setIsActive(true)
    }
  }

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.")
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.")
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.")
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.")
    }
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
            },
          },
        })
        console.log(result.data.createBoard._id)
        router.push(`/boards/${result.data.createBoard._id}`)
      } catch (error) {
        alert(error.message)
      }
    }
  }

  const onClickUpdate = async () => {
    if (!title && !contents) {
      alert("수정한 내용이 없습니다.")
      return
    }

    if (!password) {
      alert("비밀번호를 입력해주세요.")
      return
    }
    const updateBoardInput = {}
    if (title) updateBoardInput.title = title
    if (contents) updateBoardInput.contents = contents

    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: password,
          updateBoardInput,
        },
      })
      router.push(`/boards/${result.data.updateBoard._id}`)
      console.log(result)
    } catch (error) {
      alert(error.message)
    }
  }

  const onClickUpdate2 = async () => {
    if (title || contents) {
      if (password) {
      } else {
        alert("비밀번호를 입력해주세요.")
      }
    } else {
      alert("수정한 내용이 없습니다.")
    }
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
    />
  )
}
