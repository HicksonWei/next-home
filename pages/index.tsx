import type { NextPage } from 'next'
import MainContainer from '../components/MainContainer'
import SecHero from '../components/sections/SecHero'
import SecProfile from '../components/sections/SecProfile'
import SecWorks from '../components/sections/SecWorks'

const Home: NextPage = () => {
  return (
    <MainContainer>
      <SecHero />
      <SecProfile />
      <SecWorks />
    </MainContainer>
  )
}

export default Home
