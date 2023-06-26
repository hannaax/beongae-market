import { gql, useQuery, useMutation } from "@apollo/client"
import styled from "@emotion/styled"
import { useRouter } from "next/router"

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
  margin: 10px;
`

const FlexWrapper = styled.div``

const Avatar = styled.img`
  width: 35px;
  height: 35px;
`
const MainWrapper = styled.div``

const WriterRateWrapper = styled.div``

const Writer = styled.div``

const Rate = styled.div``

const Contents = styled.div``

const OptionWrapper = styled.div``

const DateString = styled.div``

const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`

// const DELETE_BOARD_COMMENTS = gql``

export default function BoardCommentList() {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    varlables: { boardId: router.query.boardId },
  })
  // const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENTS)

  console.log(data)
  // data?.fetchComments?.map((el) => console.log(el))

  return (
    <ItemWrapper>
      <FlexWrapper>
        <Avatar src="/images/avatar.png" />
        <MainWrapper>
          <WriterRateWrapper>
            <Writer></Writer>
            <Rate></Rate>
          </WriterRateWrapper>
          <Contents></Contents>
        </MainWrapper>
        <OptionWrapper></OptionWrapper>
      </FlexWrapper>
      <DateString></DateString>
    </ItemWrapper>
  )
}
