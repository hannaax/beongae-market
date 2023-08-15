import * as S from "./BoardDetail.styles"
import { getDate } from "../../../commons/libraries/utils"
import { MouseEvent, useEffect } from "react"
import ReactPlayer from "react-player"
import { Tooltip } from "antd"
import { Favorite, AccessTimeFilled } from "@mui/icons-material"
import { Button1 } from "../../../commons/buttons/Buttons"
import { FavoriteBorder } from "@mui/icons-material"

interface IBoardDetailUIProps {
  data?: any
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void
  onClickMove: (event: MouseEvent<HTMLButtonElement>) => void
}

export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Header>
            <S.LeftHeader>
              {props.data?.fetchUseditem?.images[0] &&
              props.data?.fetchUseditem?.images[1] ? (
                <S.Img
                  src={`https://storage.googleapis.com/${props.data?.fetchUseditem?.images[0]}`}
                ></S.Img>
              ) : props.data?.fetchUseditem?.images[0] ? (
                <S.Img
                  src={`https://storage.googleapis.com/${props.data?.fetchUseditem?.images[0]}`}
                ></S.Img>
              ) : props.data?.fetchUseditem?.images[1] ? (
                <S.Img
                  src={`https://storage.googleapis.com/${props.data?.fetchUseditem?.images[1]}`}
                ></S.Img>
              ) : props.data?.fetchUseditem?.images[2] ? (
                <S.Img
                  src={`https://storage.googleapis.com/${props.data?.fetchUseditem?.images[2]}`}
                ></S.Img>
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "400px",
                    backgroundColor: "#eee",
                  }}
                ></div>
              )}
              {/* <S.Thumbnail /> */}
            </S.LeftHeader>
            <S.RightHeader>
              <S.Name>{props.data?.fetchUseditem?.name}</S.Name>
              <S.Price>{props.data?.fetchUseditem?.price}원</S.Price>
              <S.HeaderInfo>
                <S.PostInfo>
                  <S.Favorite>
                    <Favorite fontSize="small" />{" "}
                    {props.data?.fetchUseditem?.pickedCount}　
                  </S.Favorite>
                  <S.CreatedAt>
                    <AccessTimeFilled fontSize="small" />
                    1주 전
                  </S.CreatedAt>
                </S.PostInfo>
                <S.ProductInfo>
                  <S.InfoWrapper>
                    <S.InfoLabel>· 상품상태</S.InfoLabel>
                    <S.Info>중고</S.Info>
                  </S.InfoWrapper>
                  <S.InfoWrapper>
                    <S.InfoLabel>· 교환여부</S.InfoLabel>
                    <S.Info>교환불가능</S.Info>
                  </S.InfoWrapper>
                  <S.InfoWrapper>
                    <S.InfoLabel>· 배송비</S.InfoLabel>
                    <S.Info>배송비 별도</S.Info>
                  </S.InfoWrapper>
                  <S.InfoWrapper>
                    <S.InfoLabel>· 거래지역</S.InfoLabel>
                    <S.Info>서울특별시 서초구 방배4동</S.Info>
                  </S.InfoWrapper>
                </S.ProductInfo>
              </S.HeaderInfo>
              <S.Buttons>
                <Button1
                  text={"찜"}
                  backgroundcolor="#ddd"
                  onclick={props.onClickTogglePickProduct}
                  id={props.data?.fetchUseditem?._id}
                />
                <Button1
                  text={"바로구매"}
                  backgroundcolor="#ffc700"
                  onclick={props.onClickMoveToPay}
                />
              </S.Buttons>
            </S.RightHeader>
          </S.Header>
          <S.Body>
            <S.LeftBody>
              <S.MiniTitle>상품 설명</S.MiniTitle>
              {props.data?.fetchUseditem?.remarks}
              {props.data?.fetchUseditem?.contents}
            </S.LeftBody>
            <S.RightBody>
              <S.MiniTitle>가게 정보</S.MiniTitle>
              <S.Avatar src="/images/avatar.png" />
              <> </>
              {props.data?.fetchUseditem?.seller.name}
            </S.RightBody>
          </S.Body>
          <S.BottomWrapper>
            <S.BottomBtn>목록으로</S.BottomBtn>
            <S.BottomBtn onClick={props.onClickMoveToEdit}>
              수정하기
            </S.BottomBtn>
            <S.BottomBtn
              id={props.data?.fetchUseditem?._id}
              onClick={props.onClickDeleteProduct}
            >
              삭제하기
            </S.BottomBtn>
          </S.BottomWrapper>
        </S.Wrapper>
      </S.Container>
    </>
  )
}
