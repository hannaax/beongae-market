import { useState } from "react"
import type { ChangeEvent } from "react"
import { useMutation, useQuery } from "@apollo/client"
import { Modal } from "antd"
import { useRouter } from "next/router"
import { v4 as uuidv4 } from "uuid"
import type { IBoardWriteProps } from "./BoardWrite.types"
import type {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IQuery,
} from "../../../../commons/types/generated/types"
import type { Address } from "react-daum-postcode"
import {
  CREATE_BOARD,
  FETCH_USER_LOGGED_IN,
  UPDATE_BOARD,
} from "./BoardWrite.queries"

import * as S from "./BoardWrite.styles"

import Uploads01 from "../../../commons/uploads/01/Uploads01"

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const router = useRouter()
  const [isActive, setIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const [writer, setWriter] = useState("")
  const [password, setPassword] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")
  const [youtubeUrl, setYoutubeUrl] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [address, setAddress] = useState("")
  const [addressDetail, setAddressDetail] = useState("")
  const [fileUrls, setFileUrls] = useState(["", "", ""])

  const [writerError, setWriterError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [titleError, setTitleError] = useState("")
  const [contentsError, setContentsError] = useState("")

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD)
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD)

  const { data: loggedData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN)

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

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value)
  }

  const onClickAddressSearch = (): void => {
    setIsOpen((prev) => !prev)
  }

  const onCompleteAddressSearch = (data: Address): void => {
    setAddress(data.address)
    setZipcode(data.zonecode)
    setIsOpen((prev) => !prev)
  }

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls]
    newFileUrls[index] = fileUrl
    setFileUrls(newFileUrls)
  }

  const onClickSubmit = async () => {
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.")
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.")
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.")
    }
    if (password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: loggedData?.fetchUserLoggedIn?.name,
              password,
              title,
              contents,
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
              images: [...fileUrls],
            },
          },
        })

        if (result.data?.createBoard._id === undefined) {
          alert("요청에 문제가 있습니다.")
          return
        }

        void router.push(`/boards/${result.data.createBoard._id}`)
      } catch (error) {
        Modal.error({ content: error.message })
      }
    }
  }

  const onClickUpdate = async () => {
    if (
      !title &&
      !contents &&
      !youtubeUrl &&
      !address &&
      !addressDetail &&
      !zipcode
    ) {
      Modal.warning({ content: "수정한 내용이 없습니다." })
      return
    }

    if (!password) {
      Modal.warning({ content: "비밀번호를 입력해주세요." })
      return
    }
    const updateBoardInput = {}
    if (title) updateBoardInput.title = title
    if (contents) updateBoardInput.contents = contents
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl
    if (zipcode || address || addressDetail) {
      updateBoardInput.boardAddress = {}
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode
      if (address) updateBoardInput.boardAddress.address = address
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail
    }

    try {
      if (typeof router.query.boardId !== "string") {
        alert("시스템에 문제가 있습니다.")
        return
      }

      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      })
      void props.refetch({ boardId: result.data.updateBoard._id })
      void router.push(`/boards/${result.data.updateBoard._id}`)
    } catch (error) {
      Modal.error({ content: error.message })
    }
  }

  return (
    <S.Container>
      {isOpen && (
        <S.AddressModal
          open={true}
          onOk={onClickAddressSearch}
          onCancel={onClickAddressSearch}
        >
          <S.AddressSearchInput onComplete={onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.Wrapper>
        <S.Title>게시글 {props.isEdit ? "수정" : "등록"}</S.Title>
        <S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>작성자</S.Label>
            <S.Writer
              readOnly={loggedData?.fetchUserLoggedIn?.name}
              type="text"
              onChange={onChangeWriter}
              defaultValue={loggedData?.fetchUserLoggedIn?.name}
            />
            <S.Error>{writerError}</S.Error>
          </S.InputWrapper>
          <S.Div />
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.Password
              type="password"
              placeholder="비밀번호를 작성해주세요."
              onChange={onChangePassword}
            />
            <S.Error>{passwordError}</S.Error>
          </S.InputWrapper>
        </S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <S.Subject
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={onChangeTitle}
            defaultValue={props.data?.fetchBoard?.title}
          />
          <S.Error>{titleError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.Contents
            placeholder="내용을 작성해주세요."
            onChange={onChangeContents}
            defaultValue={props.data?.fetchBoard?.contents}
          />
          <S.Error>{contentsError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper></S.InputWrapper>
        <S.InputWrapper>
          <S.Label>유튜브</S.Label>
          <S.Youtube
            placeholder="링크를 복사해주세요."
            onChange={onChangeYoutubeUrl}
            defaultValue={props.data?.fetchBoard?.youtubeUrl}
          />
        </S.InputWrapper>
        <S.ImageWrapper>
          <S.Label>사진첨부</S.Label>
          <S.ImageBox>
            {props.isEdit
              ? props.data?.fetchBoard?.images.length !== 0
                ? props.data?.fetchBoard?.images?.map((el, index) => (
                    <Uploads01
                      key={uuidv4()}
                      index={index}
                      fileUrl={el}
                      onChangeFileUrls={onChangeFileUrls}
                    />
                  ))
                : fileUrls?.map((el, index) => (
                    <Uploads01
                      key={uuidv4()}
                      index={index}
                      fileUrl={el}
                      onChangeFileUrls={onChangeFileUrls}
                    />
                  ))
              : fileUrls?.map((el, index) => (
                  <Uploads01
                    key={uuidv4()}
                    index={index}
                    fileUrl={el}
                    onChangeFileUrls={onChangeFileUrls}
                  />
                ))}
          </S.ImageBox>
        </S.ImageWrapper>
        <S.OptionWrapper></S.OptionWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton
            onClick={props.isEdit ? onClickUpdate : onClickSubmit}
            isActive={props.isEdit ? true : isActive}
          >
            {props.isEdit ? "수정" : "등록"}하기
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.Container>
  )
}
