import Head from 'next/head'
import { AppProps } from 'next/app'

import { MouseProvider } from 'contexts'
import { Layout, Progress } from 'components'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>João Pedro Magalhães - Front-end developer, UI/UX enthusiast & Gopher</title>
      </Head>
      <MouseProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Progress />
      </MouseProvider>
    </>
  )
}

export default MyApp
