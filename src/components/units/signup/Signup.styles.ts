import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  min-height: 700px;
  background-color: #fafafa;
  margin-top: 60px;
`
export const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #fff;
  margin: 48px;
`

export const Title = styled.h1`
  display: inline-block;
  padding-bottom: 30px;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  outline: none;
  margin-top: 20px;
`

export const ErrorMessage = styled.div`
  padding: 5px 0;
  font-size: 14px;
  color: #999;
`

export const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  background-color: #ffc700;
  margin: 40px 0 10px 0;
`
