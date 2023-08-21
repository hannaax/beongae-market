import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 100px;
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const LeftHeader = styled.div`
  width: 100%;
`

export const Imgbox = styled.div`
  /* width: 480px; */
  height: 450px;
  background-color: #f0f0f0;
  width: 100%;
`

export const Img = styled.img`
  height: 480px;
  width: 100%;
`

export const RightHeader = styled.div`
  padding: 30px 50px;
  width: 100%;
  border: 1px solid #ddd;
`

export const Name = styled.div`
  font-size: 24px;
  font-weight: 600;
`

export const Price = styled.div`
  font-size: 40px;
  margin: 20px 0;
  font-weight: 500;
`

export const HeaderInfo = styled.div``

export const PostInfo = styled.div`
  display: flex;
  color: #bbb;
`

export const Favorite = styled.div``

export const CreatedAt = styled.div``

export const ProductInfo = styled.div`
  margin: 30px 0;
`

export const InfoWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  width: 300px;
  height: 20px;
`

export const InfoLabel = styled.div`
  padding-right: 20px;
  color: #999999;
`

export const Info = styled.div``

export const Buttons = styled.div`
  display: flex;
`

export const BuyButton = styled.button`
  width: 175px;
  height: 55px;
  background-color: #ffc700;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: #0c0c0c;
  margin: 5px;
`

export const Body = styled.div`
  display: flex;
  margin-top: 50px;
  border-top: 2px solid #aaa;
  padding-top: 30px;
  width: 100%;
`

export const LeftBody = styled.div`
  width: 80%;
`

export const RightBody = styled.div`
  border-left: 2px solid #eee;
  padding-left: 30px;
`

export const MiniTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
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
  width: 140px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: #ffd600;
    border-color: white;
  }
`
