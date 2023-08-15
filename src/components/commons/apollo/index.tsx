import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client"
import { createUploadLink } from "apollo-upload-client"
import { useRecoilState } from "recoil"
import { accessTokenState } from "../../../commons/stores"
import { useEffect } from "react"

const GLOBAL_STATE = new InMemoryCache()

interface IApolloSettingProps {
  children: JSX.Element
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  // const client = new ApolloClient({
  //   uri: "http://backend-practice.codebootcamp.co.kr/graphql",
  //   cache: new InMemoryCache(),
  // })

  // ---------------
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)

  // 3. 프리렌더링 무시 - useEffect 방법
  useEffect(() => {
    const result = localStorage.getItem("accessToken")
    setAccessToken(result ?? "")
  }, [])

  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  })

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE, // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장 => 나중에 더 자세히
  })

  // --------------

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
        {props.children}
    </ApolloProvider>
  )
}
