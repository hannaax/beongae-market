import { useEffect } from "react"
import Signup from "../../src/components/units/signup/Signup.container"
import { useRouter } from "next/router"

export default function SignupPage() {
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      void router.push("/")
    }
  }, [])

  return <Signup />
}
