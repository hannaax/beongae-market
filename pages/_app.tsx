import type { AppProps } from "next/app"
import "../styles/globals.css"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import Layout from "../src/components/commons/Layout"

function MyApp({ Component }: AppProps): JSX.Element {
  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  })
  return (
    <Layout>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
    </Layout>
  )
}

export default MyApp
