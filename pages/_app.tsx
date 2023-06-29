import type { AppProps } from "next/app"
import "../styles/globals.css"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import Layout from "../src/components/commons/Layout"
import { Global } from "@emotion/react"
import { GlobalStyles } from "../src/commons/styles/GlobalStyles"

function MyApp({ Component }: AppProps): JSX.Element {
  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  })
  return (
    <>
      <Global styles={GlobalStyles} />
      <Layout>
        <ApolloProvider client={client}>
          <Component />
        </ApolloProvider>
      </Layout>
    </>
  )
}

export default MyApp
