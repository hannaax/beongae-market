import Header from "./Header"
import Banner from "./Banner"
import Navigation from "./Navigation"

export default function Layout(props: any) {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Navigation />
      </div>
      {props.children}
    </>
  )
}
