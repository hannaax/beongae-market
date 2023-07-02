import styled from "@emotion/styled"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Wrapper = styled.div`
  height: 400px;
  overflow: hidden;
  .slick-list {
    // 부모
    height: 100%;
    margin: 0 -10px;
    box-sizing: border-box;
  }

  .slick-slide > div {
    // 자식 안에 div
    margin: 10px;
    box-sizing: border-box;
  }
  .slick-dots {
    bottom: +20px;
    /* .slick-active {
      button::before {
        color: #fff;
      }
    }
    button::before {
      color: #ccc;
    } */
  }
`

export const SliderItem = styled.img`
  height: 400px;
  width: 100%;
  margin: auto;
  object-fit: none;
`

export default function Banner() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/images/banner2.jpg" />
        </div>
        <div>
          <SliderItem src="/images/banner1.jpg" />
        </div>
        <div>
          <SliderItem src="/images/banner.png" />
        </div>
      </Slider>
    </Wrapper>
  )
}
