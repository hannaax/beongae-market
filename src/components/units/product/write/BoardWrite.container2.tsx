import { useEffect, useState } from "react"
import type { ChangeEvent } from "react"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import {
  CREATE_BOARD,
  CREATE_USEDITEM,
  UPDATE_BOARD,
} from "./BoardWrite.queries"
import BoardWriteUI from "./BoardWrite.presenter"
import { Modal } from "antd"
import type {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types"
import type { Address } from "react-daum-postcode"
import type { IBoardWriteProps } from "./BoardWrite.types"
import { useForm } from "react-hook-form"

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

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map") // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.462381, 126.813369), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        }

        const map = new window.kakao.maps.Map(container, options) // 지도 생성 및 객체 리턴

        // // 주소-좌표 변환 객체를 생성합니다
        // const geocoder = new window.kakao.maps.services.Geocoder()

        // // 주소로 좌표를 검색합니다
        // geocoder.addressSearch(
        //   "경기 성남시 분당구 판교역로 235 에이치스퀘어",
        //   function (result, status) {
        //     // 정상적으로 검색이 완료됐으면
        //     if (status === kakao.maps.services.Status.OK) {
        //       console.log(result)
        //     }
        //   }
        // )
      })
    }
  }, [])

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

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD)
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD)

  const [createUseditem] = useMutation(CREATE_USEDITEM)

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
            price: 1234,
            // tag,
            // boardAddress: {
            //   address,
            //   addressDetail,
            // },
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
    // }
    // }
    // const result = await createUseditem({
    //   variables: {
    //     createUseditemInput: {
    //       name: data.name,
    //       contents: data.contents,
    //       price: data.price,
    //       tags: [],
    //       images: ["test"],
    //     },
    //   },
    // })
    // console.log(result)
    // ===================== usehookform ========================== //
    // console.log(data)
    // console.log(data.images)
    // const result = await createUseditem({
    //   variables: {
    //     createUseditemInput: {
    //       name: data.name,
    //       contents: data.contents,
    //       price: data.price,
    //       tags: [],
    //       images: ["test"],
    //     },
  }

  const onClickUpdate = async () => {
    const currentFiles = JSON.stringify(fileUrls)
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images)
    const isChangedFiles = currentFiles !== defaultFiles
    if (
      !title &&
      !contents &&
      !youtubeUrl &&
      !address &&
      !addressDetail &&
      !zipcode &&
      !isChangedFiles
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
    if (isChangedFiles) updateBoardInput.images = fileUrls
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

  return (
    <BoardWriteUI
      nameError={nameError}
      contentsError={contentsError}
      tagError={tagError}
      addressError={addressError}
      fileUrlsError={fileUrlsError}
      onChangeName={onChangeName}
      onChangeContents={onChangeContents}
      onChangeTag={onChangeTag}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onChangeFileUrls={onChangeFileUrls}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
      isOpen={isOpen}
      // zipcode={zipcode}
      address={address}
      fileUrls={fileUrls}
      handleChangeContents={handleChangeContents}
    />
  )
}
