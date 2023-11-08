import Carousel from "../src/components/commons/carousel/Carousel"
import Home from "../src/components/units/home/Home"

export default function HomePage(): JSX.Element {
  return (
    <div style={{ marginTop: "47px" }}>
      <Carousel />
      <Home />
    </div>
  )
}
