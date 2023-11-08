import { Global, ThemeProvider } from "@emotion/react"
import { RecoilRoot } from "recoil"
import type { AppProps } from "next/app"

import "../styles/globals.css"
import { GlobalStyles } from "../src/commons/styles/GlobalStyles"
import theme from "../src/commons/styles/theme"
import ApolloSetting from "../src/components/commons/apollo"
import Layout from "../src/components/commons/Layout"
import LoadingSpinner from "../src/components/commons/LoadingSpinner"
import Toast from "../src/components/commons/toasfify"
import { useLoading } from "../src/components/hooks/useLoading"

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
