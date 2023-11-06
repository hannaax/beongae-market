import React, { useEffect } from "react"
import { useRouter } from "next/router"

const Map = ({ address, width }) => {
  const router = useRouter()

  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f11887ac006351d52e2ac59b193d4ce2&libraries=services"
    document.head.appendChild(script)

    script.onload = initializeMap
    router.events.on("routeChangeComplete", initializeMap)

    return () => {
      router.events.off("routeChangeComplete", initializeMap)
    }
  }, [router.asPath, address])

  const initializeMap = () => {
    if (typeof window !== "undefined" && window.kakao && window.kakao.maps) {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map")
        const options = {
          center: new window.kakao.maps.LatLng(37.554722, 126.970833),
          level: 3,
        }

        const map = new window.kakao.maps.Map(container, options)
        const geocoder = new window.kakao.maps.services.Geocoder()

        geocoder.addressSearch(address, function (result, status) {
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            )
            map.setCenter(coords)
            const markerImageSize = new window.kakao.maps.Size(64, 69)
            const markerImage = new window.kakao.maps.MarkerImage(
              "/images/like.png",
              markerImageSize
            )
            const marker = new window.kakao.maps.Marker({
              map,
              position: coords,
              image: markerImage,
            })
          }
        })
      })
    } else {
      console.log("실패")
    }
  }

  return <div id="map" style={{ height: "250px" }}></div>
}

export default Map
