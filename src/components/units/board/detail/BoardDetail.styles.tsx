import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
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
export const CardWrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #aaa;
`
export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`
export const LeftHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Avatar = styled.img`
  margin-right: 10px;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
export const Writer = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding-left: 3px;
`
export const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const DateLabel = styled.div`
  border-right: 1px solid #aaa;
  padding-right: 5px;
`
export const Date = styled.div`
  padding-left: 5px;
`
export const RightHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70px;
`
export const UrlCopyBtn = styled.button``
export const LocationBtn = styled.button``

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 30px 0px;
  min-height: 400px;
`
export const Title = styled.h2`
  padding: 30px 0px;
`
export const Contents = styled.div``

export const LikeBtns = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const LikeBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 20px;
`
export const LikeBtn = styled.button`
  padding-bottom: 10px;
`
export const LikeCount = styled.p``
export const DislikeBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const DislikeBtn = styled.button`
  padding-bottom: 10px;
`
export const DislikeCount = styled.p``

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
    background-color: gold;
    border-color: white;
  }
`
