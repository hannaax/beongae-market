import styled from "@emotion/styled"

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`

export const Header = styled.div`
  display: flex;
`

export const LeftHeader = styled.div``

export const Imgbox = styled.div`
  width: 450px;
  height: 400px;
  background-color: #f0f0f0;
`

export const Thumbnail = styled.img``

export const RightHeader = styled.div`
  padding: 30px 50px;
  width: 500px;
`

export const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
`

export const Price = styled.div`
  font-size: 25px;
  margin: 20px 0;
  font-weight: 700;
`

export const BuyButton = styled.button`
  width: 100%;
  height: 52px;
  background-color: yellow;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  cursor: pointer;
`

export const Body = styled.div``

export const MiniTitle = styled.div`
  font-size: 18px;
  padding: 20px 0;
`

export const Avatar = styled.img``

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`
export const BottomBtn = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-color: white;
  }
`
