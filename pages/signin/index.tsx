import { useState } from "react"
import Signup from "../../src/components/units/signup/Signup"

export default function SigninPage() {
  const [signin, setSignin] = useState(true)

  return <Signup signin={signin} />
}
