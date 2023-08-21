import Header from "./layout/header/Header"
import Navigation from "./layout/navigation/Navigation"
import SideBar from "./layout/sidebar/SideBar"
import Footer from "./layout/Footer"

export default function Layout(props: any) {
  return (
    <div>
      <div>
        {/* <div style={{ position: "fixed", top: 0, backgroundColor: "#fff" }}> */}
        <div>
          <Header />
        </div>
        <div>
          <Navigation />
        </div>
        {/* </div> */}
        <div>
          <div>
            {props.children}
            {/* <div
            style={{
              position: "fixed",
              top: "200px",
              right: "3%",
              width: "window.innerWidth - 1200px",
            }}
          > */}
            <div>
              <SideBar />
            </div>
          </div>
          {/* </div> */}
          <Footer />
        </div>
      </div>
    </div>
  )
}
