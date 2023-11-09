import React, { useState, useEffect, useRef } from "react"
import type { ChangeEvent } from "react"
import { useMutation, useQuery } from "@apollo/client"
import { Modal } from "antd"
import { useRouter } from "next/router"

import { v4 as uuidv4 } from "uuid"

import type { IBoardWriteProps } from "./BoardWrite.types"
import type {
  IMutation,
  IMutationUpdateBoardArgs,
  IQuery,
} from "../../../../commons/types/generated/types"
import type { Address } from "react-daum-postcode"
import {
  CREATE_USEDITEM,
  FETCH_USER_LOGGED_IN,
  UPDATE_BOARD,
} from "./BoardWrite.queries"
import * as S from "./BoardWrite.styles"
import "react-quill/dist/quill.snow.css"
import Map from "../../../commons/map/Map"
import Uploads01 from "../../../commons/uploads/01/Uploads01"

declare const window: typeof globalThis & {
  kakao: any
}

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f11887ac006351d52e2ac59b193d4ce2&libraries=services"
    document.head.appendChild(script)

    script.onload = initializeMap
    router.events.on("routeChangeComplete", initializeMap)

    return () => {
      router.events.off("routeChangeComplete", initializeMap)
    }
  }, [router.asPath])

  const initializeMap = () => {
    if (typeof window !== "undefined" && window.kakao && window.kakao.maps) {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map")
        const options = {
          center: new window.kakao.maps.LatLng(37.462381, 126.813369),
          level: 3,
        }

        const map = new window.kakao.maps.Map(container, options)

        // 주소-좌표 변환 객체 생성
        const geocoder = new window.kakao.maps.services.Geocoder()

        // 주소로 좌표 검색
        geocoder.addressSearch(address, function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x)
            map.setCenter(coords)

            const markerImageSize = new kakao.maps.Size(64, 69)

            const markerImage = new kakao.maps.MarkerImage(
              "/images/like.png",
              markerImageSize
            )

            const marker = new kakao.maps.Marker({
              map,
              position: coords,
              image: markerImage,
            })
          }
        })
      })
    } else {
      console.log("실패")
    }
  }

  const [isActive, setIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const [name, setName] = useState("")
  const [contents, setContents] = useState("")
  const [price, setPrice] = useState("")
  const [address, setAddress] = useState("")
  const [addressDetail, setAddressDetail] = useState("")
  const [fileUrls, setFileUrls] = useState(["", "", ""])

  const [nameError, setNameError] = useState("")
  const [contentsError, setContentsError] = useState("")
  const [priceError, setPriceError] = useState("")

  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD)

  const [createUseditem] = useMutation(CREATE_USEDITEM)

  const { data: loggedData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN)

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
    if (event.target.value !== "") {
      setNameError("")
    }
  }

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value)
    if (event.target.value !== "") {
      setContentsError("")
    }
  }

  const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value)
    if (event.target.value !== "") {
      setPriceError("")
    }
  }

  const onClickAddressSearch = (): void => {
    setIsOpen((prev) => !prev)
  }

  const onCompleteAddressSearch = (data: Address): void => {
    setAddress(data.address)
    setIsOpen((prev) => !prev)
  }

  const onChangeAddressDetail = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setAddressDetail(event.target.value)
  }

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls]
    newFileUrls[index] = fileUrl
    setFileUrls(newFileUrls)
  }

  const onClickSubmit = async () => {
    if (!name) {
      setNameError("상품명을 입력해주세요.")
    }
    if (!contents) {
      setContentsError("상품을 설명해주세요.")
    }
    if (!price) {
      setPriceError("상품 가격을 입력해주세요.")
    }
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name,
            contents,
            remarks: "",
            price: Number(price),
            useditemAddress: {
              address,
              addressDetail,
              lat: 1,
              lng: 2,
            },
            images: [...fileUrls],
          },
        },
      })
      if (result.data?.createUseditem._id === undefined) {
        alert("요청에 문제가 있습니다.")
        return
      }

      void router.push(`/product/${result.data.createUseditem._id}`)
    } catch (error) {
      Modal.error({ content: error.message })
    }
  }

  const onClickUpdate = async () => {
    if (!name && !contents && !price && !address && !addressDetail) {
      Modal.warning({ content: "수정한 내용이 없습니다." })
      return
    }
    const updateBoardInput = {}
    if (name) updateBoardInput.name = name
    if (contents) updateBoardInput.contents = contents
    if (price) updateBoardInput.price = price
    if (address || addressDetail) {
      updateBoardInput.useditemAddress = {}
      if (address) updateBoardInput.useditemAddress.address = address
      if (addressDetail)
        updateBoardInput.useditemAddress.addressDetail = addressDetail
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
      void router.push(`/boards/${result.data.updateBoard._id}`)
    } catch (error) {
      Modal.error({ content: error.message })
    }
  }

  const QuillRef = useRef<ReactQuill>(false)

  useEffect(() => {
    if (props.isEdit) {
      if (QuillRef.current) {
        const quill = QuillRef.current.getEditor()
        quill?.clipboard.dangerouslyPasteHTML(0, "test")
      }
    }
  }, [QuillRef])

  return (
    <>
      {isOpen && (
        <S.AddressModal
          open={true}
          onOk={onClickAddressSearch}
          onCancel={onClickAddressSearch}
        >
          <S.AddressSearchInput onComplete={onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.Container>
        <S.Wrapper>
          <S.Title>상품 {props.isEdit ? "수정" : "등록"}</S.Title>
          <S.TitleBottom />
          <S.WriterWrapper>
            <S.InputWrapper>
              <S.Label>상품명</S.Label>
              <S.Name
                type="text"
                placeholder="상품명을 작성해주세요"
                onChange={onChangeName}
                defaultValue={props.data?.fetchUseditem?.name}
              />
            </S.InputWrapper>
          </S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>상품 설명</S.Label>
            <S.Contents
              placeholder="내용을 작성해주세요."
              onChange={onChangeContents}
              defaultValue={props.data?.fetchUseditem?.contents}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>판매 가격</S.Label>
            <S.Price
              placeholder="판매가격을 입력해주세요."
              onChange={onChangePrice}
              defaultValue={props.data?.fetchUseditem.price}
            />
          </S.InputWrapper>
          <S.InputWrapper2>
            <div>
              <S.Label>거래 위치</S.Label>
              <S.LocationWrapper>
                <S.MapWrapper id="map">
                  <Map
                    address={
                      props.data?.fetchUseditem?.useditemAddress?.address ??
                      address
                    }
                  />
                </S.MapWrapper>
              </S.LocationWrapper>
            </div>
            <S.AddressWrapper>
              <S.Label>거래 주소</S.Label>
              <S.SearchButton onClick={onClickAddressSearch}>
                주소 검색
              </S.SearchButton>
              <S.Address
                readOnly
                value={
                  address !== ""
                    ? address
                    : props.data?.fetchUseditem?.useditemAddress?.address ?? ""
                }
              />
              <S.Address
                onChange={onChangeAddressDetail}
                defaultValue={
                  props.data?.fetchUseditem?.useditemAddress?.addressDetail
                }
              />
            </S.AddressWrapper>
          </S.InputWrapper2>
          <S.ImageWrapper>
            <S.Label>사진 첨부</S.Label>
            <S.ImageBox>
              {props.isEdit
                ? props.data?.fetchUseditem?.images?.map((el, index) => (
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
    </>
  )
}
