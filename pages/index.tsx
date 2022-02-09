import type { NextPage } from 'next'
import MainContainer from '../components/MainContainer'
import SecHero from '../components/sections/SecHero'
import SecProfile from '../components/sections/SecProfile'
import SecWorks from '../components/sections/SecWorks'
import Head from 'next/head'
import { getOgImageLink } from '../services'

type Props = {
  imgLink?: string
}

const Home: NextPage<Props> = ({ imgLink }) => {
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devhank.vercel.app/" />
        <meta property="og:title" content="DevHank" />
        <meta property="og:description" content="Front End Developer" />
        <meta property="og:image" content={imgLink} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://devhank.vercel.app/" />
        <meta property="twitter:title" content="DevHank" />
        <meta property="twitter:description" content="Front End Developer" />
        <meta property="twitter:image" content={imgLink} />
      </Head>
      <MainContainer>
        <SecHero />
        <SecProfile />
        <SecWorks />
      </MainContainer>
    </>
  )
}

export default Home

export async function getServerSideProps() {
  const result = await getOgImageLink()
  const imgLink = await result[0].social.url

  return { props: { imgLink } }
}
