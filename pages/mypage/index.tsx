import { useEffect } from "react"
import { useRouter } from "next/router"
import Mypage from "../../src/components/units/mypage/Mypage"

export default function MypagePage(): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다.")
      void router.push("/")
    }
  }, [])
  return (
    <>
      <Mypage />
    </>
  )
}
