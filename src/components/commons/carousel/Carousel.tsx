import { useEffect, useState } from "react"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import Link from "next/link"
import { carouselData } from "./carouselData"
import * as S from "./style"

const Carousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      moveNextImg()
    }, 5000)

    return () => {
      clearInterval(timer)
    }
  }, [carouselIndex])

  // 화살표 버튼 이후 이미지
  const moveNextImg = () => {
    if (carouselIndex !== carouselData.length) {
      setCarouselIndex(carouselIndex + 1)
    } else {
      setCarouselIndex(1)
    }
  }
  // 화살표 버튼 이전 이미지
  const movePrevImg = () => {
    if (carouselIndex === 1) {
      setCarouselIndex(carouselData.length)
    } else {
      setCarouselIndex(carouselIndex - 1)
    }
  }
  // 닷 버튼 이동
  const moveDot = (index: number) => {
    setCarouselIndex(index)
  }
  return (
    <>
      <S.CarouselLayout>
        {carouselData.map((item, index) => {
          return (
            <Link href="#" key={item.id}>
              <S.ImgBox
                opacity={carouselIndex === index + 1 ? "active" : "none"}
              >
                <img src={`/images/banner${index + 1}.jpg`} alt={item.alt} />
              </S.ImgBox>
            </Link>
          )
        })}
        {/* 캐러셀 화살표 이동 버튼 */}
        <S.ArrowBtnDiv direct="left" />
        <S.ArrowBtn type="button" direct="left" onClick={movePrevImg}>
          <NavigateBeforeIcon sx={{ color: "#fff" }} />
        </S.ArrowBtn>
        <S.ArrowBtnDiv direct="right" />
        <S.ArrowBtn type="button" direct="right" onClick={moveNextImg}>
          <NavigateNextIcon sx={{ color: "#fff" }} />
        </S.ArrowBtn>

        {/* 캐러셀 닷 버튼  */}
        <S.DotBox>
          {Array.from({ length: carouselData.length }).map((_, index) => {
            return (
              <S.DotBtn
                key={index}
                isActive={carouselIndex === index + 1 ? "active" : ""}
                onClick={() => {
                  moveDot(index + 1)
                }}
              />
            )
          })}
        </S.DotBox>
      </S.CarouselLayout>
    </>
  )
}

export default Carousel
