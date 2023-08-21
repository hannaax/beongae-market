import Banner from "../src/components/commons/layout/Banner"
import Home from "../src/components/units/home/Home.container"

export default function HomePage(): JSX.Element {
  return (
    <div style={{ marginTop: "100px" }}>
      <Banner />
      <Home />
    </div>
  )
}
