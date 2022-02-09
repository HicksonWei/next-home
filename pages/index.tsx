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
        <meta property="og:image" content={imgLink} />
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
