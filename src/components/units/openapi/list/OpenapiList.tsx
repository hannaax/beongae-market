import axios from "axios"
import { useEffect, useState } from "react"

export default function OpenapiList() {
  const [data, setData] = useState()
  useEffect(() => {
    const onClickSync = async (): Promise<void> => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random")
      console.log(result)
      setData(data)

      void onClickSync()
    }
  })
  return (
    <>
      <img src={data} alt="" />
    </>
    // {data.map(((el)=>(
    //     <div>{el.message}</div>
    // )))}
  )
}
