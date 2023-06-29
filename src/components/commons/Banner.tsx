import styled from "@emotion/styled"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// const Carousel = styled.div`
//   width: 100%;
//   height: 200px;
//   background-color: lightgray;
// `

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      {/* <Carousel> */}
      <div>
        <Slider {...settings}>
          <div style={{ height: 100 }}>
            <h3>1</h3>
            <img src="/images/banner.png" />
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>

      {/* </Carousel> */}
    </>
  )
}
