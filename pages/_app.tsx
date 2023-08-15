import type { AppProps } from "next/app"
import "../styles/globals.css"
import Layout from "../src/components/commons/Layout"
import { Global } from "@emotion/react"
import { GlobalStyles } from "../src/commons/styles/GlobalStyles"
import ApolloSetting from "../src/components/commons/apollo"
import { RecoilRoot } from "recoil"
import { ThemeProvider } from "@emotion/react"
import theme from "../src/commons/styles/theme"
import Toast from "../src/components/commons/toasfify"

function MyApp({ Component }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <ThemeProvider theme={theme}>
            <Global styles={GlobalStyles} />
            <Toast />
            <Layout>
              <Component />
            </Layout>
          </ThemeProvider>
        </>
      </ApolloSetting>
    </RecoilRoot>
  )
}

export default MyApp
