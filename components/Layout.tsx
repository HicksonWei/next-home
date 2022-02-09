import React, { ReactNode } from 'react'
import { useEffect } from 'react'
import Head from 'next/head'
import AppContainer from './AppContainer'

type Props = {
  children?: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    // 避免 refresh 時，頁面不會自動滾動到頂端
    window.history.scrollRestoration = 'manual'
  }, [])

  return (
    <>
      <Head>
        <title>DevHank</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossOrigin="anonymous"
        />

        <meta name="title" content="DevHank" />
        <meta name="description" content="Front End Developer" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devhank.vercel.app/" />
        <meta property="og:title" content="DevHank" />
        <meta property="og:description" content="Front End Developer" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://devhank.vercel.app/" />
        <meta property="twitter:title" content="DevHank" />
        <meta property="twitter:description" content="Front End Developer" />
      </Head>
      <AppContainer>{children}</AppContainer>
    </>
  )
}

export default Layout
