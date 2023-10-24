import Banner from "../src/components/commons/layout/Banner"
import Home from "../src/components/units/home/Home"

export default function HomePage(): JSX.Element {
  return (
    <div style={{ marginTop: "65px" }}>
      <Banner />
      <Home />
    </div>
  )
}
