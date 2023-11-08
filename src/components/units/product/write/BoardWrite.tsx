import React, { useState, useEffect, useRef } from "react"
import type { ChangeEvent } from "react"
import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import {
  CREATE_BOARD,
  CREATE_USEDITEM,
  FETCH_USER_LOGGED_IN,
  UPDATE_BOARD,
} from "./BoardWrite.queries"
import { Modal } from "antd"
import type {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IQuery,
} from "../../../../commons/types/generated/types"
import type { Address } from "react-daum-postcode"
import type { IBoardWriteProps } from "./BoardWrite.types"
import { useForm } from "react-hook-form"

import * as S from "./BoardWrite.styles"

import Uploads01 from "../../../commons/uploads/01/Uploads01"
import { v4 as uuidv4 } from "uuid"

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import dynamic from "next/dynamic"
import "react-quill/dist/quill.snow.css"
import {
  PersonPinCircleOutlined,
  LocationOn,
  PersonPinOutlined,
} from "@mui/icons-material"
import Map from "../../../commons/map/Map"

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill")

    return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />
  },
  {
    ssr: false,
  }
)

const schema = yup.object({
  name: yup.string().required("상품명을 입력해주세요."),
  contents: yup.string().required("상품을 설명해주세요."),
  price: yup.string().required("가격을 입력해주세요."),
  images: yup.string().required("이미지를 첨부해주세요."),
})

declare const window: typeof globalThis & {
  kakao: any
}

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const router = useRouter()
  const { setValue, trigger } = useForm({
    mode: "onChange",
  })

  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f11887ac006351d52e2ac59b193d4ce2&libraries=services"
    document.head.appendChild(script)

    script.onload = initializeMap

    // 페이지 변경 시 맵 내용을 로드합니다
    router.events.on("routeChangeComplete", initializeMap)

    // 초기화 이벤트를 제거합니다
    return () => {
      router.events.off("routeChangeComplete", initializeMap)
    }
  }, [router.asPath])

  const initializeMap = () => {
    if (typeof window !== "undefined" && window.kakao && window.kakao.maps) {
      // 카카오 맵 객체 초기화 및 API 사용 로직을 작성하세요
      window.kakao.maps.load(function () {
        const container = document.getElementById("map") // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.462381, 126.813369), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        }

        const map = new window.kakao.maps.Map(container, options) // 지도 생성 및 객체 리턴

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder()

        console.log("geo", geocoder)

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(address, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            console.log("result", result[0].address.x)
            console.log("opt", options)
            // options.center(new window.kakao.maps.LatLng(38, 126.813369))
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x)
            map.setCenter(coords)

            // 마커 이미지의 이미지 크기 입니다
            const markerImageSize = new kakao.maps.Size(64, 69)

            // 마커 이미지를 생성합니다
            const markerImage = new kakao.maps.MarkerImage(
              "/images/like.png",
              markerImageSize
            )

            // 마커를 생성하고 지도에 표시합니다.
            const marker = new kakao.maps.Marker({
              map,
              position: coords,
              image: markerImage,
            })
          }
        })
      })
    } else {
      // 실패한 경우에 대한 예외 처리를 작성하세요
      console.log("실패")
    }
  }

  const [isActive, setIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const [name, setName] = useState("")
  const [contents, setContents] = useState("")
  const [price, setPrice] = useState("")
  const [tag, setTag] = useState("")
  const [address, setAddress] = useState("")
  const [addressDetail, setAddressDetail] = useState("")
  const [fileUrls, setFileUrls] = useState(["", "", ""])

  const [nameError, setNameError] = useState("")
  const [contentsError, setContentsError] = useState("")
  const [priceError, setPriceError] = useState("")
  const [tagError, setTagError] = useState("")
  const [addressError, setAddressError] = useState("")
  const [fileUrlsError, setFileUrlsError] = useState(["", "", ""])

  // ================= //

  // useEffect(() => {
  //   if (address) {
  //     window.kakao.maps.load(function () {
  //       const container = document.getElementById("map") // 지도를 담을 영역의 DOM 레퍼런스
  //       const options = {
  //         center: new window.kakao.maps.LatLng(37.462381, 126.813369),
  //         level: 3,
  //       }
  //       const map = new window.kakao.maps.Map(container, options)

  //       const geocoder = new window.kakao.maps.services.Geocoder()

  //       geocoder.addressSearch(address, function (result, status) {
  //         if (status === kakao.maps.services.Status.OK) {
  //           const coords = new kakao.maps.LatLng(result[0].y, result[0].x)
  //           map.setCenter(coords)
  //         }
  //       })
  //     })
  //   }
  // }, [address])

  // ================= //

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD)
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD)

  const [createUseditem] = useMutation(CREATE_USEDITEM)

  const { data: loggedData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN)

  console.log("log", loggedData)

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
    if (event.target.value !== "") {
      setNameError("")
    }
    // if (event.target.value && password && title && contents) {
    //   setIsActive(true)
    // }
  }

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value)
    if (event.target.value !== "") {
      setContentsError("")
    }
    // if (writer && password && title && event.target.value) {
    //   setIsActive(true)
    // }
  }

  const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value)
    if (event.target.value !== "") {
      setPriceError("")
    }
    // if (writer && password && title && event.target.value) {
    //   setIsActive(true)
    // }
  }

  const onChangeTag = (event: ChangeEvent<HTMLInputElement>) => {
    setTag(event.target.value)
    if (event.target.value !== "") {
      setTagError("")
    }
    // if (writer && password && title && event.target.value) {
    //   setIsActive(true)
    // }
  }

  const onClickAddressSearch = (): void => {
    setIsOpen((prev) => !prev)
  }

  const onCompleteAddressSearch = (data: Address): void => {
    setAddress(data.address)
    // setZipcode(data.zonecode)
    setIsOpen((prev) => !prev)
    console.log("address", address)
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

    console.log(fileUrls)
  }

  const handleChangeContents = (value: string) => {
    console.log(value)
    setValue("contents", value === "<p><br></p>" ? "" : value)
    void trigger("contents")
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
    // if (writer && password && title && contents) {
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
      console.log(result.data?.createUseditem._id)
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
    const currentFiles = JSON.stringify(fileUrls)
    const defaultFiles = JSON.stringify(props.data?.fetchBoard?.images)
    // const isChangedFiles = currentFiles !== defaultFiles
    if (
      // name,
      // contents,
      // remarks: "",
      // price: Number(price),
      // useditemAddress: {
      //   address,
      //   addressDetail,
      //   lat: 1,
      //   lng: 2,
      // },
      // images: [...fileUrls],
      !name &&
      !contents &&
      !price &&
      !address &&
      !addressDetail
      // &&
      // !isChangedFiles
    ) {
      Modal.warning({ content: "수정한 내용이 없습니다." })
      return
    }
    // if (!password) {
    //   Modal.warning({ content: "비밀번호를 입력해주세요." })
    //   return
    // }
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
    // if (isChangedFiles) updateBoardInput.images = fileUrls
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
      console.log(result)
    } catch (error) {
      Modal.error({ content: error.message })
    }
  }

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  })

  const QuillRef = useRef<ReactQuill>(false)
  console.log("quillref", QuillRef)

  useEffect(() => {
    if (props.isEdit) {
      if (QuillRef.current) {
        const quill = QuillRef.current.getEditor()
        console.log("quill", quill)
        quill?.clipboard.dangerouslyPasteHTML(0, "test")
      }
    }
  }, [QuillRef])

  console.log("data", props.data)

  return (
    <>
      {/* <form onSubmit={handleSubmit({props.isEdit ? props.onClickUpdate : props.onClickSubmit})}> */}
      {/* <form onSubmit={handleSubmit(props.onClickSubmit)}> */}
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
                // {...register("name")}
              />
              {/* <S.Error>{formState.errors.name?.message}</S.Error> */}
            </S.InputWrapper>
          </S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>상품 설명</S.Label>
            {/* <ReactQuill
              placeholder={
                props.isEdit
                  ? props.data?.fetchUseditem.contents
                  : "상품을 설명해주세요"
              }
              onChange={handleChangeContents}
              style={{ width: "100%", height: "300px" }}
              // {...register("contents")}
              forwardedRef={QuillRef}
            /> */}
            <S.Contents
              placeholder="내용을 작성해주세요."
              onChange={onChangeContents}
              defaultValue={props.data?.fetchUseditem?.contents}
            />
            {/* <S.Error>{formState.errors.contents?.message}</S.Error> */}
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>판매 가격</S.Label>
            <S.Price
              placeholder="판매가격을 입력해주세요."
              onChange={onChangePrice}
              defaultValue={props.data?.fetchUseditem.price}
              // {...register("price")}
            />
            {/* <S.Error>{formState.errors.price?.message}</S.Error> */}
          </S.InputWrapper>
          {/* <S.InputWrapper>
            <S.Label>태그 입력</S.Label>
            <S.Tag
              placeholder="상품을 설명해주세요."
              onChange={props.onChangeTag}
              defaultValue={props.data?.fetchUseditem.contents}
            /> */}
          {/* <S.Error>{formState.errors.title?.message}</S.Error> */}
          {/* </S.InputWrapper> */}
          <S.InputWrapper2>
            <div>
              <S.Label>거래 위치</S.Label>
              <S.LocationWrapper>
                {/* <script
                  type="text/javascript"
                  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f11887ac006351d52e2ac59b193d4ce2&libraries=services"
                ></script> */}
                <S.MapWrapper id="map">
                  {/* <PersonPinCircleOutlined /> */}
                  <Map
                    address={
                      props.data?.fetchUseditem?.useditemAddress?.address ??
                      address
                    }
                  />
                </S.MapWrapper>
              </S.LocationWrapper>
            </div>
            {/* <Map address={address} /> */}
            <S.AddressWrapper>
              <S.Label>거래 주소</S.Label>
              {/* <S.Zipcode
                  placeholder="07250"
                  readOnly
                  value={
                    props.zipcode !== ""
                      ? props.zipcode
                      : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
                  }
                /> */}
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
            {/* </S.LocationWrapper> */}
          </S.InputWrapper2>
          <S.ImageWrapper>
            <S.Label>사진 첨부</S.Label>
            <S.ImageBox>
              {/* {fileUrls.map((el, index) => (
                <Uploads01
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={onChangeFileUrls}
                />
              ))} */}
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
          <S.OptionWrapper>
            {/* <S.Label>메인 사진 설정</S.Label>
            <S.RadioButton type="radio" id="youtube" name="radio-button" />
            <S.RadioLabel htmlFor="youtube">사진1</S.RadioLabel>
            <S.RadioButton type="radio" id="image" name="radio-button" />
            <S.RadioLabel htmlFor="image">사진2</S.RadioLabel> */}
          </S.OptionWrapper>
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
      {/* </form> */}
    </>
  )
}
