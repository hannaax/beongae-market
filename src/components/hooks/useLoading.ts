import { useEffect, useState } from "react"
import Router from "next/router"

export const useLoading = () => {
  const [nowLoading, setNowLoading] = useState<boolean>(false)
  useEffect(() => {
    const start = () => {
      setNowLoading(true)
    }
    const end = () => {
      setNowLoading(false)
    }
    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)
    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  }, [])

  return !!nowLoading
}
