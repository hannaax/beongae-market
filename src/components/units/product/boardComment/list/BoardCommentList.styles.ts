import styled from "@emotion/styled"
import { Rate, Modal } from "antd"

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const ItemWrapper = styled.div`
  width: 100%;
  margin: 0 100px;
  padding-top: 20px;
  height: 128px;
  border-bottom: 1px solid lightgray;
`

export const FlexWrapper = styled.div`
  display: flex;
`

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`
export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`

export const WriterRateWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Writer = styled.div`
  font-size: 17px;
  font-weight: bold;
`

export const Contents = styled.div``

export const OptionWrapper = styled.div`
  display: flex;
`

export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`
export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`

export const DateString = styled.div`
  color: lightgray;
  padding-top: 15px;
  padding-left: 60px;
`

export const Star = styled(Rate)`
  padding-left: 20px;
`

export const PasswordModal = styled(Modal)``

export const PasswordInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-top: 10px;
`
