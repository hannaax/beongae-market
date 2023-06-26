// import * as S from "./BoardCommentWrite.styles"
import styled from "@emotion/styled"
import { gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { Rate } from "antd"
import { useState } from "react"

const Wrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
`
const PencilIcon = styled.img``

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`
const Input = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin-right: 20px;
`
const RateInput = styled.div``
const ContentsWrapper = styled.div`
  border: 1px solid lightgray;
`
const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
`
const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`
const Button = styled.button`
  width: 91px;
  height: 51px;
  background-color: black;
  color: white;
  cursor: pointer;
`

const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
      contents
    }
  }
`

export default function BoardCommentWrite() {
  const router = useRouter()
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)

  const [writer, setWriter] = useState("")
  const [password, setPassword] = useState("")
  const [contents, setContents] = useState("")

  const [value, setValue] = useState(3)

  const onClickCreate = async () => {
    // await createBoardComment({
    //   variables: {
    //     createBoardCommentInput: {
    //       writer,
    //       password,
    //       contents,
    //       rate: value,
    //     },
    //     boardId: router.query.boardId,
    //   },
    // })

    await createBoardComment({
      variables: {
        createBoardCommentInput: {
          writer: "a",
          password: "a",
          contents: "a",
          rating: 0,
        },
        boardId: router.query.boardId,
      },
    })
  }

  return (
    <Wrapper>
      <>
        <PencilIcon />
        <span>댓글</span>
      </>
      <InputWrapper>
        <Input placeholder="작성자"></Input>
        <Input placeholder="비밀번호"></Input>
        <RateInput>
          <Rate onChange={setValue} value={value} />
          {value ? <span className="ant-rate-text">{value - 1}</span> : ""}
        </RateInput>
      </InputWrapper>
      <ContentsWrapper>
        <Contents placeholder="이에 대한 민형사상 책임은 게시자에게 있습니다."></Contents>
        <BottomWrapper>
          <ContentsLength>0/100</ContentsLength>
          <Button onClick={onClickCreate}>등록하기</Button>
        </BottomWrapper>
      </ContentsWrapper>
    </Wrapper>
  )
}
