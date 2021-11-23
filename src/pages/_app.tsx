import { AppProps } from 'next/app'

import { MouseProvider } from 'contexts'

import { Layout, Progress } from 'components'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MouseProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Progress />
    </MouseProvider>
  )
}

export default MyApp
