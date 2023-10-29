import styled from "@emotion/styled"
import { Rate, Modal } from "antd"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 77vw;
  margin-right: 20px;
  padding-top: 20px;
  height: 128px;
  border-bottom: 1px solid lightgray;
  @media (max-width: 800px) {
    width: 80vw;
  }
`

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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
  font-size: 18px;
  font-weight: bold;
`

export const Contents = styled.div``

export const OptionWrapper = styled.div`
  display: flex;
`

export const QusetionAnswerButton = styled.button``

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
