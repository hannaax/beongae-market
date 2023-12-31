import styled from "@emotion/styled"
import { Modal } from "antd"
import { DaumPostcodeEmbed } from "react-daum-postcode"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

export const Wrapper = styled.div`
  width: 100%;
  border: 1px solid black;
  margin: 100px;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
`

export const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
`

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`

export const Div = styled.div`
  width: 5vw;
`

export const Writer = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  margin-right: 10px;
`

export const Password = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`

export const InputWrapper = styled.div`
  padding-top: 40px;
  width: 100%;
`

export const Subject = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`

export const Contents = styled.textarea`
  width: 100%;
  height: 480px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
`

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`

export const SearchButton = styled.button`
  width: 120px;
  height: 52px;
  margin-left: 16px;
  background-color: #ffc700;
  cursor: pointer;
  color: #0a0a0a;
`

export const Address = styled.input`
  width: 100%;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`

export const Youtube = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`

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
  padding: 20px 35px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#ffc700" : "#ffc700")};
`

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`

export const AddressModal = styled(Modal)``

export const AddressSearchInput = styled(DaumPostcodeEmbed)``
