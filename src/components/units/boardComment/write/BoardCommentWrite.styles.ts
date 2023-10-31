import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Wrapper = styled.div`
  width: 100%;
  margin: 20px 10vw;
  margin-bottom: 30px;
  @media (max-width: 800px) {
    margin: 20px 0;
    padding: 0 20px;
  }
`
export const PencilIcon = styled.img``

export const Title = styled.span`
  display: inline-block;
  margin-bottom: 3.5px;
  margin-left: 8px;
  font-size: 18px;
  font-weight: 700;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
`
export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin-right: 20px;
`
export const RateInput = styled.div`
  display: flex;
  flex-direction: center;
  width: 100%;
`

export const ContentsWrapperDiv = styled.div``
export const ContentsWrapper = styled.div`
  /* display: flex;
  justify-content: center; */
  width: 100%;
  border: 1px solid lightgray;
`
export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
`
export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`
export const Button = styled.button`
  width: 91px;
  height: 51px;
  background-color: #ffc700;
  color: black;
  cursor: pointer;
`
