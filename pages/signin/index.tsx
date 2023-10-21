import Signup from "../../src/components/units/signup/Signup"
import { useState } from "react"

export default function SigninPage() {
  const [signin, setSignin] = useState(true)

  return <Signup signin={signin} />
}
