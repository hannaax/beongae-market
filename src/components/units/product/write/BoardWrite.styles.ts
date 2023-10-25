import styled from "@emotion/styled"
import { Modal } from "antd"
import { DaumPostcodeEmbed } from "react-daum-postcode"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`

export const Wrapper = styled.div`
  /* width: 1200px; */
  width: 100%;
  /* max-width: 1336px; */
  /* height: 1847px; */
  border: 1px solid black;
  /* margin: 100px; */
  /* padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: none;
  box-shadow: 0px 0px 10px gray; */
  border: solid 2px #eee;
  border: none;
  margin: 80px 100px;
  padding: 0 8px;
`

export const Title = styled.div`
  font-size: 36px;
  /* width: 1200px; */
  font-weight: 600;
`

export const TitleBottom = styled.div`
  /* width: 1200px;
  height: 10px;
  border-bottom: 2px solid #000; */
`

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
  width: 100%;
`

export const Name = styled.input`
  /* width: 996px; */
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`

// export const Password = styled.input`
//   width: 486px;
//   height: 52px;
//   padding-left: 16px;
//   border: 1px solid #bdbdbd;
// `

export const Label = styled.div`
  padding-bottom: 12px;
  padding-top: 13px;
  font-size: 18px;
  font-weight: 500;
  width: 100%;
`

export const InputWrapper = styled.div`
  /* display: flex; */
  padding-top: 40px;
  width: 100%;
`

// export const Summary = styled.input`
//   width: 996px;
//   height: 52px;
//   padding-left: 16px;
//   border: 1px solid #bdbdbd;
// `

export const Detail = styled.textarea`
  width: 100%;
  height: 480px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
`

export const Price = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`

export const Tag = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`

export const InputWrapper2 = styled.div`
  display: flex;
  padding-top: 40px;
  width: 100%;
`

export const LocationWrapper = styled.div`
  /* display: flex; */
  /* justify-content: space-between;
  align-items: center; */
  /* width: 100%; */
`

export const MapWrapper = styled.div`
  width: 400px;
  height: 250px;
  background-color: #ececec;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 12px;
`

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  /* margin-left: 16px; */
  background-color: #ffc700;
  cursor: pointer;
  color: #000;
`

export const Address = styled.input`
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`

// export const Youtube = styled.input`
//   width: 996px;
//   height: 52px;
//   padding-left: 16px;
//   border: 1px solid #bdbdbd;
// `

export const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
`

export const ImageBox = styled.div`
  display: flex;
`

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`

export const FileInput = styled.input`
  display: none;
`

export const OptionWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
`

export const RadioButton = styled.input`
  cursor: pointer;
`

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`

export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #bdbdbd;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  background-color: #ffc700;
`

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`

export const AddressModal = styled(Modal)``

export const AddressSearchInput = styled(DaumPostcodeEmbed)``
