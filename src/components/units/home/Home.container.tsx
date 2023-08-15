import HomeUI from "./Home.presenter"
import { useQuery } from "@apollo/client"
import { FETCH_USEDITEMS_OF_THE_BEST } from "./Home.queries"

export default function Home() {
  const { data } = useQuery(FETCH_USEDITEMS_OF_THE_BEST)
  console.log(data)

  return <HomeUI data={data} />
}
