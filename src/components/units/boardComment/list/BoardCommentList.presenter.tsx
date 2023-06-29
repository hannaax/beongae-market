import * as S from "./BoardCommentList.styles"
import { Rate } from "antd"
import { PasswordModal } from "./BoardCommentList.styles"
import InfiniteScroll from "react-infinite-scroller"

export default function BoardCommentListUI(props) {
  // console.log(data)
  // data?.fetchBoardComments?.map((el) => console.log(el))

  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true || false}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        {props.data?.fetchBoardComments.map((el) => (
          <S.ItemWrapper key={el._id}>
            <S.FlexWrapper>
              <S.Avatar src="/images/avatar.png" />
              <S.MainWrapper>
                <S.WriterRateWrapper>
                  <S.Writer>{el.writer}</S.Writer>
                  {/* <S.Rate value={el.rating} disabled /> */}
                </S.WriterRateWrapper>
                <S.Contents>{el.contents}</S.Contents>
              </S.MainWrapper>
              <S.OptionWrapper>
                <S.UpdateIcon src="/images/boardComment/list/option_update_icon.png/" />
                <S.DeleteIcon
                  src="/images/boardComment/list/option_delete_icon.png/"
                  onClick={props.onClickDelete}
                />
                {props.isOpen && (
                  <PasswordModal
                    title="비밀번호 입력"
                    open={true}
                    onOk={props.handleOk}
                    onCancel={props.handleCancel}
                  >
                    <input type="password" onChange={props.onChangeDeletePw} />
                  </PasswordModal>
                )}
              </S.OptionWrapper>
            </S.FlexWrapper>
            <S.DateString>{el?.createdAt}</S.DateString>
          </S.ItemWrapper>
        ))}
      </InfiniteScroll>
    </>
  )
}
