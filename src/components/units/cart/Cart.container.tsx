import { useEffect, useState } from "react"
import CartUI from "./Cart.presenter"

export default function Cart() {
  const [baskets, setBaskets] = useState()
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") ?? "[]")
    setBaskets(baskets)
  }, [])

  return (
    <>
      <CartUI baskets={baskets} />
    </>
  )
}
