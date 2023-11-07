import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 100px;
  padding: 20px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const LeftHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    width: 100%;
  }
`

export const Imgbox = styled.div`
  /* width: 480px; */
  height: 450px;
  background-color: #f0f0f0;
  /* width: 100%; */
  /* width: 450px; */
  /* width: 480px; */
  width: 100%;
`

export const Img = styled.img`
  height: 480px;
  /* height: 40vw; */
  /* width: 100%; */
  width: 480px;
  @media (max-width: 1000px) {
    width: 100%;
    height: 480px;
  }
`

export const RightHeader = styled.div`
  padding: 20px 0 20px 50px;
  width: 100%;
  margin-left: 2vw;

  @media (max-width: 1000px) {
    padding: 30px 0;
    margin-left: 0;
  }
  /* @media (max-width: 500px) {
    padding: 30px 0;
  } */
`

export const Name = styled.div`
  font-size: 24px;
  font-weight: 600;
`

export const Price = styled.div`
  font-size: 40px;
  margin: 8px 0 20px 0;
  font-weight: 600;
`

export const HeaderInfo = styled.div``

export const PostInfoWrapper = styled.div`
  /* background-color: #aaa; */
  display: flex;
  color: #bbb;
`

export const PostInfo = styled.span`
  display: inline-block;
  margin-left: 5px;
  margin-right: 25px;
  color: #bbb;
`

export const Favorite = styled.div``

export const CreatedAt = styled.div``

export const ProductInfo = styled.div`
  margin: 35px 0 50px 0;
`

export const InfoWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  height: 20px;
  @media (max-width: 1000px) {
    width: 100%;
  }
`

export const InfoLabel = styled.div`
  color: #999999;
  width: 100px;
`

export const Info = styled.div`
  width: 300px;
  @media (max-width: 1000px) {
    width: 100%;
  }
`

export const Buttons = styled.div`
  margin-top: 40px;
  display: flex;
  & > button {
    margin: 0 5px;
    @media (max-width: 1000px) {
      width: 50vw;
    }
  }
`

// export const BuyButton = styled.button`
//   width: 175px;
//   height: 55px;
//   background-color: #ffc700;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 18px;
//   font-weight: 600;
//   color: #0c0c0c;
//   margin: 5px;
// `

export const Body = styled.div`
  display: flex;
  margin-top: 50px;
  border-top: 2px solid #aaa;
  padding-top: 30px;
  width: 100%;
`

export const LeftBody = styled.div`
  width: 80%;
  @media (max-width: 1000px) {
    width: 70%;
  }
  @media (max-width: 500px) {
    width: 60%;
  }
  @media (max-width: 400px) {
    width: 50%;
  }
`

export const RightBody = styled.div`
  border-left: 2px solid #eee;
  padding-left: 20px;
`

export const MiniTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding: 20px 0;
`

export const Avatar = styled.img``

export const MapWrapper = styled.div`
  margin-top: 50px;
`

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  margin-bottom: 30px;
`
export const BottomBtn = styled.button`
  width: 140px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  margin-top: 20px;
  cursor: pointer;

  :hover {
    background-color: #ffd600;
    border-color: white;
  }
`
