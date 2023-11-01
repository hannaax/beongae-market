import type { AppProps } from "next/app"
import "../styles/globals.css"
import Layout from "../src/components/commons/Layout"
import { Global, ThemeProvider } from "@emotion/react"
import { GlobalStyles } from "../src/commons/styles/GlobalStyles"
import ApolloSetting from "../src/components/commons/apollo"
import { RecoilRoot } from "recoil"
import theme from "../src/commons/styles/theme"
import Toast from "../src/components/commons/toasfify"
import { useLoading } from "../src/components/hooks/useLoading"
import LoadingSpinner from "../src/components/commons/LoadingSpinner"

function MyApp({ Component }: AppProps): JSX.Element {
  const nowLoading = useLoading()

  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <ThemeProvider theme={theme}>
            <Global styles={GlobalStyles} />
            <Toast />
            <Layout>
              {/* <LoadingSpinner /> */}
              {nowLoading ? <LoadingSpinner /> : null}
              <Component />
            </Layout>
          </ThemeProvider>
        </>
      </ApolloSetting>
    </RecoilRoot>
  )
}

export default MyApp
