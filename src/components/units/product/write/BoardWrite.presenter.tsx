import * as S from "./BoardWrite.styles"
import type { IBoardWriteUIProps } from "./BoardWrite.types"
import Uploads01 from "../../../commons/uploads/01/Uploads01.container"
import { v4 as uuidv4 } from "uuid"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import dynamic from "next/dynamic"
import "react-quill/dist/quill.snow.css"
import React, { useEffect, useRef, useState } from "react"

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

export default function BoardWriteUI(props: IBoardWriteUIProps) {
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

  return (
    <>
      {/* <form onSubmit={handleSubmit({props.isEdit ? props.onClickUpdate : props.onClickSubmit})}> */}
      {/* <form onSubmit={handleSubmit(props.onClickSubmit)}> */}
      {props.isOpen && (
        <S.AddressModal
          open={true}
          onOk={props.onClickAddressSearch}
          onCancel={props.onClickAddressSearch}
        >
          <S.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
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
                onChange={props.onChangeName}
                defaultValue={props.data?.fetchUseditem.name}
                // {...register("name")}
              />
              {/* <S.Error>{formState.errors.name?.message}</S.Error> */}
            </S.InputWrapper>
          </S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>상품설명</S.Label>
            <ReactQuill
              placeholder={
                props.isEdit
                  ? props.data?.fetchUseditem.contents
                  : "상품을 설명해주세요"
              }
              onChange={props.handleChangeContents}
              style={{ width: "100%", height: "300px" }}
              // {...register("contents")}
              forwardedRef={QuillRef}
            />
            {/* <S.Error>{formState.errors.contents?.message}</S.Error> */}
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>판매 가격</S.Label>
            <S.Price
              placeholder="판매가격을 입력해주세요."
              onChange={props.onChangePrice}
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
          <S.InputWrapper>
            <S.Label>거래위치</S.Label>
            <S.LocationWrapper>
              <script
                type="text/javascript"
                src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f11887ac006351d52e2ac59b193d4ce2&libraries=services"
              ></script>
              <div
                id="map"
                style={{
                  width: "100%",
                  height: "200px",
                  backgroundColor: "#eee",
                }}
              >
                지도
              </div>
              <S.AddressWrapper>
                <S.Label>주소</S.Label>
                {/* <S.Zipcode
                  placeholder="07250"
                  readOnly
                  value={
                    props.zipcode !== ""
                      ? props.zipcode
                      : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
                  }
                /> */}
                <S.SearchButton onClick={props.onClickAddressSearch}>
                  주소 검색
                </S.SearchButton>
                <S.Address
                  readOnly
                  value={
                    props.address !== ""
                      ? props.address
                      : props.data?.usedItem.useditemAddress?.address ?? ""
                  }
                />
                <S.Address
                  onChange={props.onChangeAddressDetail}
                  defaultValue={
                    props.data?.usedItem.useditemAddress?.addressDetail
                  }
                />
              </S.AddressWrapper>
            </S.LocationWrapper>
          </S.InputWrapper>
          <S.ImageWrapper>
            <S.Label>사진첨부</S.Label>
            <S.ImageBox>
              {props.fileUrls.map((el, index) => (
                <Uploads01
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              ))}
            </S.ImageBox>
          </S.ImageWrapper>
          <S.OptionWrapper>
            <S.Label>메인 사진 설정</S.Label>
            <S.RadioButton type="radio" id="youtube" name="radio-button" />
            <S.RadioLabel htmlFor="youtube">사진1</S.RadioLabel>
            <S.RadioButton type="radio" id="image" name="radio-button" />
            <S.RadioLabel htmlFor="image">사진2</S.RadioLabel>
          </S.OptionWrapper>
          <S.ButtonWrapper>
            <S.SubmitButton
              onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
              isActive={props.isEdit ? true : props.isActive}
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
