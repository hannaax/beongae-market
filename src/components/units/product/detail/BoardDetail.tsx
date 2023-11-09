import { useEffect, type MouseEvent } from "react"
import { useQuery, useMutation } from "@apollo/client"
import { Favorite, AccessTimeFilled } from "@mui/icons-material"
import { useRouter } from "next/router"
import {
  DELETE_USEDITEM,
  FETCH_USEDITEM,
  TOGGLE_USEDITEM_PICK,
} from "./BoardDetail.queries"

import * as S from "./BoardDetail.styles"
import { Button1 } from "../../../commons/buttons/Buttons"
import { elapsedTime } from "../../../commons/libraries/utils"

import Map from "../../../commons/map/Map"

export default function BoardDetail(): JSX.Element {
  const router = useRouter()

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  })

  useEffect(() => {
    const recentlyViewedItems = JSON.parse(
      localStorage.getItem("recentlyViewedItems") ?? "[]"
    )

    let cnt = 0

    if (data !== undefined) {
      recentlyViewedItems.map((el) => {
        if (el.fetchUseditem._id === data.fetchUseditem._id) cnt++
      })
      if (cnt === 0) recentlyViewedItems.push(data)
    }

    localStorage.setItem(
      "recentlyViewedItems",
      JSON.stringify(recentlyViewedItems)
    )
  }, [data])

  const [deleteUseditem] = useMutation(DELETE_USEDITEM)
  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK)

  const onClickDeleteProduct = (event: MouseEvent): void => {
    void deleteUseditem({
      variables: { useditemId: event.currentTarget.id },
      refetchQueries: [
        {
          queries: FETCH_USEDITEM,
          variables: { useditemId: router.query.useditemId },
        },
      ],
    })
  }

  const onClickMoveToEdit = (): void => {
    void router.push(`/product/${router.query.useditemId}/edit`)
  }

  const onClickTogglePickProduct = (event: MouseEvent): void => {
    void toggleUseditemPick({
      variables: { useditemId: event.currentTarget.id },
    })
  }

  const onClickMoveToPay = (): void => {}

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Header>
            <S.LeftHeader>
              {data?.fetchUseditem?.images[0] &&
              data?.fetchUseditem?.images[1] ? (
                <S.Img
                  src={`https://storage.googleapis.com/${data?.fetchUseditem?.images[0]}`}
                ></S.Img>
              ) : data?.fetchUseditem?.images[0] ? (
                <S.Img
                  src={`https://storage.googleapis.com/${data?.fetchUseditem?.images[0]}`}
                ></S.Img>
              ) : data?.fetchUseditem?.images[1] ? (
                <S.Img
                  src={`https://storage.googleapis.com/${data?.fetchUseditem?.images[1]}`}
                ></S.Img>
              ) : data?.fetchUseditem?.images[2] ? (
                <S.Img
                  src={`https://storage.googleapis.com/${data?.fetchUseditem?.images[2]}`}
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
            </S.LeftHeader>
            <S.RightHeader>
              <S.Name>{data?.fetchUseditem?.name}</S.Name>
              <S.Price>{data?.fetchUseditem?.price.toLocaleString()}원</S.Price>
              <S.HeaderInfo>
                <S.PostInfoWrapper>
                  <S.Favorite>
                    <Favorite fontSize="small" />
                    <S.PostInfo>{data?.fetchUseditem?.pickedCount}</S.PostInfo>
                  </S.Favorite>
                  <S.CreatedAt>
                    <AccessTimeFilled fontSize="small" />
                    <S.PostInfo>
                      {elapsedTime(data?.fetchUseditem?.createdAt)}
                    </S.PostInfo>
                  </S.CreatedAt>
                </S.PostInfoWrapper>
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
                    <S.Info>
                      {data?.fetchUseditem?.useditemAddress.address}{" "}
                      {data?.fetchUseditem?.useditemAddress.addressDetail}
                    </S.Info>
                  </S.InfoWrapper>
                </S.ProductInfo>
              </S.HeaderInfo>
              <S.Buttons>
                <Button1
                  text={"찜"}
                  backgroundcolor="#ddd"
                  onclick={onClickTogglePickProduct}
                  id={data?.fetchUseditem?._id}
                />
                <Button1
                  text={"바로구매"}
                  backgroundcolor="#ffc700"
                  onclick={onClickMoveToPay}
                />
              </S.Buttons>
            </S.RightHeader>
          </S.Header>
          <S.Body>
            <S.LeftBody>
              <S.MiniTitle>상품 설명</S.MiniTitle>
              {data?.fetchUseditem?.remarks}
              {data?.fetchUseditem?.contents}
            </S.LeftBody>
            <S.RightBody>
              <S.MiniTitle>가게 정보</S.MiniTitle>
              <S.Avatar src="/images/avatar.png" />
              <> </>
              {data?.fetchUseditem?.seller.name}
            </S.RightBody>
          </S.Body>
          <S.MapWrapper>
            <S.MiniTitle>거래 지역</S.MiniTitle>
            <Map address={data?.fetchUseditem?.useditemAddress.address} />
          </S.MapWrapper>
          <S.BottomWrapper>
            <S.BottomBtn>목록으로</S.BottomBtn>
            <S.BottomBtn onClick={onClickMoveToEdit}>수정하기</S.BottomBtn>
            <S.BottomBtn
              id={data?.fetchUseditem?._id}
              onClick={onClickDeleteProduct}
            >
              삭제하기
            </S.BottomBtn>
          </S.BottomWrapper>
        </S.Wrapper>
      </S.Container>
    </>
  )
}
