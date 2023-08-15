import styled from "@emotion/styled"

const Wrapper = styled.div`
  width: 100%;
  height: 250px;
  border-top: 2px solid #eee;
  padding: 20px;
  color: #666666;
  display: flex;
`

const Body = styled.div`
  margin-right: 50px;
`

const Title = styled.h1`
  font-size: 15px;
  font-weight: 600;
  padding: 5px 0px;
`

const Contents = styled.div`
  color: #7f7f7f;

  p {
    font-size: 13px;
    line-height: 180%;
  }
`

export default function Footer() {
  return (
    <Wrapper>
      <Body>
        <Title>번개마켓(주) 사업자정보</Title>
        <Contents>
          <p>대표이사 : 박한나 | 개인정보보호책임자 : 박한나</p>
          <p>
            사업자등록번호 : 113-86-45836 | 통신판매업신고 : 2019-서울서초-1126
          </p>
          <p>EMAIL : help@bunjang.co.kr | FAX : 02-598-8241</p>
          <p>
            주소 : 서울특별시 서초구 서초대로 38길 12, 7, 10층(서초동,
            마제스타시티, 힐스테이트 서리풀)
          </p>
        </Contents>
      </Body>
      <Body>
        <Title>
          고객센터 <span style={{ color: "#bbb", fontSize: "13px" }}>＞</span>
        </Title>
        <Contents>
          <p>1670-2910</p>
          <p>운영시간 9시 - 18시 (주말/공휴일 휴무, 점심시간 12시 - 13시)</p>
          <p>Ⓒ Bungaejangter. Inc All rights reserved.</p>
        </Contents>
      </Body>
    </Wrapper>
  )
}
